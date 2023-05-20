$(document).ready(function(){
//var
$bg    = $(".animebg");
$car   = $(".car");
$img   = $(".car img");

let flag =true;

const cars = ['assets/Img_05.png','assets/Img_06.png'];

$(document).on("keypress",function(e){

     if(e.which == 13){
        $($bg).toggleClass('movebg');
        $($car).toggleClass('carjump');
     }
    
});
// light
$(document).on("keypress",function(e){

    if(e.which == 32){
       if(flag){
        flag = false;
        $img.attr('src',cars['0']);
       }else{
        flag = true;
        $img.attr('src',cars['1']);
       }
    }
   
});

});