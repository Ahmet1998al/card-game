const renderMainMenuBlock = (container) => {
    const inputValue = ['1', '2', '3'];

    inputValue.forEach((item) => {
        const inputElement = document.createElement('input');
        inputElement.setAttribute('type', 'radio');
        inputElement.setAttribute('value', item);
        inputElement.setAttribute('id', item);
        inputElement.setAttribute('name', 'input-content');
        inputElement.classList.add('input-entry');

        const labelElement = document.createElement('label');
        labelElement.setAttribute('for', item);
        labelElement.classList.add('label-input');
        labelElement.textContent = item;


        container.appendChild(inputElement);
        container.appendChild(labelElement);
    });
}

window.application.blocks['main-menu'] = renderMainMenuBlock;




const renderMainMenuScreen = () => {
    const contentControl = document.createElement('div');
    contentControl.classList.add('content__control');
    APP_CONTENT.appendChild(contentControl);

    const formContent = document.createElement('from');
    formContent.classList.add('form__content');
    formContent.setAttribute('action', '#');
    contentControl.appendChild(formContent);

    const titleControl = document.createElement('h1');
    titleControl.textContent = 'Выбери сложность';
    titleControl.classList.add('title__content');
    formContent.appendChild(titleControl);

    const inputContainerContent = document.createElement('div');
    inputContainerContent.classList.add('input__content-control');
    formContent.appendChild(inputContainerContent);
    window.application.renderBlock('main-menu', inputContainerContent);

    const btnStart = document.createElement('button');
    btnStart.classList.add('btn', 'btn__start');
    btnStart.textContent = 'Старт';
    formContent.appendChild(btnStart)
}

window.application.screens['main-menu'] = renderMainMenuScreen;
window.application.renderScreen('main-menu');



const inputArray = document.querySelectorAll('.input-entry');
const btnStart = document.querySelector('.btn__start');

function gameStart() {
    for (const input of inputArray) {
        if (input.checked) {
            window.application.levels = input.value;
            switch (window.application.levels) {
                case '1':
                    renderGameMenuBlock(6);
                    break;
                case '2':
                    renderGameMenuBlock(12);
                    break;
                case '3':
                    renderGameMenuBlock(16);
                    break;
                default:
                    break;
            }
        }
    }
};


btnStart.addEventListener('click', () => {
    gameStart()
});
