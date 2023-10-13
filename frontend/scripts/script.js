document.addEventListener('DOMContentLoaded', function() {
    const checklist = document.querySelector('.checklist');
    const initialSteps = 3; // Количество начальных шагов

    for (let i = 1; i <= initialSteps; i++) {
        const step = createStep(i, i === 2); // Передаем true только для второго шага
        checklist.appendChild(step);
    }

    document.getElementById('addStep').addEventListener('click', function() {
        const step = createStep(checklist.querySelectorAll('.step').length + 1, false); // Новые шаги не имеют изначальных подзадач
        checklist.appendChild(step);
    });

    function createStep(stepNumber, hasSubtasks) {
        const step = document.createElement('div');
        step.classList.add('step');

        const stepCheckbox = document.createElement('input');
        stepCheckbox.type = 'checkbox';
        stepCheckbox.setAttribute('name', 'step_' + stepNumber);
        stepCheckbox.addEventListener('change', updateSubtasks);

        const stepLabel = document.createElement('label');
        stepLabel.textContent = 'Шаг №' + stepNumber;
        stepLabel.setAttribute('contenteditable', 'true');

        const removeStep = document.createElement('span');
        removeStep.classList.add('remove-button');
        removeStep.innerHTML = '<span class="remove-icon">x</span>';
        removeStep.addEventListener('click', function() {
            checklist.removeChild(step);
        });

        const subtasks = document.createElement('ul');

        if (hasSubtasks) {
            for (let j = 1; j <= 2; j++) { // Добавляем две изначальные подзадачи
                const subtask = createSubtask(stepNumber, j);
                subtasks.appendChild(subtask);
            }
        }

        const addSubtaskButton = document.createElement('button');
        addSubtaskButton.classList.add('add-subtask-button');
        addSubtaskButton.textContent = '+ Добавить подзадачу';
        addSubtaskButton.style.display = 'none';

        step.addEventListener('mouseover', function() {
            addSubtaskButton.style.display = 'inline';
        });

        step.addEventListener('mouseout', function() {
            addSubtaskButton.style.display = 'none';
        });

        addSubtaskButton.addEventListener('click', function() {
            const subtask = createSubtask(stepNumber, subtasks.querySelectorAll('li').length + 1);
            subtasks.appendChild(subtask);
            addSubtaskButton.style.display = 'none';
            
        });

        step.appendChild(stepCheckbox);
        step.appendChild(stepLabel);
        step.appendChild(removeStep);
        step.appendChild(subtasks);
        step.appendChild(addSubtaskButton);

        return step;
    }

    function createSubtask(stepNumber, subtaskNumber) {
        const subtask = document.createElement('li');

        const subtaskCheckbox = document.createElement('input');
        subtaskCheckbox.type = 'checkbox';
        subtaskCheckbox.setAttribute('name', 'subtask_' + stepNumber + '_' + subtaskNumber);
        subtaskCheckbox.addEventListener('change', function(event) {
            const subtaskLabel = event.target.parentElement.querySelector('label');
            if (event.target.checked) {
                subtaskLabel.style.textDecoration = 'line-through';
            } else {
                subtaskLabel.style.textDecoration = 'none';
            }
            updateStep(event);
        });

        const subtaskLabel = document.createElement('label');
        subtaskLabel.textContent = 'Подзадача №' + subtaskNumber;
        subtaskLabel.setAttribute('contenteditable', 'true');

        const removeSubtask = document.createElement('span');
        removeSubtask.classList.add('remove-button');
        removeSubtask.innerHTML = '<span class="remove-icon">x</span>';
        removeSubtask.addEventListener('click', function() {
            subtask.parentElement.removeChild(subtask);
            updateStep(event);
        });

        subtask.appendChild(subtaskCheckbox);
        subtask.appendChild(subtaskLabel);
        subtask.appendChild(removeSubtask);

        return subtask;
    }

    function updateSubtasks(event) {
        const stepCheckbox = event.target;
        const stepNumber = stepCheckbox.getAttribute('name').split('_')[1];
        const subtaskCheckboxes = stepCheckbox.parentElement.querySelectorAll(`[name^="subtask_${stepNumber}_"]`);
        subtaskCheckboxes.forEach(function(subtaskCheckbox) {
            subtaskCheckbox.checked = stepCheckbox.checked;
            const subtaskLabel = subtaskCheckbox.parentElement.querySelector('label');
            if (subtaskCheckbox.checked) {
                subtaskLabel.style.textDecoration = 'line-through';
            } else {
                subtaskLabel.style.textDecoration = 'none';
            }
        });
    }

    function updateStep(event) {
        const subtaskCheckbox = event.target;
        const [stepNumber, subtaskNumber] = subtaskCheckbox.getAttribute('name').split('_').slice(1);
        const stepCheckbox = subtaskCheckbox.parentElement?.parentElement?.querySelector(`[name="step_${stepNumber}"]`);

        if (stepCheckbox) {
            const subtaskCheckboxes = stepCheckbox.parentElement.querySelectorAll(`[name^="subtask_${stepNumber}"]`);
            const allSubtasksChecked = Array.from(subtaskCheckboxes).every(subtask => subtask.checked);
            stepCheckbox.checked = allSubtasksChecked;
        }

        const allSubtasksRemoved = !stepCheckbox.parentElement.querySelector('ul').hasChildNodes();
        if (allSubtasksRemoved) {
            checklist.removeChild(step);
        }

        const subtaskLabel = subtaskCheckbox.parentElement.querySelector('label');
        if (subtaskCheckbox.checked) {
            subtaskLabel.style.textDecoration = 'line-through';
        } else {
            subtaskLabel.style.textDecoration = 'none';
        }
    }
});
