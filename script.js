$("#btn-hamburger").click(function () {
  $(".undeploy").toggleClass("deploy");
  $("#btn-hamburger").toggleClass("rotate");
});

$(".services").click(function () {
  $(".box").fadeIn(2500);
  $(".box").css("display", "flex");
});

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
  const boxId = `#${this.id}`;
  $(boxId).css("display", "flex");
  $(".container-box").css("alignItems", "flex-start");
  $(boxId).addClass("box-activated");
  const children = $(boxId).children()[2].id;
  $(`#${children}`).css("display", "flex");
}

$(".project-container").removeClass("project-container--fm");
