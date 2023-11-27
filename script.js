$("#btn-hamburger").click(function () {
  // $('.undeploy').classList.toggle("deploy")
  $(".undeploy").toggleClass("deploy");
});

$("#btn-hamburger").click(function () {
  $("#btn-hamburger").toggleClass("rotate");
});

$(".services").click(function () {
  $(".box").fadeIn(2500);
  $(".box").css("display", "flex");
});

// THE IDEA IS TO MAKE IT APPEAR FROM RIGHT AND LEFT
$(window).scroll(function () {
  const scrolled = Math.round(window.scrollY);
  if (scrolled > 250 && scrolled < 373) {
    $("#box-1").fadeIn(2500);
    $("#box-2").fadeIn(2500);
    $("#box-3").fadeIn(2500);
  }
});

$("#box-1").click(selected);
$("#box-2").click(selected);
$("#box-3").click(selected);

function selected() {
  $(".box").css("display", "none");
  // $('.box').removeClass('box');
  boxId = `#${this.id}`;
  $(boxId).css("display", "flex");
  $(".container-box").css("alignItems", "flex-start");
  $(boxId).addClass("box-activated");
  let children = $(boxId).children()[2].id;
  $(`#${children}`).css("display", "flex");
}

$(".project-container").removeClass("project-container--fm");

$(document).ready(function () {
  i18next.init({
    lng: 'en', // set the default language
    resources: {
      en: {
        translation: {
          // Load translations from the en.json file
          // You can also load translations asynchronously if needed
          // See i18next documentation for more options
          home: 'Home',
          education: 'Education',
          // ...
        },
      },
      es: {
        translation: {
          // Load translations from the es.json file
          home: 'Inicio',
          education: 'Educación',
          // ...
        },
      },
    },
  });

  // You can set the initial language here or provide a language switcher
  // i18next.changeLanguage('en'); // set the initial language
});

function switchLanguage(lang) {
  i18next.changeLanguage(lang);
  // Aquí puedes actualizar el contenido de tu página después de cambiar el idioma
  // Por ejemplo, puedes volver a renderizar la página o actualizar elementos específicos
}

// Ejemplo de un interruptor de idioma en tu HTML
$('#englishButton').on('click', function () {
  switchLanguage('en');
});

$('#spanishButton').on('click', function () {
  switchLanguage('es');
});

// Puedes establecer el idioma inicial aquí si lo deseas
// i18next.changeLanguage('en');
;
