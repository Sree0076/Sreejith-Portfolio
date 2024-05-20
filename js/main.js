(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    

    new WOW().init();


    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });

    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });



    
})(jQuery);


function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var sub = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
  
    var mailtoLink = "mailto:"+email+ 
                         "?subject=" + encodeURIComponent( sub) +
                         "&body=" + encodeURIComponent("\nName: " + name +"\nMessage: " + message)
        
        window.location.href = mailtoLink;
    
  }
  const typed = new Typed(".multilple-text", {
    strings: ["I'm a passionate Arduino enthusiast and maker."],
    typeSpeed: 70,
    typeSpeed: 70,
    backDelay: 1000,
    loop: true,
    showCursor: false,
 

});



