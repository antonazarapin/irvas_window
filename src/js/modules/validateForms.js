const validateForms = (trigger, modal, windows, state, scroll) => {
    const openWindow = () => {
        windows.forEach(item => {
            item.style.display = 'none';
        });

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
    }

    // const showMessage = (trigger) => {
    //     const existingMessage = trigger.parentNode.querySelector('.error-message');
    //     if (!existingMessage) {
    //         let message = document.createElement('div');
    //         message.classList.add('error-message');
    //         message.style.marginTop = '10px';
    //         message.style.color = 'red';

    //         const parent = trigger.parentNode;
    //         parent.appendChild(message);
    //         message.textContent = '*Заполните все поля';


    //         trigger.addEventListener('click', () => {
    //             message.remove();
    //         });
    //     }
    // }

    const width = document.querySelector('#width'),
          height = document.querySelector('#height'),
          coldCheck = document.querySelector('#coldCheck'),
          warmCheck = document.querySelector('#warmCheck'),
          cold = document.querySelector('#cold'),
          warm = document.querySelector('#warm');

    const showRequaredInputs = () => {
        if (!width.value) {
            width.style.border = '1px solid red';
        }

        if (!height.value) {
            height.style.border = '1px solid red';
        }
        
        width.addEventListener('input', () => {
            width.style.border = '1px solid #ccc';
        })

        height.addEventListener('input', () => {
            height.style.border = '1px solid #ccc';
        })
    }

    const showRequiredCheckbox = () => {
        if (!coldCheck.checked && !warmCheck.checked) {
            cold.style.border = '1px solid red';
            warm.style.border = '1px solid red';
        }

        coldCheck.addEventListener('change', () => {
            if (coldCheck || warmCheck) {
                cold.style.border = '1px solid #ccc';
                warm.style.border = '1px solid #ccc';
            }
        })

        warmCheck.addEventListener('change', () => {
            if (coldCheck || warmCheck) {
                cold.style.border = '1px solid #ccc';
                warm.style.border = '1px solid #ccc';
            }
        })
    }

    if (trigger.id) {
        switch(trigger.id) {
            case 'popup_calc_button': 
                state.width && state.height ? openWindow() : showRequaredInputs();
                break;
            case 'popup_calc_profile_button': 
                state.profile ? openWindow() : showRequiredCheckbox();
                break;
            default: 
                openWindow();
                break;
        }
    } else {
        openWindow();
    }
}

export default validateForms;