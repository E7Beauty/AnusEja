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
    newRow.querySelector('.note__text').innerHTML = document.querySelector('.input__text').value;
    newRow.style.display = "";
    document.querySelector('.container').appendChild(newRow);

    localStorage.setItem(0, +localStorage.getItem(0) + 1);
    localStorage.setItem(localStorage.getItem(0), document.querySelector('.input__text').value);

    keys[+localStorage.getItem(0)] = {};
    keys[+localStorage.getItem(0)].key = localStorage.key(localStorage.getItem(0));
    keys[+localStorage.getItem(0)].link = document.querySelector('.container').lastElementChild;

    document.querySelector('.input__text').value = '';
    document.querySelector('.container').lastElementChild.querySelector('.delete').addEventListener('click', deleteNote);
  }
}

const editNote = () => {
  //event.currentTarget.
  console.log('zavtra dodelau sorry ia zaebalsya');
}

const onPageCreate = () => {
  let newRow = document.querySelector('.container__element').cloneNode(true);
  newRow.querySelector('.note__text').innerHTML = localStorage.getItem(i);
  newRow.style.display = "";
  document.querySelector('.container').appendChild(newRow);

  localStorage.setItem(0, +localStorage.getItem(0) + 1);

  keys[+localStorage.getItem(0)] = {};
  keys[+localStorage.getItem(0)].key = localStorage.key(localStorage.getItem(0));
  keys[+localStorage.getItem(0)].link = document.querySelector('.container').lastElementChild;

  document.querySelector('.input__text').value = '';
  document.querySelector('.container').lastElementChild.querySelector('.delete').addEventListener('click', deleteNote);
}

//upon start
localStorage.setItem(0, 0);

for (let i = 1; i < 10; i++) {
  if (localStorage.getItem(i) != null) {
    onPageCreate();
  }
}

document.querySelectorAll('.edit').forEach((item) => item.addEventListener('click', editNote));
document.querySelectorAll('.delete').forEach((item) => item.addEventListener('click', deleteNote));
document.querySelector('.submit').addEventListener('click', addNewNote);
