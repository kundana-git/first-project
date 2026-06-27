//clock
setInterval(()=>{
    document.getElementById("time").textContent=new Date().toLocaleTimeString();
}, 1000);

//To Do
function add(){
    let task=document.getElementById("task").value;
    if(task){
        document.getElementById("list").innerHTML+=`<li>${task}</li>`;
        document.getElementById("task").value="";
    }
}