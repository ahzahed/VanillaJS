function getElement(item){
   
    const finalItem = document.querySelector(item)
    if(finalItem){
        return finalItem;
    }
    throw `Id/Class name thik moto de beta!`
    
}
export default getElement