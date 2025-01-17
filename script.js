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

// fungsi buat nambah todo
function addTodo(){
  const todoText = input.ariaValueMax.trim()
  if (todoText !== ''){
    todos.push({text : todoText, completed : false})
    input.value = ''
    renderTodos()
  }else{
    alert ('task cannot be empty')
  }
}

// fungsi buat menandai todo selesai
function toggleComplete(index){
  todos[index].completed = !todos[index].completed
  renderTodos()
}

// fungsi buat hapus todo
function deleteTodo(index){
  todos.splice(index, 1)
  renderTodos()
}

// event listener buat tombol tambah
addButton.addEventListener('click', addTodo)

// render awal (kosong)
renderTodos()