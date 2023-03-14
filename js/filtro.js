$(function () {
  /* Al hacer click en los botones de los TRABAJOS */

  $(".filter").click(function () {
    $(this).addClass("active").siblings().removeClass("active");

    let valor = $(this).attr("data-nombre");
    if (valor == "todos") {
      $(".cont-work").show("1000"); 
    } else {
      /* */
      $(".cont-work")
        .not("." + valor)
        .hide("1000");
      $(".cont-work")
        .filter("." + valor)
        .show("1000");
    }
  });

  let equipo = $("#acerca").offset().top,
    servicio = $("#habilidades").offset().top,
    trabajo = $("#trabajo").offset().top,
    contacto = $("#contacto").offset().top;

  /* Clicks en los enlace de la Nav */

  $("#enlace-inicio").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
  });

  $("#enlace-equipo").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: equipo - 100 /* en pixeles */,
      },
      600
    );
  });

  $("#enlace-servicio").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: servicio - 100,
      },
      600
    );
  });

  $("#enlace-trabajo").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: trabajo - 100,
      },
      600
    );
  });

  $("#enlace-contacto").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: contacto - 100,
      },
      600
    );
  });
});
