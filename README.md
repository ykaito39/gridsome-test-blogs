# gridsome-test-blogs. 
  
# Memo
いくつかのつまづきをメモする。  
  
## M1 Macでのgridsome. 
M1 Macを使用している場合で、npm、もしくはyarnでGridsomeのパッケージをインストールする際、インストールは成功するがgridsome developコマンドが通らない。  
エラー内容はUnknown command develop。  
ちなみにIssueが建っているようだ。  
https://github.com/gridsome/gridsome/issues/1503  
  
仕方なくwindowsのmingwin上で構築して見たところすんなり通った。(2021/7/1)  
  
## gridsomeをnetrifyでデプロイする際のセッティング  
gridsome developで、ローカル環境からサイトが動作することを確認したあと、netrifyでデプロイする。  
このとき、netrifyのサイト設定を以下のように変更すること。  
  
Build settings  
Base directory:〇〇(gridsome create 〇〇のディレクトリ)  
Build command: gridsome build  
Publish directory: 〇〇/dist  
  
Branches  
Puroduction branch: master  
<- 何故かmainではなくmasterにアップロードされてた... 
  
