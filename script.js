$(document).ready(() =>{

    $(window).scroll(() =>{
        if($(window).scrollTop() > 120){
            $('#navbar').addClass("dark-bg");
        }else{
            $('#navbar').removeClass("dark-bg");
        }
    });
    $('#navbar').addClass(" animate__animated animate__fadeInDown animate__fast");
    $('#home-content').addClass(" animate__animated animate__fadeIn animate__fast");
    
    $('#about').waypoint(function(direction){
        $('#about').addClass('animate__animated animate__fadeIn animate__fast ');
    
        },{
            offset: '70%'
    });

    $('#services').waypoint(function(direction){
        $('#services').addClass('animate__animated animate__fadeIn animate__fast ');
    
        },{
            offset: '60%'
    });

    $('#portfolio').waypoint(function(direction){
        $('#portfolio').addClass('animate__animated animate__fadeIn animate__fast');
    
        },{
            offset: '60%'
    });

    $('#contacts').waypoint(function(direction){
        $('#contacts').addClass('animate__animated animate__fadeIn animate__fast');
    
        },{
            offset: '60%'
    });

    $('#test').waypoint(function(direction){
        $('#testl').addClass('animate__animated animate__fadeInLeft animate__fast');
        $('#testr').addClass('animate__animated animate__fadeInRight animate__fast');
    
        },{
            offset: '60%'
    });

});