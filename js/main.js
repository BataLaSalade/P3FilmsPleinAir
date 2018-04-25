$(document).ready(function() {
    console.log("bonjour")
    
    $("#bookingValidation").submit( function(event) {
        if (this.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        $(this).addClass('was-validated');
    });

    $("#contactValidation").submit( function(event) {
        if (this.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        $(this).addClass('was-validated');
    });
});   


    

// scroll to top button
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Smooth scroll
$('.navLink').on('click', function(){
    console.log('bonjour maxime');
    var page = $(this).attr('href'); //ancor 
    var speed = 750; //animation duration in ms 
$('html, body').animate({ scrollTop: $(page).offset().top -150 }, speed ); 
return false; });

/*$(".navLink").click(function(event){ 
    $('html, body').animate({scrollTop: '+=150px'}, 800); 
}); 
*/