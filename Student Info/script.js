import getElement from "./elements.js";

const student = {
    std1: {
        name: "Hamza",
        address: "Mirpur",
        cgpa: 3.0
    },
    std2: {
        name: "Hemel",
        address: "Jigalota",
        cgpa: 3.55
    },
    std3: {
        name: "Sabu",
        address: "Feni",
        cgpa: 3.66
    }
}

const rollBtn  = document.querySelectorAll(".rollBtn")
const showRoll = getElement(".showRoll");

const infoBtn  = document.querySelectorAll(".infoBtn");
const showInfo = getElement(".showInfo");
const infoPlace = getElement(".infoPlace");

rollBtn.forEach((item)=>{
    item.addEventListener("click",(target)=>{
        rollBtn.forEach((e)=>{
            e.classList.remove(".active");
        })
        target.currentTarget.classList.add(".acitve");
        showRoll.textContent = target.currentTarget.textContent;

        //Roll Button ID
        const id = target.currentTarget.dataset.id;

        infoBtn.forEach((item)=>{
            item.addEventListener("click",(target)=>{
                infoBtn.forEach((e)=>{
                    e.classList.remove(".active");
                })
                target.currentTarget.classList.add(".acitve");

                //Information Button ID
                const infoId = target.currentTarget.dataset.id;

                //ShortCut
                showInfo.textContent = `${student[id][infoId]}`
                
                //Long Way
                // if(id === "std1"){
                //     if(infoId === "name"){
                //         showInfo.textContent = `${student[id].name}`
                //     }
                //     else if(infoId === "address"){
                //         showInfo.textContent = `${student[id].address}`
                //     }
                //     else{
                //         showInfo.textContent = `${student[id].CGPA}`
                //     }
                // }
                // else if(id === "std2"){
                //     if(infoId === "name"){
                //         showInfo.textContent = `${student[id].name}`
                //     }
                //     else if(infoId === "address"){
                //         showInfo.textContent = `${student[id].address}`
                //     }
                //     else{
                //         showInfo.textContent = `${student[id].CGPA}`
                //     }
                // }
                // else if(id === "std3"){
                //     if(infoId === "name"){
                //         showInfo.textContent = `${student[id].name}`
                //     }
                //     else if(infoId === "address"){
                //         showInfo.textContent = `${student[id].address}`
                //     }
                //     else{
                //         showInfo.textContent = `${student[id].CGPA}`
                //     }
                // }
            })
        })
    })
})


