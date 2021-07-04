<template>
  <Layout>
    <div class="author-head">
      <g-image src="~/site_images/author.jpg" width="100" />
      <h1>About ykaito39</h1>
    </div>
    <div>
      <h2>経歴</h2>
      <p>2019年3月 高専電気情報工学科を卒業<br/>
      2019年4月 輸送機器製造業社へ入社<br/>
      至 現在</p>
      
      <h2>スキルセット</h2>
      <p>C, AVR/gcc<br/>
      Linux<br/>
      Python<br/>
      <div class="addnote-box">selenium, beautifulsoup, pyautoGUI等を用いた業務自動化/RPA<br/>
      クローラとFlaskを使った社内データ配信サーバーの構築</div>
      </p>
      
      <h2>趣味</h2>
      <p>バイクツーリング、サーキット走行<br/>
      写真撮影
      <div class="addnote-box">デジタル:Fujifilm X-pro2<br/> アナログ:PENTAX MX</div><br/>
      画像加工(PhotoShop)</div><br/>
      </p>
    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About ykaito39'
  }
}
</script>
<style>
.author-head {
  margin: 10px 0 0 0;
  display: flex;
  //justify-content:center;
  align-items:flex-end;
  height: 100px;
}
.author-head img{
  float: left;
  height: 100px;
  border-radius: 50%;

  padding:3px;
  background-color: #F1F1F1;
  box-shadow: 0 3px 18px -4px rgba(0,0,0,0.8);
}
.author-head h1{
  position: relative;
  left: 10px;
  margin: 0;
}
</style>