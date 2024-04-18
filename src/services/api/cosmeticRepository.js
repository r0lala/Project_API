const getCosmeticData = async function(){
    const response = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
    if(response.status ==200){
        let listCosmetics = await response.json();

        console.log(listCosmetics);//931 produits

        listCosmetics = listCosmetics.filter(cosmetic => cosmetic.name !== null && cosmetic.brand !== null);
        
        console.log(listCosmetics);//919 produits
        return listCosmetics;

    } else {
        new Error(response.statusText)
    }
}
export {getCosmeticData}