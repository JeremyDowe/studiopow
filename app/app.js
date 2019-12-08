import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import "import-jquery";
import "jquery-ui-dist/jquery-ui.js";

/* Begin jQuery */
$(function(){
    // Logo takes you home
    $('#logo').on('click',function(){
        window.location.href= '/';
    });
    //without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
    gsap.registerPlugin(PixiPlugin, MotionPathPlugin);
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
            opacity: 0.5,
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
        const opacityScroll = Math.sqrt(scrolling / height) - 2;
        const scroll = Math.sqrt(scrolling / height) + 1;
        const axisScroll = Math.atan(scrolling/height) * Math.tan(scrolling/height) * 1000;
        const cosScroll = Math.acos(scrolling/height) * Math.cos(scrolling/height);
        // scrolling behaviour logo / menu
        if ( $('.page__part__two').height() !== this.undefined || $('.page__part__three').height() !== this.undefined ) {
            if (
                (scrolling > $('.page__part__two').position().top - offset) && 
                (scrolling < $('.page__part__three').position().top - offset)
            ){
                $('#logo').addClass('normal');
                $('nav ul li').addClass('normal');
                $('#logo').removeClass('invert');
                $('nav ul li').removeClass('invert');
            } else {
                $('#logo').addClass('invert');
                $('nav ul li').addClass('invert');
            }
            // scrolling behaviour text / page
            if (
                (scrolling > offset) && 
                (scrolling < $('.page__part__two').position().top - offset)
            ){
                $('.center').css('transform', 'translateY(' + Math.sqrt(paddingScroll*0.2) + 'px)');
                $('.center').css('opacity', '-'+Math.sqrt(opacityScroll*0.4));
                $('.background__wrapper').css('opacity', Math.sqrt(opacityScroll*0.1));
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
                $('.work__piece').css('transform', 'translateY( ' + axisScroll + 'px )');
                $('.work__piece').css('top', (cosScroll + 150) + 'px');
                // title
                $('.work__title').css('transform', 'translateY( ' + (axisScroll + cosScroll) + 'px )');
                $('.work__title').css('top', (axisScroll + cosScroll)+150 + 'px');
                //console.log('down');
            } else {
                // upscroll code
                $('.work__piece').css('transform', 'translateY( ' + axisScroll + 'px )');
                $('.work__piece').css('top', (cosScroll + 150) + 'px');
                // title
                $('.work__title').css('transform', 'translateY( ' + (axisScroll + cosScroll) + 'px )');
                $('.work__title').css('top', (axisScroll + cosScroll)+150 + 'px');
                //console.log('up');
            }
            lastScrollPos = scrolling;
        }
        return true;
     });
});
