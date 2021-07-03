# gridsome-test-blogs. 
  
# Memo
いくつかのつまづきをメモする。  
  
## M1 Macでのgridsome. 
M1 Macを使用している場合で、npm、もしくはyarnでGridsomeのパッケージをインストールする際、インストールは成功するがgridsome developコマンドが通らない。  
エラー内容はUnknown command develop。  
~仕方なくwindowsのmingwin上で構築して見たところすんなり通った。~
ちなみにIssueが建っているようだ。下記の通り、libvipsをインストールしてからgridsomeを再インストールしたら動いた。    
https://github.com/gridsome/gridsome/issues/1503  
   
(2021/7/1)  
  
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
  
## source-filesystemのGraphQL設定について  
https://gridsome.org/plugins/@gridsome/source-filesystem  
上記のサイトを参考に、gridsome.config.jsファイルを設定する。  
コメントは//がつかえる。  
本レポジトリでは、optionsにbaseDirとpathを分割して与えたが、  
このときbaseDirはgridsome.config.jsがあるファイルからの位置で与えた。  
src/templates/Post.md、src/pages/Index.vueで次のようなエラーが発生する場合は、pathが間違っている可能性もある。    
Error: Cannot query field "title" on type "Post".
