const search = document.querySelector('.search');
const button = document.getElementsByTagName('button')[0];
const input = document.querySelector('.input');

button.addEventListener('click', () => {
  if (input.value) {
    window.location.assign(`http://www.google.com/search?q=${input.value}`);
    input.value = '';
    return;
  }
  search.classList.toggle('active');
});
