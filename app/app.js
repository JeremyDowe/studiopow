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

    $(window).scroll(function() {
        // Declare vars
        const offset = 100;
        const scrolling = $(this).scrollTop();
        // Get document entire height
        const body = document.body
        const html = document.documentElement;
        const height = Math.max( body.scrollHeight, body.offsetHeight, 
                        html.clientHeight, html.scrollHeight, html.offsetHeight );
        const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
        // Math recipes
        const paddingScroll = (height / 3) * scrolling;
        const pieAxisScroll = windowHeight/(this.Math.PI*scrolling);
        const opacityScroll = windowHeight/(this.Math.PI*scrolling);
        // scrolling behaviour logo / menu
        $('#logo').addClass('normal');
        $('nav ul li').addClass('normal');    
        if ( $('.page__part__one').height() !== this.undefined ) {
            const scrollPart2 = $('.page__part__two').position().top;   
            const scrollPart3 = $('.page__part__two').position().top;
            if (
                (scrolling > offset && scrolling > scrollPart2 - offset) && 
                (scrolling < scrollPart3 - offset)
            ){
                $('#logo').addClass('normal');
                $('nav ul li').addClass('normal');
                $('#logo').removeClass('invert');
                $('nav ul li').removeClass('invert');                
            } else {
                $('#logo').removeClass('normal');
                $('nav ul li').removeClass('normal');
                $('#logo').addClass('invert');
                $('nav ul li').addClass('invert');
            }
            // scrolling behaviour text / page
            if (
                (scrolling > offset) && 
                (scrolling < scrollPart2 + offset)
            ){
                $('.center').css('transform', 'translateY(' + Math.sqrt(paddingScroll*0.2) + 'px)');
                if (scrolling > scrollPart2 && scrolling < scrollPart2 + offset){
                    $('.page__part__one').css('opacity', '0' );
                    $('.center').css('opacity', '0' );
                } else {
                    $('.page__part__one').css('opacity', opacityScroll );
                    $('.center').css('opacity', opacityScroll );
                }
                $('.background__wrapper').css('transform', 'scale(' + scroll + ')');
            }
            if (scrolling < offset) {
                $('.page__part__one').css('opacity', '1');
                $('.center').css('opacity', '1' );
            }
            // scrolling to work section
            if (
                (scrolling > offset) &&
                (scrolling > scrollPart2 - offset)
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
                (scrolling > scrollPart3 - offset)
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
        if ($('.pane').height() !== this.undefined){
            $('.pane').each(function(){
                $(this).css('height', $(window).height());
            });
            var lastScrollPane = $('.pane--letts').position().top;
            var last2ScrollPane = $('.pane--moody').position().top;
            var last3ScrollPane = $('.pane--atar').position().top;
            // work section scroll
            const scrollPane = (scrolling/windowHeight);
            const formulaA = (scrollPane/pieAxisScroll*100)/100;
            const formulaB = (pieAxisScroll/scrollPane*100)/100;
            if (scrolling < lastScrollPane === true) {
                if ( (scrollPane/pieAxisScroll*100)/100 < 0.25 ) {
                    $('.work--pane').css('transform', 'translateY(' + this.Math.sqrt(paddingScroll*0.25) + 'px)');
                    $('.work--pane').css('opacity', (scrollPane/pieAxisScroll*100)/10 );
                    $('h2.work--title').css('transform', 'matrix( 1, 0, 0, 1, 0, ' + (scrollPane/pieAxisScroll)*100 + ')');
                }
            } else {
                $('h2.work--title').css('transform', 'matrix( 1, 0, 0, 1, 0, 0)');
            }
            if (scrolling > lastScrollPane) {
                $('.work--pane').css('transform', 'translateY(196px)');
                $('.work--pane').css('opacity', 1 );
                $('h2.work--title').css('transform', 'matrix( 1, 0, 0, 1, 0, 3.1)');
                // animate in gsap
                gsap.to(
                    '.w--pane--letts',
                    { 
                        opacity: 1, 
                        duration: 2,
                        delay: 1.2
                    });
            }
            if ( formulaA > 0.5 && scrolling < last2ScrollPane ){
                $('.work--pane').css('transform', 'translateY(' + (pieAxisScroll*0.25) + 'px)');
                $('h2.work--title').css('transform', 'matrix( 1, 0, 0, 1, 0, ' + formulaB + ')');
                // animate in gsap
                gsap.to(
                    '.w--pane--moody',
                    { 
                        opacity: 1, 
                        duration: 2,
                        delay: 1.2
                    });
            }
            if ( formulaA > 0.5 && scrolling < last3ScrollPane ){
                $('.work--pane').css('transform', 'translateY(' + (pieAxisScroll*0.25) + 'px)');
                $('h2.work--title').css('transform', 'matrix( 1, 0, 0, 1, 0, ' + formulaB + ')');
                // animate in gsap
                gsap.to(
                    '.w--pane--atar',
                    { 
                        opacity: 1, 
                        duration: 2,
                        delay: 1.2
                    });
            }
        }
        return true;
     });
});
