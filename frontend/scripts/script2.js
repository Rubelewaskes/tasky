document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addButton');
    const textFieldsContainer = document.getElementById('textFields');
    let textFieldCounter = 0;

    addButton.addEventListener('click', function() {
        textFieldCounter++;

        // Создаем контейнер для текстового поля и кнопки удаления
        const textFieldContainer = document.createElement('div');
        textFieldContainer.classList.add('text-field-container');

        const textField = document.createElement('input');
        textField.type = 'text';
        textField.placeholder = 'Исполнитель №' + textFieldCounter;

        // Создаем кнопку удаления
        const removeButton = document.createElement('remove-emp');
        removeButton.innerHTML = '<span class="remove-emp">x</span>';
        removeButton.addEventListener('click', function() {
            textFieldsContainer.removeChild(textFieldContainer);
        });

        textFieldContainer.appendChild(textField);
        textFieldContainer.appendChild(removeButton);

        // Добавляем контейнер в textFieldsContainer
        textFieldsContainer.appendChild(textFieldContainer);
    });
});
