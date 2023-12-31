import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
    const form = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    const windows = document.querySelectorAll("[data-modal]");

    checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро с Вами свяжемся',
        error: 'Что-то пошло не так...'
    }

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;

        let res = await fetch(url, {
            method: "POST",
            body: data
        });
        //перед асинхронной операцией прописываем подождать

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        })
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);
            //Поместить это сообщение нашему айтему

            const formData = new FormData(item);

            if (item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key])
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    Object.keys(state).forEach(key => {
                        if (key === 'form') {
                            state[key] = state.form;
                        } else if (key === 'profile') {
                            state[key] = 'tree';
                        } else {
                            state[key] = null; // или присвойте здесь значения по умолчанию
                        }
                    });
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.error)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        windows.forEach(item => {
                            item.style.display = 'none';
                        });
                    }, 5000);
                })
        })
    });
};

export default forms;