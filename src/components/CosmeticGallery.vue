<template>
  <h1>CosmetIMAC</h1>
  <div class="CosmeticGallery">
    <GalleryOptions v-model:search="search" v-model:productsSortName="productsSortName" v-model:productsSortType="productsSortType"/>
    <div class="gallery">
        <CosmeticCard 
        v-for="cosmetic in cosmeticOrganizedData"
        :name="cosmetic.name" 
        :product_type="cosmetic.product_type" 
        :brand="cosmetic.brand" 
        :price="cosmetic.price" 
        :image_link="cosmetic.image_link"/>
    </div>
  </div>
</template>

<script>
    import {getCosmeticData} from '@/services/api/cosmeticRepository'

    import CosmeticCard from '@/components/CosmeticCard.vue'
    import GalleryOptions from '@/components/GalleryOptions.vue'
    
    export default {
      name: 'CosmeticGallery',
      components: {
        CosmeticCard,
        GalleryOptions
      },

      computed:{
        cosmeticOrganizedData: function(){

          const field=["AZName", "ZAName"].includes(this.productsSortName) ? "name" : "brand"
          const reversed =["ZAName", "ZABrand"].includes(this.productsSortName) ? -1 :1

          if(this.productsSortType=="all"){
            return this.cosmeticData
            .filter((a)=> a.name.toLowerCase().includes(this.search.toLocaleLowerCase()))
            .sort((a,b)=> a[field].localeCompare(b[field])*reversed)
          }

          return this.cosmeticData
            .filter((a)=> a.name.toLowerCase().includes(this.search.toLocaleLowerCase()))
            .filter((a) => a.product_type.toLowerCase().includes(this.productsSortType))
            .sort((a,b)=> a[field].localeCompare(b[field])*reversed)
        }
      },

      data(){
        return{
            cosmeticData:[],
            search: localStorage.getItem("search")||"",
            productsSortName: localStorage.getItem("productsSortName")||"AZName",
            productsSortType:localStorage.getItem("productsSortType")||"all"
        }
      },
      created: function(){
        this.retrieveCosmeticData()
        console.log(this.cosmeticData)
      },
      methods: {
        async retrieveCosmeticData() {
          this.cosmeticData = await getCosmeticData()
        }
      }
    }
    </script>

<style>
    h1{
      justify-content: center;
      font-size: 60px;
      font-weight: bold;
      color: aquamarine;
      text-align: center;
    }

    .text {
      color: v-bind(color);
    }

    .GalleryOptions{
      justify-content: center;
    }

    .CosmeticGallery{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
    }

    .CosmeticCard{
      display: inline-grid;
    }

</style>