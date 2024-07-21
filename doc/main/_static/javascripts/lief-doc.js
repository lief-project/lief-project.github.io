$(function () {
  if ($("#changelog--page-root").length > 0) {
    $("dt").filter(function (index, e) {
        return e.innerText === "ELF";
      }).each(function(index, value) {
        $(this).addClass("badge").addClass("badge-pastel-primary");
    });

    $("dt").filter(function (index, e) {
        return e.innerText === "PE";
      }).each(function(index, value) {
      $(this).addClass("badge").addClass("badge-pastel-warning");
    });

    $("dt").filter(function (index, e) {
        return e.innerText === "Mach-O" || e.innerText === "MachO";
      }).each(function(index, value) {
      $(this).addClass("badge").addClass("badge-pastel-success");
    });
  }
})

