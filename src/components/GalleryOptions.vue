<template>
    <div class="GalleryOptions">
        <input type="text" :value="search" @input="onSearchChanged" placeholder="Search a product">
        <button v-if="search" @click="cleanSearch">Clean</button>

        <label for="product-sort" id="cosmetic-sort"></label>
        <select :value="productsSortName" @input="onProductsSortNameChanged" id="cosmetic-sort">
          <option value="AZName">Products from A to Z</option>
          <option value="ZAName">Products from Z to A</option>
          <option value="AZBrand">Brand from A to Z</option>
          <option value="ZABrand">Brand from Z to A</option>
        </select>
        <select :value="productsSortType" @input="onProductsSortTypeChanged" id="cosmetic-sort-type">
          <option value="all">All</option>
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
    </div>
</template>

<script>
export default{
    name: 'GalleryOptions',
    props : {
        search: String,
        productsSortName: String,
        productsSortType: String
    },

    emits:["update:search", "update:productsSortName","update:productsSortType"],

    watch:{
        search: function(newSearch){
          localStorage.setItem("search", newSearch)
        },
        productsSortType: function(newProductsSortType){
          localStorage.setItem("productsSortType", newProductsSortType)
        },
        productsSortName: function(newProductsSortName){
          localStorage.setItem("productsSortName", newProductsSortName)
        }
      },

    methods: {
        cleanSearch: function(){
            this.$emit('update:search', event.target.value)
        },
        onSearchChanged(event){
            this.$emit('update:search', event.target.value)
        },
        onProductsSortNameChanged(event){
            this.$emit('update:productsSortName', event.target.value)
        },
        onProductsSortTypeChanged(event){
            this.$emit('update:productsSortType', event.target.value)
        },
        
    }
}
</script>

<style>
    .GalleryOptions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
    }

    .GalleryOptions input[type="text"] {
        flex-grow: 1;
        margin-right: 10px;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid aquamarine;
    }

    .GalleryOptions button {
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
        background-color: aquamarine;
        color: rgb(0, 0, 0);
        cursor: pointer;
    }

    .GalleryOptions button:hover {
        background-color:aquamarine;
    }

    .GalleryOptions select {
        margin-left: 15px;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
    }
</style>
