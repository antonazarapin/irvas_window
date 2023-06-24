import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';

window.addEventListener('DOMContentLoaded', () => {
    let modalState = {
        form: 0,
        type: 'tree'
    };

    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    //div div потому что там под контентов еще 2 вложенных блока и только во втором находится контент, который под разными именами
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    changeModalState(modalState);
    forms(modalState);
    
});