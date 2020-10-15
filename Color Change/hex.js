const hex = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

const btn = document.querySelector(".btn");
const text = document.querySelector(".text");

btn.addEventListener("click",()=>{
    let newHex = "#";
    for(let i=0; i<6; i++){
        const color = hex[Math.floor(Math.random()*10)]
        newHex += color;
    }
    document.body.style.background = newHex;
    text.style.color = newHex;
    text.innerHTML = newHex;
})
