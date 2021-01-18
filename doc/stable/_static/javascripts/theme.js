// 
// Initialize plugins and behaviors on document ready
// 

$(function () {
  atvImages.init()

  AOS.init()

  navbar.init()

  swiper.init()

  pricing.init()

  zoomerang.init()

  tooltip.init()

  elevateZoom.init()

  highlight.init()

  datepicker.init()

  smoothScroll.init()

  lazyLoading.init()

  $.fancybox.defaults.loop = true
})


// 
// Add extra behavior to the navbar
// 

var navbar = {
  init: function () {
    if (!window.utils.isMobile()) {
      this.initDropdownHover()
    }

    // prevent dropdown link click to hide the dropdown
    $('.navbar .dropdown-item').click(function (e) {
      e.stopPropagation()
    })

    // toggle to show/hide dropdown submenus on click
    $('.dropdown-submenu .dropdown-toggle').click(function (e) {
      e.preventDefault()
      e.stopPropagation()

      var $parent = $(this).parent()
      $parent.toggleClass('show')
      $parent.find('> .dropdown-menu').toggleClass('show')
      $(this).attr("aria-expanded", function(index, attr) {
        return attr == 'true' ? 'false' : 'true';
      });
    })

    // toggle a bg color to the mobile menu when transparent
    $('.navbar-collapse').on('show.bs.collapse', function () {
      $(this).closest('.navbar').addClass('navbar-toggled')
    })

    $('.navbar-collapse').on('hide.bs.collapse', function () {
      $(this).closest('.navbar').removeClass('navbar-toggled')
    })
  },

  // show/hide dropdown on hover
  initDropdownHover: function () {
    var $dropdowns = $('.navbar .dropdown')
    $dropdowns.each(function (index, item) {
      var $item = $(this)

      $item.hover(function () {
        $item.addClass("show")
        $item.find("> .dropdown-toggle").attr("aria-expanded", true)
        $item.find("> .dropdown-menu").addClass("show")
      }, function () {
        $item.removeClass('show')
        $item.find("> .dropdown-toggle").attr("aria-expanded", false)
        $item.find("> .dropdown-menu").removeClass("show")
      })
    })
  }
}


// 
// Initialize a zoomerang plugin via data-toggle="zoomerang"
// 

var zoomerang = {
  init: function () {
    Zoomerang.config({
      maxHeight: 730,
      maxWidth: 900
    }).listen('[data-toggle="zoomerang"]')
  }
}


// 
// Initialize pricing tabs (monthly / yearly billing) behavior
// via data-toggle="switch-prices"
// Example can be seen at pricing-charts.html
// 

var pricing = {
  init: function () {
    var $switcher = $('[data-toggle="switch-prices"]'),
        $prices = $(".switch-price")

    $switcher.change(function () {
      yearly = $(this).is(":checked")

      var period = yearly ? "switch-price-yearly" : "switch-price-monthly"
      $prices.removeClass("switch-price-active")
      $prices.filter("." + period + "").addClass("switch-price-active")
    })
  }
}


// 
// Initialize elevate zoom plugin via data-toggle="elevate-zoom"
// Example can be seen at ecommerce/product.html
// 

var elevateZoom = {
  init: function () {
    if (!window.utils.isMobile()) {
      $("[data-toggle='elevate-zoom']").elevateZoom({
        zoomWindowFadeIn: 500, 
        zoomWindowFadeOut: 500, 
        lensFadeIn: 500, 
        lensFadeOut: 500,
        border: 2
      })
    }
  }
}


//
// Initialize a Swiper instance via data-toggle="swiper"
// and passing the options object via data-options
//

var swiper = {
  init: function () {
    $("[data-toggle='swiper']").each(function(index, item) {
      new Swiper(item, $(item).data('options'))
    })
  }
}


//
// Initialize Bootstrap tooltip plugins
//

var tooltip = {
  init: function () {
    $('[data-toggle="tooltip"]').tooltip()
  }
}


//
// Initialize atvImg plugin
// Example can be seen at index.html
//

var atvImages = {
  init: function () {
    atvImg()
  }
}


// 
// Code syntax highlighting
// used in the docs
// 

var highlight = {
  init: function () {
    $('code.hl').each(function(i, block) {
      hljs.highlightBlock(block)
    })
  }
}


// 
// Initialize a pikaday datepicker
// via data-toggle="datepicker"
// 

var datepicker = {
  init: function () {
    $('[data-toggle="datepicker"]').each(function (index, el) {
      new Pikaday({ field: $(el)[0] })
    })
  }
}


// 
// Initialize smooth scrolling
// via data-toggle="scroll"
// 

var smoothScroll = {
  init: function () {
    var scroll = new SmoothScroll('[data-toggle="scroll"]', {
      easing: 'easeOutCubic',
      speed: 600,
      speedAsDuration: true
    })
  }
}


// 
// Initialize lazy loading polyfill
//

var lazyLoading = {
  init: function () {
    if ('loading' in HTMLImageElement.prototype) {
      var images = document.querySelectorAll("img.lazyload")
      images.forEach(function(img) {
        img.src = img.dataset.src
      })
    } else {
      var script = document.createElement("script")
      script.async = true
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.0/lazysizes.min.js"
      document.body.appendChild(script)
    }
  }
}


// 
// Extra Helpers
// 

window.utils = {
  isMobile: function () {
    if (window.innerWidth <= 992) {
      return true
    } else {
      return false
    }
  }
}
