<template>
    <div class="CosmeticCard">
      <img class="image_link" v-bind:src="image_link"/>
      <div>
        <h2 class="name">{{name}}</h2>
        <p class="product_type">{{product_type}}</p>
        <p class="brand">{{brand}}</p>
        <p class="price">{{price}}</p>
      </div>  
    </div>
  </template>
  
  <script>
      export default {
        name: 'CosmeticCard',
        props: {
          name : {String, default:"unknown"},
          product_type: {String, default:"unknown"},
          brand: {String, default:"unknown"},
          price: {String, default:"unknown"},
          image_link: {type: String, default:"https://images.assetsdelivery.com/compings_v2/nadinpanina/nadinpanina1803/nadinpanina180300020.jpg"}
      }
    }
  </script>
  
  <style>
      .CosmeticCard{
        display: inline-grid;
        background-color: rgb(255, 208, 246);
        color : black;
        width: 300px;
        height: 400px;
        margin : 20px;
        padding : 20px;
        border-radius: 20px;
      }

      .CosmeticCard:hover{
        /*box-shadow: 6px 6px 6px rgb(255, 240, 162);*/
        background-color: aquamarine;
        transition:  0.5s ease-in-out;
      }

      img{
        height: 200px;
        padding: 10px;
        margin: auto;
      }

  
      h2 {
        font-size: 20px;
        font-weight: 900;
      }
  </style>