import $ from 'jquery';

class Modalm {
    constructor() {
        this.openModalmButton = $(".open-modalm");
        this.modalm = $(".modalm");
        this.closeModalmButton = $(".modalm__close");
        this.events();
    }

    events() {
        //clicking the open modal btn
        this.openModalmButton.click(this.openModalm.bind(this));

        //clicking the x close modal btn
        this.closeModalmButton.click(this.closeModalm.bind(this));
        
        //pushes the any key
        $(document).keyup(this.keyPressHandler.bind(this));
    }
    
    keyPressHandler(e){
        if(e.keyCode == 27){
            this.closeModalm();
        }
    }

    openModalm() {
        this.modalm.addClass("modalm--is-visible");
        return false;
    }
    closeModalm() {
        this.modalm.removeClass("modalm--is-visible");
        return false;
    }
}

export default Modalm;
