# ZBestPC_VueMpa
# 專案描述
本專案是使用webpack5對原生Js項目進行Vue2升級的練手項目。  
參考了開源項目ZBestPC  
來源:https://github.com/adminlly/ZBestPC

# 功能描述
本項目使用Vue2進行spa改造，也能使用Vue2進行mpa開發
1.webpack5對主頁及登錄頁進行模塊化升級  
2.引入MVVM框架Vue  
3.js、css文件合併壓縮  
4.css文本抽離  
5.webpack5進行圖片抽離

#項目操作參考
Spa模式  
npm start啟動webpack-dev-server  
Url中輸入http://localhost:9000/#/home    
輸入npm run build時在dist目錄下可看到index.html入口文件
  

Mpa模式
npm start:mpa啟動webpack-dev-server  
Url中輸入http://localhost:9000/#/home.html  
輸入npm run build:mpa時在dist目錄下可看到此時index.html入口文件消失  
並由home.html及login.html兩個文件替代
