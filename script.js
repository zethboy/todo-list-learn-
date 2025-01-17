//ambil elemen
const input = document.querySelector('#todo-input')
const addButton = document.querySelector('#add-todo')
const todoList = document.querySelector('#todo-list')

// array todo
let todos = []

// fungsi buat render todo ke html
function renderTodos(){
  todoList.innerHTML = '' //buat hapus elemen sebelumnya
  todos.forEach((todo, index)=> {
    const li = document.querySelector('#li')
    li.className = `todo-item ${todo.completed ? 'completed' : ''}`
    li.innerHTML=`
      <span>${todo.text}</span>
      <div>
        <button onclick = "toggleComplete(${index})">✔</button>
        <button onclick = "deleteTodo(${index})">❌</button>
      </div>`
  })

}