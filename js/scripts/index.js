{
  const inputElement = document.getElementById('js-tarefa');
  const submitElement = document.getElementById('js-submit');
  const ulElement = document.getElementById('js-ul');

  submitElement.onclick = (ev) => {
    ev.preventDefault();

    if (inputElement.value) {
      const liElement = document.createElement('li');
      const removeButtonElement = document.createElement('button');
      const spanElement = document.createElement('span');
      const imageRemoveButtonElement = document.createElement('img');

      imageRemoveButtonElement.src = './img/close.svg';
      spanElement.innerHTML = inputElement.value;

      ulElement.appendChild(liElement);
      liElement.appendChild(spanElement);
      liElement.appendChild(removeButtonElement);
      removeButtonElement.appendChild(imageRemoveButtonElement);

      removeButtonElement.onclick = () => {
        ulElement.removeChild(liElement);
      };
      inputElement.value = '';
    }
  };
}
