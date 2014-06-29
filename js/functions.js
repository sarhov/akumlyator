$(document).ready(function() {
    console.log('I\'m ready!')


    // slider
    jQuery(function() {
        jQuery('#camera_wrap').camera({
            fx: 'stampede',
            navigation: false,
            playPause: false,
            thumbnails: false,
            barPosition: 'top',
            loader: false,
            time: 3000,
            transPeriod: 800,
            alignment: 'center',
            autoAdvance: true,
            mobileAutoAdvance: true,
            barDirection: 'leftToRight',
            barPosition: 'bottom',
            easing: 'easeInOutExpo',
            fx: 'simpleFade',
            height: '42.57%',
            minHeight: '90px',
            hover: true,
            pagination: true,
            loaderColor: '#1f1f1f',
            loaderBgColor: 'transparent',
            loaderOpacity: 1,
            loaderPadding: 0,
            loaderStroke: 3
        });
    });

    // sidebar-menu
    $('.js-openSubMenu').click(function(event) {
        event.preventDefault();
        $(this).toggleClass('fa-chevron-circle-down fa-chevron-circle-up');
        $(this).next('ul').slideToggle(400);
        $(this).parent('li').toggleClass('is-active');
    });

    $('.js-addToCart').click(function() {
        flyToCart($(this).parents().find('img'), $('.b-top__cart'));
    })

    // fly to cart
    function flyToCart(image, cart) {
        var image_offset = image.offset();
        $('body').append('<img src="' + image.attr('src') + '" id="flyImg" style="position: absolute; z-index:9999; top:' + image_offset.top + 'px; left:' + image_offset.left + 'px">')
        var cart_offset = cart.offset();
        params = {
            top: cart_offset.top + 'px',
            left: cart_offset.left + 'px',
            opacity: 0.0,
            width: image.width(),
            height: image.height()
        };
        $('#flyImg').animate(params, 800, false, function() {
            $('#flyImg').remove();
            fl = true;
        });
    }
});