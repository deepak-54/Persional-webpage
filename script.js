
const bodyEle = document.querySelector("body")

let barsEle = document.querySelector(".bar")
let cutEle = document.querySelector(".xmark")
let linksEle = document.querySelector(".links-2")



barsEle.addEventListener("click",()=>{
  linksEle.style.display = "block"
  ishello = true
});


  cutEle.addEventListener("click",()=>{
    linksEle.style.display = "none"
  })

  let allounEle = document.querySelector(".allounce")
  let setEle = document.querySelector(".setting")
  let calEle = document.querySelector(".calcultor")
  let secEle = document.querySelector(".securty")
  let desEle = document.querySelector(".desktop")
  let listenEle = document.querySelector("#music")

  allounEle.addEventListener("click",()=>{
    confirm("Are Your Sure Open Alloucment Section ?? ")
  })
  setEle.addEventListener("click",()=>{
    confirm("You Are Sure Open Setting ?? ")
  })
  calEle.addEventListener("click",()=>{
    confirm("Are You Sure Open Calculator ?? ")
  })
  secEle.addEventListener("click",()=>{
    confirm("Are You Sure Open Securty Section ?? ")
  })
  desEle.addEventListener("click",()=>{
    confirm("Are You Sure Open Desktop ??")
  })
  listenEle.addEventListener("click",()=>{
    confirm("Are You Sure Open Music Listen ?? ")
    
  })

const colo1Ele = document.querySelector(".color-1")
const color2Ele = document.querySelector(".color-2")
const color3Ele = document.querySelector(".color-3")
const bgEle = document.querySelector(".bg-color-1")
colo1Ele.addEventListener("click",()=>{
  bodyEle.classList.add("back-color")
})
color2Ele.addEventListener("click",()=>{
  bodyEle.classList.add("back-color-2")
})

color3Ele.addEventListener("click",()=>{
  bodyEle.classList.add("back-color-3")
})
