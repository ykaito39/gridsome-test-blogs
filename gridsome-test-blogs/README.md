# Default starter for Gridsome

This is the project you get when you run `gridsome create new-project`.

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Create a Gridsome project

1. `gridsome create my-gridsome-site` to install default starter
2. `cd my-gridsome-site` to open the folder
3. `gridsome develop` to start a local dev server at `http://localhost:8080`
4. Happy coding 🎉🙌

# Memo
いくつかのつまづきをメモする。  
M1 Macを使用している場合で、npm、もしくはyarnでGridsomeのパッケージをインストールする際、インストールは成功するがgridsome developコマンドが通らない。  
エラー内容はUnknown command develop。  
  
仕方なくwindowsのmingwin上で構築して見たところすんなり通った。(2021/7/1)  
  
gridsome developで、ローカル環境からサイトが動作することを確認したあと、netrifyでデプロイする。  
このとき、netrifyのサイト設定を以下のように変更すること。  
  
Build settings  
Base directory:〇〇(gridsome create 〇〇のディレクトリ)  
Build command: gridsome build  
Publish directory: 〇〇/dist  
  
Branches  
Puroduction branch: master  
<- 何故かmainではなくmasterにアップロードされてた... 
  
