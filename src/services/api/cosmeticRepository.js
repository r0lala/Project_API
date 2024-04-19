const getCosmeticData = async function(){
    const response = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
    if(response.status ==200){
        let listCosmetics = await response.json();

        listCosmetics = listCosmetics.filter(cosmetic => cosmetic.name !== null && cosmetic.brand !== null);
        
        return listCosmetics;
    } else {
        throw new Error(response.statusText)
    }
}
export {getCosmeticData}