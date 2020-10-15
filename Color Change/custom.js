const color = ["red","green","blue","orange"];

const btn = document.querySelector(".btn");
const text = document.querySelector(".text");

btn.addEventListener("click",()=>{
    const random = Math.floor((Math.random()*color.length));
    document.body.style.background = color[random];
    text.style.color = color[random];
    text.innerHTML = color[random];
})