import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {
    let modalState = {
        form: 0,
        type: 'tree'
    };
    let deadline = '2023-09-31';

    modals(modalState);
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    //div div потому что там под контентов еще 2 вложенных блока и только во втором находится контент, который под разными именами
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    changeModalState(modalState);
    forms(modalState);
    timer('.container1', deadline);
    images();
});