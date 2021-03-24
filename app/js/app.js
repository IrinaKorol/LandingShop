// // Import jQuery module (npm i jquery)
import $ from 'jquery'; window.jQuery = $; window.$ = $
import magnificPopup from 'magnific-popup'


// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

    /* Анимация гамбургера */
    $('.my_hamburger').click(function(){
        //Появление
        if(!$(this).hasClass('is-active')){
            $(this).addClass('is-active');
            $('.header_menu').addClass('is-active');
            $('body').addClass('noScroll');
        } else {
            //Скрытие
            $(this).removeClass('is-active');
            $('.header_menu').removeClass('is-active');
            $('body').removeClass('noScroll');
        }
    });
    /* Конец */
    /*start PopUp*/

    $('.popup-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        //modal: true,
        closeOnBgClick: false,
        closeBtnInside: false,
        midClick: false
    });
    $('.success-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        closeOnBgClick: false,
        closeBtnInside: false,
        midClick: false
    });

    $('.input_wrap input').on('focusin', function (){
        $(this).closest('.input_wrap').removeClass('is-error');
    });
    $('.input_wrap input').on('focusout', function (){
        var parent = $(this).closest('.input_wrap');
        if($(this).hasClass('email') == 'email') {

        }

        if($(this).val() == ''){
            $(parent).addClass('is-error');
            activeSubmit();
        } else {
            $(parent).removeClass('is-error');
            $(parent).addClass('is-text');
            activeSubmit();
        }
    });
    $(document).on('change', '.checkbox input', function() {
        activeSubmit();
    })

    function activeSubmit(){
        var error = false;
        $('.input_wrap input').each(function (){
            if($(this).closest('.input_wrap').hasClass('is-error')){
                error = true;
            } else if(!$(this).closest('.input_wrap').hasClass('is-text')){
                error = true;
            }
        })

        if(!$('.checkbox input').prop('checked')){
            error = true;
        }

        if(!error) {
            $('.submit_form').removeClass('is-disabled');
        } else {
            $('.submit_form').addClass('is-disabled');
        }
    }

    $('.submit_form').click(function (e){
        e.preventDefault();
        var data = $(".input_form").serialize();
        $('.success-modal').click();
        /*$.ajax({
        type: "POST",
            url: "mail.php",
            data,
            beforeSend: function () {
                //$("#").html("Отправляем данные...");
            },
            success: function (result) {
                if(result.error){
                    $('.success-modal').click();
                }
                $('.success-modal').click();
            }
        });*/
    });

    $(document).on('click', '.popup-modal-dismiss', function(e) {
        e.preventDefault();
        $.magnificPopup.close();
    })
    /*end PopUp*/

    /*Бегущая строка*/
    $('#marquee').liMarquee({
        loop: -1,
        scrollamount: 400,
        circular: false,
        runshort: true
    });
    /*Конец Бегущаей строки*/

    /* Аккардион */
    if($('div').hasClass('acc__container')){
        document.querySelector('.acc__container').addEventListener('click', function (event) {
            var block = event.target.closest('.acc__elem');
            if (block) {
                var elem = block.querySelector('.acc__hidden');

                if (block.classList.contains('animate')) {
                    elem.style.height = getComputedStyle(elem).height;
                    block.classList.remove('animate');
                    getComputedStyle(elem).height; // reflow
                    elem.style.height = '';
                } else {
                    block.classList.add('animate');
                    var h = getComputedStyle(elem).height;
                    elem.style.height = '0';
                    getComputedStyle(elem).height; // reflow
                    elem.style.height = h;
                    setTimeout(function () { elem.style.height = '' }, 1000); // Когда закончится анимация
                }
            }
        })
    }
    /* Конец */

   /* $(function() {
        var marquee = $("#marquee");
        marquee.css({"overflow": "hidden", "width": "100%"});
        // оболочка для текста ввиде span (IE не любит дивы с inline-block)
        marquee.wrapInner("<span>");
        marquee.find("span").css({ "width": "50%", "display": "inline-block", "text-align":"center" });
        marquee.append(marquee.find("span").clone()); // тут у нас два span с текстом
        marquee.wrapInner("<div>");
        marquee.find("div").css("width", "200%");
        var reset = function() {
            $(this).css("margin-left", "50%");
            $(this).animate({ "margin-left": "-100%" }, 12000, 'linear', reset);
        };
        reset.call(marquee.find("div"));
    });*/
    /*End бегущая строка*/

})
