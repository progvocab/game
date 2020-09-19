var currentStep = 0;
var margin = -100;
var marginTop = screen.height-150;
var loc =  [" -0px 0px"," -176px 0px"," -352px 0px"," -511px 0px"," -700px 0px"," -0px -180px"," -176px -180px"," -352px -180px"," -528px -180px"," -704px -180px"," -0px -360px"," -166px -360px"," -342px -360px"," -511px -360px"] ;
var width = ["169px","169px","169px","179px","179px",    "169px","169px","169px","169px","169px",      "165px","162px","170px" , "190px"];
setInterval(function () {
    var bird = $('.bird');
    if(currentStep == 14   ){
        currentStep = 0 ;
    }
    
    margin += 10;
    marginTop -=10;
    bird.css('backgroundPosition',   loc[currentStep]);
    bird.css('width' , width[currentStep]);
    
    if(margin > screen.width || marginTop <-170){
        margin = -100;
        marginTop =screen.height-150;
    } 
    bird.css('margin-left',margin );
    bird.css('margin-top',marginTop );
    currentStep++;
  
}, 200);
