const getCosmeticData = async function(){
    const response = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
    if(response.status ==200){
        return await response.json()
    } else {
        new Error(response.statusText)
    }
}
export {getCosmeticData}