const btnNode=document.querySelector(".btn");
const textNode=document.querySelector("#target")

btnNode.addEventListener("click", ()=>{
    textNode.innerText="Прости не будет тебе счастья пока не освоишь JS"

})

btnNode.addEventListener("dblclick", ()=>{
    textNode.innerText="Ладно, это шутка)Выучи реакт и потом можешь вернуться"

})

const formNode=document.querySelector("#form")
formNode.addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log(event.target.title.value)
    event.target.reset();
})

const randNode=document.querySelector(".randomBtn")
randNode.addEventListener("click", (event)=>{
    randNode.innerText=Math.floor(Math.random()*101);
})
