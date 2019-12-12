/* Begin jQuery */
$(function(){
    // Logo takes you home
    $('#logo').on('click',function(){
        window.location.href= '/';
    });
    if ($('.tween').height() !== this.undefined){
        gsap.to(
        '.tween',
        { 
            x:"+=100px", 
            duration: 1,
            opacity: 1,
            stagger: {
                amount: 1,
                from: "screenLeft",
                grid: "auto"
            }
        });
        gsap.to(
        '.background__wrapper',
        { 
            scale:"1.2", 
            duration: 1,
            opacity: 0.4,
            stagger: {
                amount: 1,
                from: "screenLeft",
                grid: "auto"
            }
        });
    }
    $('#logo').addClass('invert');
    $('nav ul li').addClass('invert');
    // Window scroll
    var lastScrollPos = 0;
    $(window).scroll(function() {
        // Declare vars
        const offset = 100;
        const scrolling = $(this).scrollTop();
        // Get document entire height
        const body = document.body
        const html = document.documentElement;
        const height = Math.max( body.scrollHeight, body.offsetHeight, 
                        html.clientHeight, html.scrollHeight, html.offsetHeight );
        // Math recipes
        const paddingScroll = (height / 3) * scrolling;
        const scroll = Math.sqrt(scrolling / height) + 1;
        const axisScroll = this.Math.tan(2/this.Math.PI)/height;
        const cosScroll = this.Math.cos(2/this.Math.PI)/height;
        const opacityScroll = Math.log(this.Math.PI)/this.Math.log(this.Math.cosh(scroll))-1;
        // scrolling behaviour logo / menu
        $('#logo').addClass('normal');
        $('nav ul li').addClass('normal');        
        if ( $('.page__part__two').height() !== this.undefined || $('.page__part__three').height() !== this.undefined ) {
            if (
                (scrolling > offset && scrolling > $('.page__part__two').position().top - offset) && 
                (scrolling < $('.page__part__three').position().top - offset)
            ){
                $('#logo').removeClass('invert');
                $('nav ul li').removeClass('invert');
                $('#logo').addClass('normal');
                $('nav ul li').addClass('normal');
            } else {
                $('#logo').removeClass('normal');
                $('nav ul li').removeClass('normal');
                $('#logo').addClass('invert');
                $('nav ul li').addClass('invert');
            }
            // scrolling behaviour text / page
            if (
                (scrolling > offset) && 
                (scrolling < $('.page__part__two').position().top - offset)
            ){
                $('.center').css('transform', 'translateY(' + Math.sqrt(paddingScroll*0.2) + 'px)');
                $('.page__part__one').css('opacity', opacityScroll );
                $('.center').css('opacity', opacityScroll );
                $('.background__wrapper').css('transform', 'scale(' + scroll + ')');
            }
            // scrolling to work section
            if (
                (scrolling > offset) &&
                (scrolling > $('.page__part__two').position().top - offset)
            )
            {
                // animate in gsap
                gsap.to(
                '.process-tween',
                { 
                    y: "-100px",
                    duration: 1,
                    opacity: 1,
                    stagger: {
                        amount: 1,
                        from: "screenLeft",
                        grid: "auto"
                    }
                });
            }
            // scrolling to work section
            if (
                (scrolling > offset) &&
                (scrolling > $('.page__part__three').position().top - offset)
            )
            {
                // animate in gsap
                gsap.to(
                '.display__bg',
                { 
                    scale: 1.3, 
                    duration: 1
                });
            }
        }
        if ($('.piece').height() !== this.undefined){
            $('.piece').each(function(){
                $(this).css('height', $(window).height());
            });
            // work section scroll
            if (scrolling > lastScrollPos) {
                // downscroll code
                $('.work__piece').css('transform', 'translateY( ' + (cosScroll*scrolling) + 'px )');
                // title
                $('.work__title').css('transform', 'translateY( ' + (axisScroll*scrolling) + 'px )');
                //console.log('down');
            } else {
                // upscroll code
                $('.work__piece').css('transform', 'translateY( ' + (axisScroll/scrolling) + 'px )');
                // title
                $('.work__title').css('transform', 'translateY( ' + (cosScroll/scrolling) + 'px )');
                //console.log('up');
            }
            lastScrollPos = scrolling;
        }
        return true;
     });
});
