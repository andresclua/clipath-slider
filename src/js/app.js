import JSUTIL from '@andresclua/jsutil';
export default class Sketch {
    constructor(config){
        this.JSUTIL = new JSUTIL();
        
        this.slides = document.querySelectorAll('.slide');
        this.slideControl = document.querySelectorAll('.slider__control');
        this.slidesCount = this.slides.length;
        this.sliderSpeed = 1300; // needs to match with SCSS Variable
        this.isSliderPlaying = false;
        this.init()
        this.events()
    }
    events(){
        this.slideControl.forEach((element,index)=>{
            element.addEventListener('click',(event) => this.handleSlide({event:event,element:element}) );
        });
    }
    handleSlide(payload){
        // prevent double tap
        if (this.isSliderPlaying) return;
        this.isSliderPlaying = true;
    
        // get right
        var isRight = payload.element.classList.contains('m--right');
        
        // get current active
        var currentActive = document.querySelector('.slide.s--active');

        var index = +currentActive.dataset.slide;
        (isRight) ? index++ : index--;
        if (index < 1) index = this.slidesCount;
        if (index > this.slidesCount) index = 1;

        var newActive = document.querySelector('.slide-' + index);

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

    init(){

        this.slides.forEach((element,index)=>{
            var i = index + 1;
            element.classList.add('slide-' + i);
            element.dataset.slide = i;
        
        });
 
    }
}

var config = {
    parent:document.getElementById('clipSlider'),
}
new Sketch(config)
  
  
  
  
  