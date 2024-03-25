<template>
  <div class="CosmeticGallery">
    <div class="gallery-options">
        <input type="text" v-model="search" placeholder="Search a product">
        <button v-if="search" @click="cleanSearch">Clean</button>
        <label for="product-sort" id="cosmetic-sort"></label>
        <select v-model="productsSortName" id="cosmetic-sort">
          <option value="AZName">Produits de A à Z</option>
          <option value="ZAName">Produits de Z à A</option>
          <option value="AZBrand">Marque de A à Z</option>
          <option value="ZABrand">Marque de Z à A</option>
        </select>
        <select v-model="productsSortType" id="cosmetic-sort-type">
          <option value="blush">Blush</option>
          <option value="bronzer">Bronzer</option>
          <option value="foundation">Foundation</option>
          <option value="eyebrow">Eyebrow</option>
          <option value="eyeliner">Eyeliner</option>
          <option value="eyeshadow">Eyeshadow</option>
          <option value="lipLiner">Lip Liner</option>
          <option value="lipstick">Lipstick</option>
          <option value="mascara">Mascara</option>
          <option value="nail_polish">NailPolish</option>
        </select>
        <button v-on:click="filter">Filtrer</button>
    </div>
    <div class="gallery">
        <CosmeticCard v-for="cosmetic in cosmeticOrganizedData"
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
    
    export default {
      name: 'CosmeticGallery',
      components: {
        CosmeticCard
      },

      computed:{
        cosmeticOrganizedData: function(){

          const field=["AZName", "ZAName"].includes(this.productsSortName) ? "name" : "brand"
          const reversed =["ZAName", "ZABrand"].includes(this.productsSortName) ? -1 :1

          // const filterType= (a) => a.product_type.toLowerCase().includes(this.productsSortType)

          return this.cosmeticData
            .filter((a)=> a.name.toLowerCase().includes(this.search.toLocaleLowerCase()))
            .filter((a) => a.product_type.toLowerCase().includes(this.productsSortType))
            .sort((a,b)=> a[field].localeCompare(b[field])*reversed)
 
          // const field= ["AZName", "ZAName"].includes(this.productsSortName) ? "name" : "brand"
          // const reversed = ["ZAName", "ZABrand"].includes(this.productsSortName)
          // const filterFunc= (a)=> a.name.toLowerCase().includes(this.search.toLowerCase())
          // const comparator = (a,b) => a[field].localeCompare(b[field])
            
          // let data =[ ...this.cosmeticData]
          //   console.log(data);
          // data.filter(filterFunc)
          // data = data.sort(comparator)
          // if(reversed)data =data.reverse()
          // return data


        }
      },

      data(){
        return{
            cosmeticData:[],
            search: "",
            productsSortName: "AZName",
            productsSortType:""
        }
      },
      created: function(){
        this.retrieveCosmeticData()
      },
      methods: {
        async retrieveCosmeticData() {
          this.cosmeticData = await getCosmeticData()
          this.cleanSearch()
          this.filter()
        },

        cleanSearch: function(){
          this.search=""
        },

        filter: function(){
          this.cosmeticData = this.cosmeticOrganizedData
        },

      }
    }
    </script>

<style>
    .text {
      color: v-bind(color);
    }
</style>