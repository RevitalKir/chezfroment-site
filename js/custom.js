$(document).ready(function() {
	'use strict';
	console.log (" js and jQuery were loaded and init was called");

$("#breakfasts").on("click", getBreakfastMenu); 
$("#sandwiches").on("click", getSandwichMenu);
$("#drinks").on("click", getDrinksMenu);
$("#meals").on("click", getMealsMenu); 
$("#pastries").on("click", getPastriesMenu); 
});


// preloader
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});

/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function(){

  // ------- WOW ANIMATED ------ //
  wow = new WOW(
  {
    mobile: false
  });
  wow.init();



  // HIDE MOBILE MENU AFTER CLIKING ON A LINK
  $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
});


//-----SMOOTH SCROLL------//

//choose all links with #
$('a[href*="#"]')
  // Remove links that don't link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // change focus
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });


function getBreakfastMenu(){
	'use strict';
	$.ajax("breakfasts.html", {
		  success: function(result){
                 $("#submenu").html(result).slideDown();
                 $("#menu").find("p button.active").removeClass("active");
                 $("#breakfasts").addClass("active");
		},
	 	error:function(request, errorType, errorMsg){
			alert("Error: "+errorMsg);
		}
	
 });
	
}

function getSandwichMenu(){
	'use strict';
	console.log (" getSandwichMenu was called");
	$.ajax("sandwiches.html", {
				  success: function(result){
		   console.log(result);
 	  
		 $("#submenu").html(result).slideDown();
                $("#menu").find(" p button.active").removeClass("active");
                $("#sandwiches").addClass("active");
		},
	 	error:function(xhr, status, errorMsg){
			alert("Error: "+errorMsg);
		}
	
 });
	
}

function getDrinksMenu (){
    'use strict';
	$.ajax("drinks.html", {
		  success: function(result){
		  // console.log(result);
 	  
		 $("#submenu").html(result).slideDown();
                 $("#menu").find(" p button.active").removeClass("active");
                 $("#drinks").addClass("active");
		},
	 	error:function(request, errorType, errorMsg){
			alert("Error: "+errorMsg);
		}
	
 });
	
}

function getMealsMenu (){
    'use strict';
	$.ajax("meals.html", {
		  success: function(result){
		   console.log(result);
 	  
		 $("#submenu").html(result).slideDown();
                 $("#menu").find(" p button.active").removeClass("active");
                 $("#meals").addClass("active");
		},
	 	error:function(request, errorType, errorMsg){
			alert("Error: "+errorMsg);
		}
	
 });
	
}

function getPastriesMenu (){
    'use strict';
	$.ajax("pastries.html", {
		  success: function(result){
		   console.log(result);
 	  
		 $("#submenu").html(result).slideDown();
                 $("#menu").find(" p button.active").removeClass("active");
                 $("#pastries").addClass("active");
		},
	 	error:function(request, errorType, errorMsg){
			alert("Error: "+errorMsg);
		}
	
 });
}

