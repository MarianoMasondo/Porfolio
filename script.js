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
