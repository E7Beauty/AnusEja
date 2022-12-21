const rowsNumber = 10; //<- you may choose different number of rows per page!

for (let i = 1; i < rowsNumber; i++) { //adding spans equal to the number of rows of data needed
  document.querySelector('.container__content').appendChild((document.querySelector('.content__text').cloneNode()));
}

const getData = async () => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  return data.json();
}

const onPageChange = async () => {

  const chosenPage = event.currentTarget;

  for (let item of document.querySelectorAll('.button')) {
    item.classList.remove('pages__button_active');
  }
  chosenPage.classList.add('pages__button_active');

  document.querySelectorAll('.content__text').forEach(item => item.innerHTML = '');
  addContent(rowsNumber, chosenPage.innerHTML);
}

const addButtons = async (rows) => {

  const length = await getData().then(result => result.length);

  if (document.querySelectorAll('.button').length != length / rows) {
    for (let i = 1; i < (length / rows); i++) {
      const btn = document.querySelector('.button').cloneNode();
      btn.innerHTML = i + 1;
      document.querySelector('.pages').appendChild(btn);
    }

    document.querySelectorAll('.button').forEach(item => item.addEventListener('click', onPageChange));
    document.querySelectorAll('.button')[0].classList.add('pages__button_active')
  }
}

const addContent = async (rowsNumber, currentPage = 1) => {

  const arrData = await getData();
  const currentPageArr = [];

  for (let i = ((currentPage - 1) * rowsNumber); i < (currentPage * rowsNumber); i++) {
    if (arrData[i] != undefined) {
      currentPageArr.push(arrData[i]?.body);
    } else {
      currentPageArr.push('');
    }
  }

  document.querySelectorAll('.content__text').forEach((item, index) => item.innerHTML = currentPageArr[index]);
}

const pageLoad = async () => {
  addButtons(rowsNumber);
  addContent(rowsNumber);
}

pageLoad();
