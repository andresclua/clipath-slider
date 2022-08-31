import JSUTIL from '@andresclua/jsutil';
export default class Sketch {
    constructor(config){
        this.JSUTIL = new JSUTIL();
        
        this.options = config;
        console.log(config)

        this.slides = document.querySelectorAll('.slide');
        this.slideControl = document.querySelectorAll('.slider__control');
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
            element.classList.add('slide-' + i);
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

        // add parent ul
        let ul = document.createElement("ul");
        ul.setAttribute("id", "pagination");
        ul.setAttribute("class", "pagination");
        this.options.parent.appendChild(ul);
        for (let i = 0; i <this.slidesCount; i++) {
            var li = document.createElement("li");
            li.setAttribute("class", "pagination-item");
            li.classList.add("dot-" + parseInt(i + 1) );
            if(i == 0)
                li.classList.add("pagination-item--active")
            ul.appendChild(li);
        }
        
    }
    events(){
        this.slideControl.forEach((element,index)=>{
            element.addEventListener('click',(event) => this.handleSlide({event:event,element:element}) );
        });
        
        if(this.options.dots){
            this.dotControl = document.querySelectorAll('.pagination-item');
            this.dotControl.forEach((element,index)=>{
                console.log(element);
                element.addEventListener('click',(event) => this.goToSlide({event:event,element:element, clickedDot:index}) );
            });
        }
    }
    goToSlide(payload){
        // prevent double tap
        if (this.isSliderPlaying) return;
        this.isSliderPlaying = true;
    
        // get right
        var isRight = payload.element.classList.contains('m--right');
        // get current active
        var currentActive = document.querySelector('.slide.s--active');
        var currentDot = document.querySelector('.pagination-item--active');
        currentDot.classList.remove('pagination-item--active')

        var index = payload.clickedDot + 1;
        var newActive = document.querySelector('.slide-' + index);
        payload.element.classList.add('pagination-item--active')

        currentActive.classList.remove('s--active', 's--active-prev');
        document.querySelector('.slide.s--prev').classList.remove('s--prev');

        newActive.classList.add('s--active');
        if (!isRight) newActive.classList.add('s--active-prev');


        var prevIndex = index - 1;
        if (prevIndex < 1) prevIndex = this.slidesCount;

        document.querySelector('.slide-' + prevIndex).classList.add('s--prev');

        setTimeout(()=>{
            this.isSliderPlaying = false;
        },this.sliderSpeed*0.5)
        
    }
    handlePlagination(payload){
        console.log(payload)
    }
    
    handleSlide(payload){
        // prevent double tap
        if (this.isSliderPlaying) return;
        this.isSliderPlaying = true;
    
        // get right
        var isRight = payload.element.classList.contains('m--right');
        
        // get current active
        var currentActive = document.querySelector('.slide.s--active');
        var currentDotActive = document.querySelector('.pagination-item--active');

        var index = +currentActive.dataset.slide;
        (isRight) ? index++ : index--;
        if (index < 1) index = this.slidesCount;
        if (index > this.slidesCount) index = 1;
        var newActive = document.querySelector('.slide-' + index);
        var dotActive = document.querySelector('.dot-' + index );
        currentActive.classList.remove('s--active', 's--active-prev');
        document.querySelector('.slide.s--prev').classList.remove('s--prev');
        currentDotActive.classList.remove('pagination-item--active');

        newActive.classList.add('s--active');
        dotActive.classList.add('pagination-item--active');
        if (!isRight) newActive.classList.add('s--active-prev');


        var prevIndex = index - 1;
        if (prevIndex < 1) prevIndex = this.slidesCount;

        document.querySelector('.slide-' + prevIndex).classList.add('s--prev');

        setTimeout(()=>{
            this.isSliderPlaying = false;
        },this.sliderSpeed*0.5)

    }

}

var config = {
    parent:document.getElementById('clipSlider'),
    dots:true,
}
new Sketch(config)
  
  
  
  
  