function scanearDimensiones() {
  //if ($scannerStatus !== 3) {
    if ($efectIndex < 5) {
      switch ($efectIndex) {
        case 0:
          //$(".filtros").css("background", "rgba(255, 0, 0, 0.5)");
          //$(".filtros").css("filter", "blur(4px)");
          var aux = "";
          CameraPreview.getSupportedWhiteBalanceModes(function(whiteBalanceMode){
            aux = whiteBalanceMode;
          });
          $("#nombreApp").html(aux);
          CameraPreview.setWhiteBalanceMode(CameraPreview.WHITE_BALANCE_MODE.CLOUDY_DAYLIGHT);

          break;
        case 1:
          //$(".filtros").css("background", "rgba(0, 255, 0, 0.4)");
          //$(".filtros").css("filter", "blur(4px)");
          CameraPreview.setWhiteBalanceMode(CameraPreview.WHITE_BALANCE_MODE.FLUORESCENT);
          break;
        case 2:
          //$(".filtros").css("background", "rgba(0, 0, 0, 0.5)");
          //$(".filtros").css("filter", "grayscale(100%)");
          CameraPreview.setWhiteBalanceMode(CameraPreview.WHITE_BALANCE_MODE.SHADE);
          break;
        case 3:
          //$(".filtros").css("background", "rgba(0, 0, 0, 0.45)");
          //$(".filtros").css("filter", "sepia(100%)");
          CameraPreview.setWhiteBalanceMode(CameraPreview.WHITE_BALANCE_MODE.TWILIGHT);
          break;
        case 4:
          //$(".filtros").css("background", "transparent");
          //$(".filtros").css("filter", "none");
          CameraPreview.setWhiteBalanceMode(CameraPreview.WHITE_BALANCE_MODE.INCANDESCENT);
          break;
        default:
          break;
      }

      /*
        CameraPreview.setColorEffect($efectos[$efectIndex],
          function() {
            //$("#objetivo").attr("src", "./img/mirilla_" + $efectIndex + ".png");
            $("#nombreApp").html("Filtro " + $efectos[$efectIndex] + " aplicado");

          },
          function() {
            $("#nombreApp").html("Error efecto" + error);
          });

        console.log("Aplicado Efecto " + $efectos[$efectIndex]);
        console.log("EfectoIndice: " + $efectIndex);
*/
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
      $("#nombreApp").html("AntiMonsterS");
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
