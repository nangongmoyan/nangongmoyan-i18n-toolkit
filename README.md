# nangongmoyan-i18n-toolkit

nangongmoyan-i18n-toolkit是一个fork [i18n-toolkit](https://github.com/JinYuSha0/i18n-toolkit) 项目而生成的多语言工具包

## prefix - operation

在正式使用之前，我们需要进行 Google Sheets 授权一些相关配置

### 1.Create Google Cloud Project（新建 Google Cloud 项目）

[链接：https://console.cloud.google.com/projectcreate](https://console.cloud.google.com/projectcreate)

#### create

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f0df64f7b7e94a469a459b1ed2520386~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2550&h=605&s=92456&e=png&b=fefefe)

#### success created 

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/990b5a76fa5c4beebe7d0fa86d8c68f5~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2554&h=1256&s=364748&e=png&b=fbfbfb)

### 2. Enable Google Sheets API And Apps Script API（启用Google Sheets API And Apps Script API）

[Enable Google Sheets API](https://console.cloud.google.com/apis/library/sheets.googleapis.com)

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a9dc7f395695482e8783da299aaa70e5~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2556&h=1158&s=187515&e=png&b=fbfbfb)

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f92f1145170d41618d15971681a55308~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2556&h=1359&s=212486&e=png&b=fcfcfc)

[Enable Apps Script API](https://console.cloud.google.com/marketplace/product/google/script.googleapis.com)

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7a371665ed72423c909d883d84eae2eb~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2559&h=1076&s=172338&e=png&b=fbfbfb)

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7083279ea4504b2b8145d3f0714a3bc9~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2559&h=1355&s=206824&e=png&b=fdfdfd)

### 3. OAuth consent screen（OAuth 同意屏幕）

[链接：https://console.cloud.google.com/apis/credentials/consent](https://console.cloud.google.com/apis/credentials/consent)

#### 3.1. Select User Type（选择用户类型）

这边我选择External（任何拥有 Google 帐户的测试用户均可使用）

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f28ae048783045e2bbc4a726f7047d8f~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2558&h=1016&s=224743&e=png&b=fefefe)

#### 3.2. Edit app registration（填写相关信息）

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bc9aed83f432419da23f0372495eda6a~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2559&h=1396&s=370673&e=png&b=fefefe)

#### 3.3. Add Scopes（添加授权范围）

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8e0ec3901a374678ba7bbac647991d6d~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2556&h=1249&s=191687&e=png&b=ffffff)

 - Checked All Google Sheets API (所有都勾选上)

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad5b5cf17d3e4d8b8392c572d78ddcbe~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2558&h=1148&s=250891&e=png&b=c5c5c5)

 - Checked All Apps Script API (所有都勾选上)
 
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a552b173ef144dcf99e0e0e16c5d5f3b~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2557&h=1281&s=323864&e=png&b=c5c5c5)

#### 3.4. Summary（概括）

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2856e94323e34161ac1f107d55095ea1~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2559&h=1408&s=222459&e=png&b=ffffff)

### 4. Create Credential（创建凭证）

[链接：https://console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials)

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8d663a554cc34a9a885e506b6ea85442~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2559&h=899&s=165258&e=png&b=fefefe)

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/554080b7ef594734a4c5e993ae310579~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2556&h=1132&s=150679&e=png&b=afafaf)

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/59e297b8ac6440e0abce261c70497618~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2559&h=1220&s=182069&e=png&b=b2b2b2)

### 5. Create  Google Sheets (创建 Google Sheets)

[链接：https://docs.google.com/spreadsheets/u/0/](https://docs.google.com/spreadsheets/u/0/)

#### 5.1. Blank spreadsheets（创建空白电子表格）

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e56c628d8ff644529ed9e28559e92755~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2559&h=1185&s=134298&e=png&b=ffffff)

#### 5.2. Add Apps Script （添加脚本）

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d80142ca77ef44e2af47a954f87fbf78~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2559&h=606&s=90001&e=png&b=fefefe)

将下面脚本添加进去

```
function onEdit(e) {
  AutoGenerateKey(e.range.getRowIndex(), e.value);
}

// 自动生成hash key
function AutoGenerateKey(rowIndex, value) {
  if (value == undefined) return;
  var targetColumn = "A";
  var sheet = SpreadsheetApp.getActive();
  var keyRange = sheet.getRange(targetColumn + rowIndex);
  var keyValue = keyRange.getValue();
  if (!!keyValue) return;
  var dateStr = new Date().toISOString();
  var rawHash = Utilities.computeDigest(
    Utilities.DigestAlgorithm.MD5,
    value + dateStr
  );
  var txtHash = "";
  for (i = 0; i < rawHash.length; i++) {
    var hashVal = rawHash[i];
    if (hashVal < 0) {
      hashVal += 256;
    }
    if (hashVal.toString(16).length == 1) {
      txtHash += "0";
    }
    txtHash += hashVal.toString(16);
  }
  sheet.getRange(targetColumn + rowIndex).setValue(txtHash);
}
```

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3a479e33c5674f599e1c0bd474602a1b~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2559&h=935&s=193950&e=png&b=f7f8f9)

### 6. 添加配置文件`i18n.config.json`到项目根目录

```
{
  "apiKey": "上面第四步生成的key",
  "outputDir": "i18n", // 输出目录
  "spreadsheetId": "<google表格url中很长的那一段>",
  "tableIndex": 0, // 谷歌表格第一个子表
  "langues": ["zh-CN", "en-US"] // 支持的语言
}
```

### 7. 表格填写

当在对应语言下面填入相关内容，第一列会根据脚本自动生成一个hash值

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d2168a2fff7c49d4a70efa1fdb43d778~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2557&h=465&s=82370&e=png&b=fdfdfd)

## usage

### Installation

#### Npm

```
npm install nangongmoyan-i18n-toolkit
```
#### Yarn

```
yarn add nangongmoyan-i18n-toolkit
```
### 添加`i18n.config.json`配置文件
```
{
  "apiKey": "上面第四步生成的key",
  "outputDir": "i18n", // 输出目录
  "spreadsheetId": "<google表格url中很长的那一段>",
  "tableIndex": 0, // 谷歌表格第一个子表
  "langues": ["zh-CN", "en-US"] // 支持的语言
}
```

### 在package.json中的scripts中添加

```
"intl": "nangongmoyan-i18n-toolkit"
```

### 命令行执行npm run intl

```
npm run intl
```

就会将对应语言的json文件下载下来：

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/715f1e965d0640ab82a0269c900732d6~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2559&h=1343&s=1000615&e=png&b=23262c)

### 在VS Code中可以显示语言对应的具体文案

- 安装VS Code 插件： i18n ally

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/681ddfedec964f92a286c3e0a323d379~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2043&h=1315&s=231509&e=png&b=24272d)


- 显示英文

**Tips:点击右下角红框可以选择在编辑器中显示对应语言的文本**

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0688cbafff7c4bdc8c5691268fa8d586~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2560&h=1074&s=271648&e=png&b=24272d)

- 显示中文

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b1aab968018e47acbcc956851371fd03~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2560&h=1074&s=269873&e=png&b=23262c)


### 页面显示

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9ecc95329b554a6a969f996783dfdb5c~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2552&h=1352&s=148108&e=png&b=24272d)

点击 changeLanguage 会切换成另外一个语言


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d754346c99db4ba18eff3188f4202986~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2554&h=1346&s=147674&e=png&b=24272d)


[上面demo链接](https://github.com/nangongmoyan/i18n-toolkit-demo), 本地执行npm start就可以看到效果