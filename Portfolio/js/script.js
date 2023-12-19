$(window).on("load", function()
{
    $(".loader .inner").fadeOut(1000, function()
    {
        $(".loader").fadeOut(750);
        $(".items").isotope({
            filter: '*',
            animationOptions: 
            {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });
    });
})

$(document).ready(function(){
    $('#slides').superslides({
        animation: 'fade', // or 'slide'
        play: 3000, // slide duration in milliseconds
        pagination: false
    });

    var typed =new Typed(".typed",
    {
        strings: ["Computer Science Student."],
        typeSpeed: 100,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });


    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;
    $(window).scroll(function()
    {
        if (window.pageYOffset>skillsTopOffset-$(window).height()+200)
        {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barcolor: '#fff',
                trackcolor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to ,percent)
                {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
        if (!countUpFinished && window.pageYOffset>statsTopOffset-$(window).height()+200)
        {
            $(".counter").each(function()
            {
                var element = $(this);
                var endVal = parseInt(element.text());

                element.countup(endVal);
            })
            countUpFinished = true;
        }
    })

    Fancybox.bind('[data-fancybox="gallery"]')
    

    $("#filters a").click(function()
    {
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");
        $(".items").isotope({
            filter: selector,
            animationOptions: 
            {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });
    
    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);
    function stickyNavigation()
    {
        var body = $("body");

        if ($(window).scrollTop() >= navTop)
        {   
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");

        }
        else
        {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
    }

    //Get the button
    let mybutton = document.getElementById("btn-back-to-top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
    scrollFunction();
    };

    function scrollFunction() 
    {
        if (document.body.scrollTop > 20 ||document.documentElement.scrollTop > 20) 
        {
            mybutton.style.display = "block";
        } 
        else 
        {
            mybutton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", backToTop);

    function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }
    //go to the top every refresh
    $(document).ready(function(){
        $(this).scrollTop(0);
    });
    
});
