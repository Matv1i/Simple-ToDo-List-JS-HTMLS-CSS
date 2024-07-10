document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("input-pole")
  const addButton = document.getElementById("add-btn")
  const changeButton = document.querySelector(".change-btn")
  const changeButtonRight = document.querySelector(".change-btn-right")
  const listContainer = document.getElementById("list-container")
  const completedContainer = document.getElementById("completed")

  addButton.addEventListener("click", function () {
    const taskText = inputField.value.trim()

    if (taskText !== "") {
      const taskItem = document.createElement("div")
      taskItem.className = "item-content"
      taskItem.innerHTML = `
        <div class="text">${taskText}</div>
        <div class="buttons-task">
          <button class="yes-btn">&#10004;</button>
          <button class="x-btn">&#10006;</button>
        </div>
      `

      
      taskItem.querySelector(".x-btn").addEventListener("click", function () {
        listContainer.removeChild(taskItem)
      })

      
      taskItem.querySelector(".yes-btn").addEventListener("click", function () {
        taskItem.querySelector(".yes-btn").remove()
        
        taskItem.querySelector(".x-btn").addEventListener("click", function () {
          completedContainer.removeChild(taskItem)
        })
        completedContainer.appendChild(taskItem)
      })

      listContainer.appendChild(taskItem)
      inputField.value = ""
    }
  })


  changeButton.addEventListener("click", () => {
    if (changeButton.innerHTML === "Currently") {
      changeButton.innerHTML = `Completed`
      listContainer.style.display = "none"
      completedContainer.style.display = "flex"
    } else {
      changeButton.innerHTML = `Currently`
      listContainer.style.display = "flex"
      completedContainer.style.display = "none"
    }
  })
})
