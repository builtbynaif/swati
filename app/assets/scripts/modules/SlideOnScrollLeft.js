import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class SlideOnScrollLeft{
    constructor(els, offset) {
        this.itemsToSlide = els;
        this.offsetPercentage = offset;
        this.hideInitially();
        this.createWaypoints();
    }
    
    
    hideInitially(){
        this.itemsToSlide.addClass("slide-item-left");
    }
    
    createWaypoints(){
        var that = this;
        this.itemsToSlide.each(function(){
           var currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function(){
                    $(currentItem).addClass("slide-item-left--is-visible");
                },
                offset: that.offsetPercentage
            });
        });
    }
}

export default SlideOnScrollLeft;