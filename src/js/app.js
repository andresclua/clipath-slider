import JSUTIL from '@andresclua/jsutil';
import SwipeListener from 'swipe-listener';
export default class Sketch {
    constructor(config){
        this.JSUTIL = new JSUTIL();
        this.options = config;
        this.slides = document.querySelectorAll('.slide');
       
        this.slideActiveClass = 'b--clip-slider-a__list-group__list-item--is-active';
        this.slideActiveClassPrev = 'b--clip-slider-a__list-group__list-item--prev';
        this.dotActiveClass = 'b--clip-slider-a__pagination__item--is-active';
        this.dotItem = 'b--clip-slider-a__pagination__item';
        this.slidesCount = this.slides.length;
        this.sliderSpeed = 1300; // needs to match with SCSS Variable
        this.isSliderPlaying = false;
        this.init()
        this.events()
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
        // if controlls where selected create pagination
        if(this.options.controls){
            this.addControls()
        }
    }
    addControls(){
        // add comment div
        let comment = document.createComment(" add controls");
        this.options.parent.appendChild(comment);

        // add parent ul
        let controls = document.createElement("div");
        controls.setAttribute("class", "b--clip-slider-a__controls");
        this.options.parent.appendChild(controls);
        for (let i = 0; i < 2; i++) {
            var button = document.createElement("button");
            button.setAttribute("class", "b--clip-slider-a__controls__item" );
            if(i == 0){
                this.JSUTIL.addClass(button, 'b--clip-slider-a__controls__item--prev');
                button.innerHTML = 'Prev';
            }else{
                this.JSUTIL.addClass(button, 'b--clip-slider-a__controls__item--next');
                button.innerHTML = 'Next';

            }
            controls.appendChild(button);
        }
    }
    addDots(){
        // add comment div
        let comment = document.createComment(" add pagination");
        this.options.parent.appendChild(comment);

        // add parent ul
        let ul = document.createElement("ul");
        ul.setAttribute("id", "pagination");
        ul.setAttribute("class", "b--clip-slider-a__pagination");
        this.options.parent.appendChild(ul);
        for (let i = 0; i <this.slidesCount; i++) {
            var li = document.createElement("li");
            li.setAttribute("class", this.dotItem );
            li.setAttribute("data-dot",  parseInt(i + 1) );
            if(i == 0)
                this.JSUTIL.addClass(li,this.dotActiveClass);
            ul.appendChild(li);
        }
        
    }
    events(){
        if(this.options.controls){
            this.slideControl = document.querySelectorAll('.b--clip-slider-a__controls__item');
            this.slideControl.forEach((element,index)=>{
                element.addEventListener('click',(event) => this.handleSlide({event:event,element:element}) );
            });
        }
        
        if(this.options.dots){
            this.dotControl = document.querySelectorAll('.'  + this.dotItem );
            this.dotControl.forEach((element,index)=>{
                element.addEventListener('click',(event) => this.goToSlide({event:event,element:element, clickedDot:index}) );
            });
        }
        this.listener = SwipeListener(this.options.parent);
        this.options.parent.addEventListener('swipe', (e) => {
            this.directions = e.detail.directions;

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
    moveToNext(payload, index){
        // prevent double tap
        if (this.isSliderPlaying) return;
        this.isSliderPlaying = true;

        // get right
        var isRight = payload.element.classList.contains('b--clip-slider-a__controls__item--next');
        // get current active
        var currentActive = document.querySelector('.b--clip-slider-a__list-group__list-item.' + this.slideActiveClass);
        var newActive = document.querySelector('.slide-' + index);

        this.JSUTIL.removeClass(currentActive,this.slideActiveClass, this.slideActiveClassPrev);

        this.JSUTIL.addClass( newActive,this.slideActiveClass);
        if (!isRight) this.JSUTIL.addClass( newActive,this.slideActiveClassPrev);

        var prevIndex = index - 1;
        if (prevIndex < 1) prevIndex = this.slidesCount;
        this.JSUTIL.addClass(  document.querySelector('.slide-' + prevIndex),this.slideActiveClassPrev);

        setTimeout(()=>{
            this.isSliderPlaying = false;
        },this.sliderSpeed*0.5)
    }

    goToSlide(payload){
        var currentDot = document.querySelector('.' + this.dotActiveClass);
        this.JSUTIL.removeClass(currentDot, this.dotActiveClass);
        var currentActive = (payload.arrow) ? document.querySelector('[data-dot="'+ payload.clickedDot +'"]') : payload.element;
        var index = (payload.arrow) ? payload.clickedDot : payload.clickedDot + 1;
        this.JSUTIL.addClass(currentActive, this.dotActiveClass);

        this.moveToNext(payload, index)
    }
    
    handleSlide(payload){
        var isRight = payload.element.classList.contains('b--clip-slider-a__controls__item--next');
        // get current active
        var currentActive = document.querySelector('.b--clip-slider-a__list-group__list-item.' +this.slideActiveClass);

        var index = +currentActive.dataset.slide;
        (isRight) ? index++ : index--;
        if (index < 1) index = this.slidesCount;
        if (index > this.slidesCount) index = 1;
        
        
        if(this.options.controls){
            payload.clickedDot = index;
            payload.arrow = true;
            this.goToSlide(payload,index);
        }else{
            this.moveToNext(payload, index)
        }

    }
}   

var config = {
    parent:document.getElementById('clipSlider'),
    dots:true,
    controls : true
}
new Sketch(config)
  
  
  
  
  