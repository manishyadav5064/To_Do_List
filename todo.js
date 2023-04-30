
const taskkk = document.querySelector("#taskk");
const listt = document.querySelector("#list-container");




function addTask(){
    if(taskkk.value === '')
    {
        alert("Please write some task");
    }
    else{
        let li = document.createElement('li');
        li.textContent = taskkk.value ;
        listt.appendChild(li);    
        let span= document.createElement('span');
        span.innerHTML="x";
        li.appendChild(span);
        taskkk.value='';
        savedata();
    }
}

listt.addEventListener("click", function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        savedata();
    }
})

function savedata(){
    localStorage.setItem("data" , listt.innerHTML);
}

function showTask(){
    listt.innerHTML = localStorage.getItem("data");
}

showTask();