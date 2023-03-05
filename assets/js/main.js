jQuery(document).ready(function($) {

  //placeholders for IE
  $('input').placeholder();

  $.stellar({
    horizontalScrolling: false,
    responsive: true,
    positionProperty: 'transform',
    hideDistantElements: false
  });

  if ( $('header').length > 0 ) {
    var headroom  = new Headroom(document.querySelector("header"));
    headroom.init();
  }

  $('.jsHamburger').click(function(evt) {
    evt.preventDefault();
    $(this).toggleClass('open');
    $('.mobile-menu').toggleClass('open');
    $('header').toggleClass('open');
  });

  $('.mobile-menu ul li a .toggler').click(function(evt) {
    evt.stopPropagation();
    $(this).parent().toggleClass('active');
    $(this).parent().parent().children('.sub-menu').slideToggle();
  });
  
  $("a[href='#']").click(function(){
	  return false;
  });

  if ( $(document).scrollTop() > 0 ) {
    $('header').addClass('headroom--not-top');
  }

  $('.ginput_container_fileupload').parent('li.gfield').addClass('gfield_upload');
  $('.ginput_container_fileupload input[type=file]').change(function() {
    if ( $(this).val() != '' ) {
      $(this).parents('.gfield_upload').find('label').addClass('has-file');
      $(this).parents('.gfield_upload').find('label')
             .attr('data-filename', $(this).val().split('\\').pop());
    } else {
      $(this).parents('.gfield_upload').find('label').removeClass('has-file');
    }
  });
  $('.ginput_container_fileupload input[type=file]').click(function(evt) {
    if ( $(this).val() != '' ) {
      evt.preventDefault();
      $(this).val('');
      $(this).parents('.gfield_upload').find('label').removeClass('has-file');
    }
  });

  new WOW().init();

  if ( typeof window['TypeIt'] != 'undefined' ) {
    new TypeIt('#typeit_home-hero', {
      strings: 'Say goodbye to<br> <em>ONE-SIZE-FITS-ALL</em> <br> education.',
      lifeLike: true,
      cursor: false
    }).go();
  }

  $(window).on('resize scroll', function() {
    if ($('#Vouno-Mikro').length > 0 && $('#Vouno-Mikro').isInViewport()) {
      $('#Vouno-Mikro').addClass('active');
    }
    if ($('#Vouno-Meseo').length > 0 && $('#Vouno-Meseo').isInViewport()) {
      $('#Vouno-Meseo').addClass('active');
    }
    if ($('#Vouno-megalo').length > 0 && $('#Vouno-megalo').isInViewport()) {
      $('#Vouno-megalo').addClass('active');
    }
  });

  $('.jsYearTabs ul li a').click(function(evt) {

    evt.preventDefault();

    $([document.documentElement, document.body]).animate({
      scrollTop: $("#years").offset().top - $('header').outerHeight() * 2
    }, 400);

    $(this).parent().parent().find('a').removeClass('active');
    $(this).addClass('active');

    var year = $(this).attr('data-year');
    $('.jsYearHead span').removeClass('active');
    $('.jsYearHead span[data-year=' + year +  ']').addClass('active');

    $('.course-box').removeClass('active');
    $('.course-box[data-year=' + year +  ']').addClass('active');

    $('.pricing-box').removeClass('active');
    $('.pricing-box[data-year=' + year +  ']').addClass('active');

    $('.pricing-boxes--combine').each(function() {
      if ( $(this).children(':visible').length == 0 ) {
        $(this).prev().hide();
      } else {
        $(this).prev().show();
      }
    });

  });

  $('.jsTermsTabs ul li a').click(function(evt) {

    evt.preventDefault();

    if ( $($(this).attr('href')).is(':visible') ) {
      $([document.documentElement, document.body]).animate({
        scrollTop: $($(this).attr('href')).offset().top - $('header').outerHeight() * 2.7
      }, 400);
    }

  });

  $(window).on('scroll', function() {
    if ( $('.jsStickyYears').length > 0 ) {
      if( ($(window).scrollTop() >= $('.jsStickyYears').parent().offset().top - $('header').outerHeight()) ){
        $('.jsStickyYears').addClass('yearIsSticky');
        $('.jsStickyYears').parent().css({paddingTop: $('.jsStickyYears').outerHeight()});
        $('.jsStickyYears').css({top: $('header').outerHeight() - 1});

        if ( $('.jsStickyTerms').length > 0 ) {
          $('.jsStickyTerms').css({
            marginTop: $('.jsStickyYears:not(.jsStickyTerms)').outerHeight()
          });
          $('.jsStickyYears').parent().css({
            paddingTop: $('.jsStickyYears:not(.jsStickyTerms)').outerHeight() + $('.jsStickyTerms').outerHeight()
          });
        }
      }else{
        $('.jsStickyYears').removeClass('yearIsSticky');
        $('.jsStickyYears').parent().css({paddingTop: 0})
        $('.jsStickyYears').css({top: 0});

        if ( $('.jsStickyTerms').length > 0 ) {
          $('.jsStickyTerms').css({
            marginTop: 0
          })
        }
      }
    }
  });

  $(window).on('load', function() {
    setTimeout(function() {
      if ( $('.jsStickyYears').length > 0 ) {
        if( ($(window).scrollTop() >= $('.jsStickyYears').parent().offset().top - $('header').outerHeight()) ){
          $('.jsStickyYears').addClass('yearIsSticky');
          $('.jsStickyYears').parent().animate({paddingTop: $('.jsStickyYears').outerHeight()}, 150);
          $('.jsStickyYears').animate({top: $('header').outerHeight() - 1}, 150);

          if ( $('.jsStickyTerms').length > 0 ) {
            $('.jsStickyTerms').css({
              marginTop: $('.jsStickyYears:not(.jsStickyTerms)').outerHeight()
            });
            $('.jsStickyYears').parent().css({
              paddingTop: $('.jsStickyYears:not(.jsStickyTerms)').outerHeight() + $('.jsStickyTerms').outerHeight()
            });
          }
        }else{
          $('.jsStickyYears').removeClass('yearIsSticky');
          $('.jsStickyYears').parent().animate({paddingTop: 0}, 150)
          $('.jsStickyYears').animate({top: 0}, 150);

          if ( $('.jsStickyTerms').length > 0 ) {
            $('.jsStickyTerms').css({
              marginTop: 0
            })
          }
        }
      }
    }, 300);
  });

  $(window).on('resize', function() {
    setTimeout(function() {
      if ( $('.jsStickyYears').length > 0 && $('.jsStickyYears').hasClass('yearIsSticky') ) {
        $('.jsStickyYears').parent().stop().animate({paddingTop: $('.jsStickyYears').outerHeight()}, 150);
        $('.jsStickyYears').stop().animate({top: $('header').outerHeight() - 1}, 150);
      }
    }, 300);
  });

  var pterms = [];
  $('.pricing-boxes--combine').each(function() {
    var p = $(this).data('pterm');
    if ( !pterms.includes(p) )
      pterms.push(p);
  }).promise().done(function() {
    $.each(pterms, function(index, value) {
      $('.pricing-boxes--combine[data-pterm="' + value + '"]').combine('.pricing-box');
    });
  }).promise().done(function() {
    $('.pricing-boxes--combine').each(function() {
      var hiddenTitle = $(this).children(':visible').length == 0;
      $('<div' + (hiddenTitle ? ' style="display: none;"' : '') + ' id="ctp_' + $(this).data('pterm') + '" class="section-cf-title jsYearHead wow fadeInUp"><h3>' + $(this).data('ptermname') + '</h3></div>').insertBefore($(this));
    });
  });

  if ( $('.ginput_container_select').length > 0 ) {
    $('.ginput_container_select').each(function() {
      if ( $(this).find('select').hasClass('small') ) {
        $(this).addClass('small');
      } else if ( $(this).find('select').hasClass('medium') ) {
        $(this).addClass('medium');
      } else if ( $(this).find('select').hasClass('large') ) {
        $(this).addClass('large');
      }
    });
  }

});

jQuery.fn.combine = function(selector) {
  var parent = jQuery(this[0]);
  this.each(function(i) {
    parent.append(jQuery(this).children(selector));
    if ( i > 0 )
      jQuery(this).remove();    
  });
};

jQuery.fn.isInViewport = function() {
  var elementTop = jQuery(this).offset().top;
  var elementBottom = elementTop + jQuery(this).outerHeight();

  var viewportTop = jQuery(window).scrollTop();
  var viewportBottom = viewportTop + jQuery(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};
