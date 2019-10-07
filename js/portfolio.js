/*
* CREATIVE - Landing page for agency or creative
* Build Date: November 2018
* Last Update: November 2018
* Author: Alessio Frugoni
* Copyright (C) 2018 Alessio Frugoni
* This is a premium product available exclusively here : metto il sito
*/

$(function () {

  var filterList = {

    init: function () {

      // MixItUp plugin
      $('#portfoliolist').mixItUp({
        selectors: {
          target: '.portfolio',
          filter: '.filter'
        },
        load: {
          filter: '.app'
        }
      });

    }

  };

  // Run the show!
  filterList.init();
});
