function pantallaProteccion() {
  console.log("Entro en pantalla proteccion");
  $("body").css("background-image", "url(./img/azules.gif)");
  $("#hechizo").html("<img id='bola' src='./img/bola.gif' />");
  $("#bola").css("width", $("main").width());
  $("#bola").css("height", $("main").height());
}
