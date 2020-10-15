const form = document.querySelector("form");
const inputs = [...document.querySelectorAll("input")];


    inputs.forEach((input)=>{
        input.addEventListener("click",(e)=>{
            inputs.forEach((input)=>{
                input.classList.remove('selected')
            })
            e.currentTarget.classList.add("selected")
            if(e.currentTarget.classList.contains('selected')){
                const s=e.currentTarget.value;
                form.addEventListener("submit",(a)=>{
                    a.preventDefault();
                    if(s=='baby'){
                        console.log('hoise');
                    }else{
                        console.log('hoynai');
                    }
                })
            }
        })
    })