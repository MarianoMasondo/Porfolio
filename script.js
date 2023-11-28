const { default: i18next } = require("i18next");

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

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "./Translations/Es/global.json"
import global_en from "./Translations/En/global.json"
import global_zh from "./Translations/Zh/global.json"
import global_pt from './Translations/Pt/global.json'

i18next
.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
    pt: {
      global: global_pt,
    },
  },
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
