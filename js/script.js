$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('nav').addClass('black')
    }else{
        $('nav').removeClass('black')
    }
})



var num1 = document.getElementById("count1");
var num2 = document.getElementById("count2");
var num3 = document.getElementById("count3");
var num4 = document.getElementById("count4");



function counter(element , start , end , duration){
    var rang =  end - start;
    var current = start;
    var increment = 0;
    if(end > start){
        increment = 1;
    }else{
        increment = -1;
    }

    var timer = setInterval(function(){
        current += increment;
        element.textContent = current;
        if(current == end){
            clearInterval(timer);
        }
    }, duration);

}
    
        counter(num1 , 1 , 1800, 0.5);
        counter(num2 , 1 , 1920, 0.5);
        counter(num3 , 1 , 1612, 0.5);
        counter(num4 , 1 , 1980, 0.5);
    
