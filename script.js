$(document).ready(function () {
  $("#about-me").click(function () {
    functionam1();
    functionam2();
    functionam3();
  });

  function functionam1() {
    $("#slide1").fadeOut(0, function () {
      $("#slide1").fadeIn(500);
    });
  }

  function functionam2() {
    $("#slide2").fadeOut(0, function () {
      $("#slide1").fadeIn(500);
    });
  }

  function functionam3() {
    $("#slide3").fadeOut(0, function () {
      $("#slide1").fadeIn(500);
    });
  }

  $("#this-website").click(function () {
    functiontw1();
    functiontw2();
    functiontw3();
  });

  function functiontw1() {
    $("#slide2").fadeOut(0, function () {
      $("#slide2").fadeIn(500);
    });
  }

  function functiontw2() {
    $("#slide1").fadeOut(0, function () {
      $("#slide2").fadeIn(500);
    });
  }

  function functiontw3() {
    $("#slide3").fadeOut(0, function () {
      $("#slide2").fadeIn(500);
    });
  }

  $("#lucky-ones").click(function () {
    functionlo1();
    functionlo2();
    functionlo3();
  });

  function functionlo1() {
    $("#slide3").fadeOut(0, function () {
      $("#slide3").fadeIn(500);
    });
  }

  function functionlo2() {
    $("#slide1").fadeOut(0, function () {
      $("#slide3").fadeIn(500);
    });
  }

  function functionlo3() {
    $("#slide2").fadeOut(0, function () {
      $("#slide3").fadeIn(500);
    });
  }

  $("#education-b").click(function () {
    functione1();
    functione2();
    functione3();
    functione4();
  });

  function functione1() {
    $("#education").fadeOut(0, function () {
      $("#education").fadeIn(500);
    });
  }

  function functione2() {
    $("#experience").fadeOut(0, function () {
      $("#education").fadeIn(500);
    });
  }

  function functione3() {
    $("#achievement").fadeOut(0, function () {
      $("#education").fadeIn(500);
    });
  }

  function functione4() {
    $("#portfolio").fadeOut(0, function () {
      $("#education").fadeIn(500);
    });
  }

  $("#experience-b").click(function () {
    functionex1();
    functionex2();
    functionex3();
  });

  function functionex1() {
    $("#education").fadeOut(0, function () {
      $("#experience").fadeIn(500);
    });
  }

  function functionex2() {
    $("#achievement").fadeOut(0, function () {
      $("#experience").fadeIn(500);
    });
  }

  function functionex3() {
    $("#portfolio").fadeOut(0, function () {
      $("#experience").fadeIn(500);
    });
  }

  $("#achievement-b").click(function () {
    functiona1();
    functiona2();
    functiona3();
  });

  function functiona1() {
    $("#education").fadeOut(0, function () {
      $("#achievement").fadeIn(500);
    });
  }

  function functiona2() {
    $("#experience").fadeOut(0, function () {
      $("#achievement").fadeIn(500);
    });
  }

  function functiona3() {
    $("#portfolio").fadeOut(0, function () {
      $("#achievement").fadeIn(500);
    });
  }

  $("#portfolio-b").click(function () {
    functionp1();
    functionp2();
    functionp3();
  });

  function functionp1() {
    $("#education").fadeOut(0, function () {
      $("#portfolio").fadeIn(500);
    });
  }

  function functionp2() {
    $("#experience").fadeOut(0, function () {
      $("#portfolio").fadeIn(500);
    });
  }

  function functionp3() {
    $("#achievement").fadeOut(0, function () {
      $("#portfolio").fadeIn(500);
    });
  }
});
