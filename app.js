function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    //get the text
    let title = newToDoText.value;
    //create a new li
    let newLi = document.createElement('li');
    //create a new input
    let checkbox = document.createElement('input');
    //set input's type to checkbox
    checkbox.type = "checkbox";

//this bit is from the video in the checkpoint; let's you  add a delete button with each li-checkbox combo
    let deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener('click', function() {
      toDoList.removeChild(this.parentNode);
    }) //This didn't work using 'parentElement' and upon searching, 'parentNode' was a workable solution.

    //set the title
    newLi.textContent = title;
    //attach the checkbox to the li
    newLi.appendChild(checkbox);
    //attach the li to the ul
    toDoList.appendChild(newLi);

    newLi.appendChild(deleteButton);

    //empty the input
    newToDoText.value = '';

  });
}

window.onload = function() {
  onReady();
}
