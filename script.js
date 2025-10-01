const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', e => { if(e.key==='Enter') addTask(); });

function addTask(){
  const text = taskInput.value.trim();
  if(!text) return alert("Please write a task");
  
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = text;

  const btnGroup = document.createElement('div');
  btnGroup.className = 'task-buttons';

  const editBtn = createButton('Edit','edit-btn',()=>editTask(span));
  const deleteBtn = createButton('Delete','delete-btn',()=>li.remove());
  const doneBtn = createButton('Done','complete-btn',()=>li.classList.toggle('completed'));

  btnGroup.append(editBtn,deleteBtn,doneBtn);
  li.append(span,btnGroup);
  taskList.appendChild(li);
  taskInput.value = '';
}

function createButton(text, cls, action){
  const b = document.createElement('button');
  b.textContent = text;
  b.className = cls;
  b.onclick = action;
  return b;
}

function editTask(span){
  const updated = prompt("Edit your task:", span.textContent);
  if(updated!==null && updated.trim()!==""){
    span.textContent = updated.trim();
  }

}
