const path = require("path");
const { SocksProxyAgent } = require("socks-proxy-agent");
const { createDirIfNotExists, writeJsonFile } = require('./help');
const { GoogleSpreadsheet } = require("@shaojinyu/google-spreadsheet");

/** 获取进程参数集合 */
const args = process.argv.slice(2);

/** 获取配置路径名称 */
const [configPath] = args;

/** 生成配置路径 */
const CONFIG_PATH = configPath
  ? path.join(process.cwd(), configPath)
  : path.join(process.cwd(), "i18n.config.json")

/** 从配置未见中读取数据 */
const {
  apiKey, // key
  langues, // 语言集合
  outputDir, // 输出路径
  socksProxy, // socks代理地址
  tableIndex, // 表格缩影
  spreadsheetId, //电子表格 ID
} = require(CONFIG_PATH);

/** 生成多语言的路径 */
const OUT_PUT_DIR = path.join(process.cwd(), outputDir);

/** */
async function getSheet () {

  try {
    console.log("\x1B[36m%s\x1B[0m", "Start download i18n");

    let agent = null;
    if (!!socksProxy) {
      /** 连接到指定的socks代理服务器 */
      agent = new SocksProxyAgent(socksProxy);
    }

    /** 生成GoogleSpreadsheet */
    const googleSpreadsheet = new GoogleSpreadsheet(spreadsheetId, agent);

    /** 使用对应的apiKey */
    await googleSpreadsheet.useApiKey(apiKey);

    /** 加载信息 */
    await googleSpreadsheet.loadInfo();

    /** 如果tableIndex是数组*/
    if (Array.isArray(tableIndex)) {
      const promises = [];
      /** */
      tableIndex.forEach((index) => {
        promises.push(processSheet(googleSpreadsheet, index));
      });
      /** */
      await Promise.all(promises);
    } else {
      /** 处理表格数据 */
      await processSheet(googleSpreadsheet, tableIndex);
    }
    console.log("\x1b[32m", "Done");
  } catch (error) {
    console.log("\x1B[31m", "Download failure cause: " + error.message);
  }
}

/** 处理表格数据 */
async function processSheet (googleSpreadsheet, index) {
  const map = {};

  /** 获取表格信息*/
  const sheet = googleSpreadsheet.sheetsByIndex[index];

  /** 生成后缀*/
  let suffix = Array.isArray(tableIndex) ? `${sheet.title}.` : "";

  /** 获取表格数据 */
  const rows = await sheet.getRows();

  /** 将语言作为map的键 */
  langues.forEach((lang) => (map[lang] = {}));

  rows.forEach((row) => {
    /** 将每行第一列的值作为键 */
    const key = row._rawData[0];
    if (!key) return;
    /** 将数据赋值给对应的语言 */
    langues.forEach((lang) => {
      map[lang][key] = row[lang];
    });
  });

  /** 创建输出路径 */
  createDirIfNotExists(OUT_PUT_DIR);

  /** 将数据写入对应语言的json文件中 */
  Object.keys(map).forEach((lang) => {
    writeJsonFile(
      path.join(OUT_PUT_DIR, `${lang}.${suffix}json`),
      map[lang]
    );
  });
}

getSheet()