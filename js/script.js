if ($('.case-studies-carousel').length) {
  $('.case-studies-carousel').owlCarousel({
    loop: true,
    margin: 60,
    nav: true,
    autoHeight: true,
    smartSpeed: 500,
    autoplay: 5000,
    navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1024: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  })
}

if ($('.testimonial-carousel ').length) {
  $('.testimonial-carousel ').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    smartSpeed: 3000,
    autoplay: true,
    navText: ['<span class="fas fa-arrow-left"></span>', '<span class="fas fa-arrow-right"></span>'],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      600: {
        items: 2,
      },
      800: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
  })
}

if ($('.clients-carousel').length) {
  $('.clients-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    smartSpeed: 3000,
    autoplay: true,
    navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      600: {
        items: 3,
      },
      800: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  })
}

//Submenu Dropdown Toggle
if ($('.main-header li.dropdown ul').length) {
  $('.main-header .navigation li.dropdown').append(
    '<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>'
  )
}

// //Mobile Nav Hide Show
if ($('.mobile-menu').length) {
  // $('.mobile-menu .menu-box').mCustomScrollbar()

  // var mobileMenuContent = $('.main-header .menu-area .main-menu').html()
  // $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent)
  // $('.sticky-header .main-menu').append(mobileMenuContent)

  //Dropdown Button
  $('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
    $(this).toggleClass('open')
    $(this).prev('ul').slideToggle(500)
  })
  //Menu Toggle Btn
  $('.mobile-nav-toggler').on('click', function () {
    $('body').addClass('mobile-menu-visible')
  })

  //Menu Toggle Btn
  $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function () {
    $('body').removeClass('mobile-menu-visible')
  })
}

// Scroll to a Specific Div
if ($('.scroll-to-target').length) {
  $('.scroll-to-target').on('click', function () {
    var target = $(this).attr('data-target')
    // animate
    $('html, body').animate(
      {
        scrollTop: $(target).offset().top,
      },
      1000
    )
  })
}

// Elements Animation
if ($('.wow').length) {
  var wow = new WOW({
    mobile: false,
  })
  wow.init()
}

//Update Header Style and Scroll to Top

function headerStyle() {
  if ($('.main-header').length) {
    var windowpos = $(window).scrollTop()
    var siteHeader = $('.main-header')
    var scrollLink = $('.scroll-top')
    if (windowpos >= 110) {
      siteHeader.addClass('fixed-header')
      scrollLink.addClass('open')
    } else {
      siteHeader.removeClass('fixed-header')
      scrollLink.removeClass('open')
    }
  }
}
//Hide Loading Box (Preloader)
function handlePreloader() {
  if ($('.preloader').length) {
    $('.preloader').delay(200).fadeOut(500)
  }
}
headerStyle()

$(document).ready(function () {
  $('.owl-carousel').owlCarousel()

  // Add scrollspy to <body>
  $('body').scrollspy({ target: '#menu-header', offset: 50 })

  // Add smooth scrolling on all links inside the navbar
  $('#menu-header a').on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault()

      // Store hash
      var hash = this.hash

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 60,
        },
        500,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          // window.location.hash = hash
        }
      )
    } // End if
  })
})

function sendMail() {
  console.log('fsdfs')
  Email.send({
    Host: 'smtp.gmail.com',
    Username: 'tathimyhanh03@gmail.com',
    Password: '<email password>',
    To: 'tahanh.aib@gmail.com',
    From: 'tathimyhanh03@gmail.com',
    Subject: 'Sending Email using javascript',
    Body: 'Well that was easy!!',
  }).then((message) => alert('mail sent successfully'))
  console.log('adv')
}
$(window).on('scroll', function () {
  headerStyle()
})
// $(window).on('load', function () {
//   handlePreloader()
// })
