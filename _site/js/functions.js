$(document).ready(function() {

    console.log('I\'m ready!')

    //detect mobile devices
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    if (isMobile.any()) {
        $('body').addClass('mobile');
    } else {
        $('body').addClass('desktop');
    }

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
        flyToCart($(this).parents('article').first().find('img'), $('.b-top__cart'));

        var theTitle = $(this).parents('article').first().find('.product-block__products_item_title_link').text();
        var theLink = $(this).parents('article').first().find('.product-block__products_item_title_link').attr('src');
        itemAdedd(theTitle, theLink);
    });

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

    // item added
    function itemAdedd(title, link) {
        $('.js-addedItem').html(title);
        $('.js-addedItem').attr('src', link);
        $('.js-itemAdded').fadeIn();
        // setTimeout(function() {
        //     $('.js-itemAdded').fadeOut('fast');
        // }, 8000);
        $('.js-closeItemAdded').click(function() {
            $('.js-itemAdded').fadeOut();
        });
    }

    // mini-cart
    $('.mobile .b-top__cart').click(function(e) {
        e.preventDefault();
        $(this).find('.mini-cart').fadeToggle().click(function(event) {
            event.stopPropagation();
        });
    });

    $('.mini-cart')

    // mobile-navigation
    $('.js-mobileNavOpener').click(function() {
        $(this).next('ul').slideToggle()
        $(this).addClass('is-active');
        $(this).find('.fa').toggleClass('fa-angle-down fa-angle-up');
    });

    // open search in mobile 
    $('.js_openMoblieSearch').click(function() {
        $('.b-top__search').slideToggle();
    });

    // open sidebar blocks mobile
    if ($(window).width() < 769) {
        $('.js_openSidebarBlockMobile').click(function(event) {
            $(this).next('.sidebar__block_content').slideToggle();
            $(this).find('i').toggleClass('fa-plus-circle fa-minus-circle');
        });

    };

    // open mobile menu
    $('.js_opneMobileSidebarMenu').click(function() {
        $('body').toggleClass('swiped');
        $('.js-mobileMenu').fadeToggle('fast').click(function(event) {
            event.stopPropagation();

        });
        if ($('body').hasClass('swiped')) {
            $('body').append('<div class="mobile-op"></div>');
            $('.mobile-op').click(function() {
                $('body').removeClass('swiped');
                $('.js-mobileMenu').fadeToggle('fast');
                $(this).remove()

            });
        } else {
            $('.mobile-op').remove()
        }
    });

    // grid list
    $('.js-toList').click(function() {
        $('.product-block__products').addClass('list').removeClass('grid')
        $.totalStorage('layout', 'list');
        $(this).addClass('is-active').siblings('button').removeClass('is-active')
    });

    $('.js-toGrid').click(function() {
        $('.product-block__products').addClass('grid').removeClass('list')
        $.totalStorage('layout', 'grid');
        $(this).addClass('is-active').siblings('button').removeClass('is-active')
    });

    if ($.totalStorage('layout') == 'list') {
        $('.product-block__products').addClass('list').removeClass('grid')
        $('.js-toList').addClass('is-active').siblings('button').removeClass('is-active')
    } else {
        $('.product-block__products').addClass('grid').removeClass('list');
        $('.js-toGrid').addClass('is-active').siblings('button').removeClass('is-active')
    }

    $('.home .product-block__products ').removeClass('list').addClass('grid');

});