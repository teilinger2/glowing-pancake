 /*
	Indus by TEMPLATE STOCK
	templatestock.co @templatestock
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

/* ------------------------------------------------------------------------------
 This is jquery module for main page
 ------------------------------------------------------------------------------ */

 /* Global constants */

 /*global jQuery */
 jQuery(function ($) {
  'use strict';



  var App = {
    $options: {},
    $loader: $(".loader"),
    $animationload: $(".animationload"),
    $countdown: $('#countdown_dashboard'),

    bindEvents: function() {
      //binding events
      $(window).on('load', this.load.bind(this));
      $(document).on('ready', this.docReady.bind(this));
    },
    load: function() {
      /* ==============================================
      1.Page Preloader
      =============================================== */
      this.$loader.delay(300).fadeOut();
      this.$animationload.delay(600).fadeOut("slow");
    },
    docReady: function() {
      /* -----------------------------------------------------------------------
        Countdown
        ----------------------------------------------------------------------- */
        // this.$countdown.countDown({
        //   targetDate: {
        //     'day':    this.$options.day,
        //     'month':  this.$options.month,
        //     'year':   this.$options.year,
        //     'hour':   this.$options.hour,
        //     'min':    this.$options.min,
        //     'sec':    this.$options.sec
        //   },
        //   omitWeeks: true
        // });

      countUp('.eliza_dash .digit', 7);

      /* ==============================================
      NiceScroll
      =============================================== */
      $("html").niceScroll({
        scrollspeed: 50,
        mousescrollstep: 38,
        cursorwidth: 7,
        cursorborder: 0,
        autohidemode: true,
        zindex: 9999999,
        horizrailenabled: false,
        cursorborderradius: 0
      });

      /* ==============================================
      Parallax
      =============================================== */
      $(window).stellar({
        horizontalScrolling: false,
        responsive: true,
        scrollProperty: 'scroll',
        parallaxElements: false,
        horizontalOffset: 0,
        verticalOffset: 0
      });

      //custom app
      
    },
    init: function (_options) {
      $.extend(this.$options, _options);
      this.bindEvents();
    }
  }

  //Initializing the app
  //passing the countdown date
  App.init({eliza: 6, tom: 2});
});

function countUp(digit, n){
  setTimeout(function (){
    $(digit).css({'display': 'none'});
    $(digit).html((n ? n : '0')).slideDown(500);
    n++;
    setInterval(function (){
      $(digit).css({'display': 'none'});
      $(digit).html((n ? n : '0')).slideDown(500);
      n++;
    }, 30000);
  }, 5000)
}