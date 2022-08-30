
export default class Sketch {
    constructor(config){
        this.slides = document.querySelectorAll('.slide');
        this.slideControl = document.querySelectorAll('.slider__control');
        this.slidesCount = this.slides.length;
        this.sliderSpeed = 1300; // needs to match with SCSS Variable
        this.isSliderPlaying = false;
        console.log('total',this.slidesCount)
        this.init()
        this.events()
    }
    events(){
        this.slideControl.forEach((element,index)=>{
            element.addEventListener('click',(event) => this.handleSlide(event) );
        });
    }
    handleSlide(payload){
        // if (this.isSliderPlaying) return;
        // this.isSliderPlaying = true;
        console.log(payload)
        
    }

    init(){

        var $slides = document.querySelectorAll('.slide');
        var $controls = document.querySelectorAll('.slider__control');
        var numOfSlides = $slides.length;
        var slidingAT = 1300; // sync this with scss variable
        var slidingBlocked = false;

        this.slides.forEach((element,index)=>{
            var i = index + 1;
            element.classList.add('slide-tf' + i);
            element.dataset.slide = i;
        
        });

        [].slice.call($slides).forEach(function($el, index) {
            var i = index + 1;
            $el.classList.add('slide-' + i);
            $el.dataset.slide = i;
        });
    




  
  [].slice.call($controls).forEach(function($el) {
    $el.addEventListener('click', controlClickHandler);
  });
  
  function controlClickHandler() {
    if (slidingBlocked) return;
    slidingBlocked = true;
  
    var $control = this;
    var isRight = $control.classList.contains('m--right');
    var $curActive = document.querySelector('.slide.s--active');
    var index = +$curActive.dataset.slide;
    (isRight) ? index++ : index--;
    if (index < 1) index = numOfSlides;
    if (index > numOfSlides) index = 1;
    var $newActive = document.querySelector('.slide-' + index);
  
    $control.classList.add('a--rotation');
    $curActive.classList.remove('s--active', 's--active-prev');
    document.querySelector('.slide.s--prev').classList.remove('s--prev');
    
    $newActive.classList.add('s--active');
    if (!isRight) $newActive.classList.add('s--active-prev');
    
  
    var prevIndex = index - 1;
    if (prevIndex < 1) prevIndex = numOfSlides;
  
    document.querySelector('.slide-' + prevIndex).classList.add('s--prev');
  
    setTimeout(function() {
      $control.classList.remove('a--rotation');
      slidingBlocked = false;
    }, slidingAT*0.75);
  };
    }
}

var config = {
    parent:document.getElementById('clipSlider')
}
new Sketch(config)
  
  
  
  
  