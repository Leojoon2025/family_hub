function load(key){ return JSON.parse(localStorage.getItem(key) || "[]"); }
function save(key,data){ localStorage.setItem(key,JSON.stringify(data)); }

function renderList(key, elementId){
  const data = load(key);
  const el = document.getElementById(elementId);
  el.innerHTML = "";
  data.forEach((t,i)=>{
    const div=document.createElement("div");
    div.className="item";
    div.innerHTML = t + " <button onclick='del(""+key+"","+i+")'>Delete</button>";
    el.appendChild(div);
  });
}

function del(key, index){
  const data = load(key);
  data.splice(index,1);
  save(key,data);
  renderAll();
}

function addSchedule(){ addItem("schedule","schedule-input"); }
function addTask(){ addItem("tasks","task-input"); }
function addEvent(){ addItem("events","event-input"); }

function addItem(key, inputId){
  const val=document.getElementById(inputId).value.trim();
  if(!val) return;
  const data=load(key);
  data.push(val);
  save(key,data);
  document.getElementById(inputId).value="";
  renderAll();
}

function renderAll(){
  renderList("schedule","schedule-list");
  renderList("tasks","task-list");
  renderList("events","event-list");
}

renderAll();
