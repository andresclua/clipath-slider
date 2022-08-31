import JSUTIL from '@andresclua/jsutil';
import SwipeListener from 'swipe-listener';

export default class Sketch {
    constructor(config){
        this.JSUTIL = new JSUTIL();
        this.options = config;
        this.slides = document.querySelectorAll('.slide');
        this.slideControl = document.querySelectorAll('.slider__control');
        this.slidesCount = this.slides.length;
        this.sliderSpeed = 1300; // needs to match with SCSS Variable
        this.isSliderPlaying = false;
        this.init()
        this.events()
        this.registerSwipe();
    }
    init(){
        // Create all slides with default configuration
        this.slides.forEach((element,index)=>{
            var i = index + 1;
            this.JSUTIL.addClass(element,'slide-' + i);
            element.dataset.slide = i;
        });

        // if dots where selected create pagination
        if(this.options.dots){
            this.addDots()
        }
 
    }
    addDots(){
        // add comment div
        let comment = document.createComment(" add pagination");
        this.options.parent.appendChild(comment);
        this.dotActiveClass = "b--clip-slider-a__pagination__item--is-active";

        // add parent ul
        let ul = document.createElement("ul");
        ul.setAttribute("id", "pagination");
        ul.setAttribute("class", "b--clip-slider-a__pagination");
        this.options.parent.appendChild(ul);
        for (let i = 0; i <this.slidesCount; i++) {
            var li = document.createElement("li");
            li.setAttribute("class", "b--clip-slider-a__pagination__item");
            li.setAttribute("data-dot",  parseInt(i + 1) );
            if(i == 0)
                this.JSUTIL.addClass(li,this.dotActiveClass);
            ul.appendChild(li);
        }
        
    }
    events(){
        this.slideControl.forEach((element,index)=>{
            element.addEventListener('click',(event) => this.handleSlide({event:event,element:element}) );
        });
        
        if(this.options.dots){
            this.dotControl = document.querySelectorAll('.b--clip-slider-a__pagination__item');
            this.dotControl.forEach((element,index)=>{
                element.addEventListener('click',(event) => this.goToSlide({event:event,element:element, clickedDot:index}) );
            });
        }
    }
    goToSlide(payload){
        // prevent double tap
        if (this.isSliderPlaying) return;
        this.isSliderPlaying = true;
        this.slideActiveClass = 'b--clip-slider-a__list-group__list-item--is-active';

        // get right
        var isRight = payload.element.classList.contains('b--clip-slider-a__controls__item--next');
        // get current active
        var currentActive = document.querySelector('.slide.' + this.slideActiveClass);
        var currentDot = document.querySelector('.' + this.dotActiveClass);
        this.JSUTIL.removeClass(currentDot, this.dotActiveClass);

        var index = payload.clickedDot + 1;
        var newActive = document.querySelector('.slide-' + index);
        this.JSUTIL.addClass(payload.element, this.dotActiveClass);

        // currentActive.classList.remove('s--active', 's--active-prev');
        this.JSUTIL.removeClass(currentActive,this.slideActiveClass, 's--active-prev');
        this.JSUTIL.removeClass( document.querySelector('.slide.s--prev'),'s--prev');

        this.JSUTIL.addClass( newActive,'s--active');
        if (!isRight) this.JSUTIL.addClass( newActive,'s--active-prev');

        var prevIndex = index - 1;
        if (prevIndex < 1) prevIndex = this.slidesCount;
        this.JSUTIL.addClass(  document.querySelector('.slide-' + prevIndex),'s--prev');

        setTimeout(()=>{
            this.isSliderPlaying = false;
        },this.sliderSpeed*0.5)
    }
    
    handleSlide(payload){
        // prevent double tap
        if (this.isSliderPlaying) return;
        this.isSliderPlaying = true;
    
        // get right
        console.log(payload.element);
        var isRight = payload.element.classList.contains('b--clip-slider-a__controls__item--next');
        
        // get current active
        var currentActive = document.querySelector('.slide.s--active');
        var currentDotActive = document.querySelector('.' + this.dotActiveClass);

        var index = +currentActive.dataset.slide;
        (isRight) ? index++ : index--;
        if (index < 1) index = this.slidesCount;
        if (index > this.slidesCount) index = 1;
        var newActive = document.querySelector('.slide-' + index);
        var dotActive = document.querySelector('[data-dot="' + index + '"]' );
        this.JSUTIL.removeClass(  currentActive,'s--active', 's--active-prev');
        this.JSUTIL.removeClass(  document.querySelector('.slide.s--prev'),'s--prev');
        this.JSUTIL.removeClass( currentDotActive, this.dotActiveClass);

        this.JSUTIL.addClass( newActive,'s--active');
        this.JSUTIL.addClass( dotActive, this.dotActiveClass);
        if (!isRight) this.JSUTIL.addClass( newActive,'s--active-prev');

        var prevIndex = index - 1;
        if (prevIndex < 1) prevIndex = this.slidesCount;

        this.JSUTIL.addClass( document.querySelector('.slide-' + prevIndex),'s--prev');

        setTimeout(()=>{
            this.isSliderPlaying = false;
        },this.sliderSpeed*0.5)

    }
    /**
        * Inits when user is swiping the homepage hero
        * notes: only on mobile
        */
    registerSwipe(){
        if( this.JSUTIL.getTypeDevice('touch')){
            this.container = document.querySelector('#clipSlider');
            this.listener = SwipeListener(this.container);
            this.container.addEventListener('swipe', (e) => {
                this.directions = e.detail.directions;
                this.x = e.detail.x;
                this.y = e.detail.y;

                if (this.directions.left) { // goes to next
                    this.handleSlide({
                        element : document.querySelector('.b--clip-slider-a__controls__item--next')
                    });
                }
                if (this.directions.right) { // goes to previous
                    this.handleSlide({
                        element : document.querySelector('.b--clip-slider-a__controls__item--prev')
                    });
                }
            });
        }
    }
}

var config = {
    parent:document.getElementById('clipSlider'),
    dots:true,
    controls : true
}
new Sketch(config)
  
  
  
  
  