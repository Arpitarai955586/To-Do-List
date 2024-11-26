const inputBox=document.getElementById("input-box")
const listConatainer=document.getElementById("list-container")

function addTask(){
    if(inputBox.value===''){
    alert("you must write something")
    }else{
        let li=document.createElement("li")
        let span=document.createElement("span")

        li.innerHTML=inputBox.value
        span.innerHTML="\u00d7"
        li.appendChild(span);
        listConatainer.appendChild(li)

    }
    inputBox.value="";
    saveData();

}
listConatainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem("data",listConatainer.innerHTML)
}
function showTask(){
    listConatainer.innerHTML=localStorage.getItem("data")
}
showTask();