document.querySelector('.element').style.display = "none";

const keys = [];

const deleteNote = () => {
  if (confirm('Вы уверены?')) {
    localStorage.removeItem(keys.findIndex(item => item?.link == event.currentTarget.parentNode.parentNode));
    keys.splice(keys.findIndex(item => item?.link == event.currentTarget.parentNode.parentNode), 1);
    event.currentTarget.parentNode.parentNode.remove();
  }
}

const addNewNote = () => {
  if (document.querySelector('.input__text').value != '') {
    let newRow = document.querySelector('.container__element').cloneNode(true);
    newRow.querySelector('.note__text').value = document.querySelector('.input__text').value;
    newRow.style.display = "";
    document.querySelector('.container').appendChild(newRow);

    localStorage.setItem(0, +localStorage.getItem(0) + 1);
    localStorage.setItem(localStorage.getItem(0), document.querySelector('.input__text').value);

    keys[+localStorage.getItem(0)] = {};
    keys[+localStorage.getItem(0)].key = localStorage.key(localStorage.getItem(0));
    keys[+localStorage.getItem(0)].link = document.querySelector('.container').lastElementChild;

    document.querySelector('.input__text').value = '';
    document.querySelector('.container').lastElementChild.querySelector('.delete').addEventListener('click', deleteNote);
    document.querySelector('.container').lastElementChild.querySelector('.edit').addEventListener('click', editNote);
  }
}

const editNote = () => {
  const ref = event.currentTarget.parentNode.parentNode.lastElementChild.previousElementSibling.firstElementChild;
  ref.disabled = false;
  const inputValue = ref.value;
  const inputRef = ref.parentNode.parentNode;
  ref.nextElementSibling.firstElementChild.style.visibility = "visible";
  ref.nextElementSibling.lastElementChild.style.visibility = "visible";

  ref.nextElementSibling.firstElementChild.addEventListener('click', () => {
    event.currentTarget.style.visibility = "hidden";
    event.currentTarget.nextElementSibling.style.visibility = "hidden";
    localStorage.setItem(keys[keys.findIndex(item => item?.link == inputRef)].key, event.currentTarget.parentNode.parentNode.firstElementChild.value);
    keys[keys.findIndex(item => item?.link == inputRef)].link = event.currentTarget.parentNode.parentNode.parentNode;
    ref.disabled = true;
  });

  ref.nextElementSibling.lastElementChild.addEventListener('click', () => {
    event.currentTarget.style.visibility = "hidden";
    event.currentTarget.previousElementSibling.style.visibility = "hidden";
    event.currentTarget.parentNode.parentNode.firstElementChild.disabled = true;
    event.currentTarget.parentNode.parentNode.firstElementChild.value = inputValue;
    ref.disabled = true;
  });
}

const onPageCreate = (i) => {
  let newRow = document.querySelector('.container__element').cloneNode(true);
  newRow.querySelector('.note__text').value = localStorage.getItem(i);
  newRow.style.display = "";
  document.querySelector('.container').appendChild(newRow);

  localStorage.setItem(0, +localStorage.getItem(0) + 1);

  keys[+localStorage.getItem(0)] = {};
  keys[+localStorage.getItem(0)].key = localStorage.key(localStorage.getItem(0));
  keys[+localStorage.getItem(0)].link = document.querySelector('.container').lastElementChild;

  document.querySelector('.input__text').value = '';
  document.querySelector('.container').lastElementChild.querySelector('.delete').addEventListener('click', deleteNote);
  document.querySelector('.container').lastElementChild.querySelector('.edit').addEventListener('click', editNote);
}

//upon start
localStorage.setItem(0, 0);

for (let i = 1; i < localStorage.length + 1; i++) {
  if (localStorage.getItem(i) != null) {
    onPageCreate(i);
  }
}

document.querySelectorAll('.edit').forEach((item) => item.addEventListener('click', editNote));
document.querySelectorAll('.delete').forEach((item) => item.addEventListener('click', deleteNote));
document.querySelector('.submit').addEventListener('click', addNewNote);

document.querySelector('.clearlocalstorage').addEventListener('click', () => {
  localStorage.clear();
  localStorage.setItem(0, 0);
  alert('cleared! now reload page');
})
