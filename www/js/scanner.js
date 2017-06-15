function scanearDimensiones() {
  //if ($scannerStatus !== 3) {
    if ($efectIndex < 5) {
      if ($efectIndex > 0) {
        CameraPreview.setColorEffect($efectos[$efectIndex]);
        $("#filtros").attr("src", "./img/efecto_" + $efectIndex + ".gif");
        $("#filtros").show();
        break;
      }
      window.plugins.NativeAudio.play("scanner",
          function() {
            console.log("Scanner de dimensión " + $efectIndex + " iniciado");
          },
          function() {
            console.log("Error scaneando dimensión" + $efectIndex);
          },
          function() {
            console.log("Scanner de dimensión " + $efectIndex + " completado");
            $efectIndex++;
            scanearDimensiones();
          }
      );

    } else {
      CameraPreview.setColorEffect('none');
      $("#filtros").hide();
      $("#accion-boton").removeClass("red");
      $("#accion-boton").addClass("indigo");
      CameraPreview.setFlashMode("off");
      scannerOK();
    }

}

function scannerOK () {
  $("#objetivo").attr("src", "./img/segurosOk.png");
  //$okSound.play();
  window.plugins.NativeAudio.play("temaOk");
  var retraso = setTimeout(function() {
      $("#objetivo").addClass("bienHecho");
  }, 350);
  CameraPreview.setFlashMode("off");
  $temp = setTimeout(function(){
    actualizaBotones("scanner");
    mostrarSolo("scanner");
    $accion = false;
  }, 6000);
}
