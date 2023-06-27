const images = () => {
    const imgPopUp = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.createElement('img');

    imgPopUp.classList.add('popup');
    workSection.appendChild(imgPopUp);

    imgPopUp.style.justifyContent = 'center';
    imgPopUp.style.alignItems = 'center';
    imgPopUp.style.display = 'none';

    imgPopUp.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopUp.style.display = 'flex';
            document.body.style.overflow = "hidden";
            //отвечает за то, чтобы подложка не прокручивалась

            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            bigImage.style.height = "75vh";
        }

        if (target && target.matches('div.popup')) {
            imgPopUp.style.display = 'none';
            document.body.style.overflow = "";
        }
    })
};

export default images;