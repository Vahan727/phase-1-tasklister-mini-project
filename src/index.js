document.addEventListener("DOMContentLoaded", () => {
}
);
function renderTask(text) {
  const li = document.createElement('li')
  li.className = 'New Task'
  li.textContent = text
  document.querySelector('#tasks').appendChild(li)
}
const form = document.querySelector("form")
form.addEventListener("submit", (e) => handleTask(e))
function handleTask(event) {
  event.preventDefault()
  const input = document.querySelector('input').value
  renderTask(input)
}
