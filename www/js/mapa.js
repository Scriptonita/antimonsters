function dimensionarMapa() {
  $("#mapa").css("width", "100%");
  $("#mapa").css("height", "100%");
  $("#googlemaps").css("width", $("main").width());
  $("#googlemaps").css("height", $("main").height());
  /*
  $("#radar").attr("width", $("main").width());
  $("#radar").attr("height", $("main").width());
  */
  $("#radar").css("background-image","url('./img/escaneando.png')");
  $("#radar").css("background-size","100% 100%");
  $("#radar").css("background-repeat","no-repeat");
  /*
  $("#manilla").css("width", (32 * $("main").height()) / 800);
  $("#manilla").css("height", $("main").height());
  /*
  console.log("Alto Main: " + $("main").height());
  console.log("Alto Scanner: " + $("#scanner").height());
  console.log("Alto Proteccion: " + $("#proteccion").height());
  console.log("Alto Mapa: " + $("#mapa").height());
  console.log("Ancho Main: " + $("#mapa").width());
  console.log("Ancho Scanner: " + $("#scanner").width());
  console.log("Ancho Proteccion: " + $("#proteccion").width());
  console.log("Ancho Mapa: " + $("#mapa").width());
  */
}


function inicializaMapa(position) {
    $latitud = position.coords.latitude;
    $longitud = position.coords.longitude;

    var latLng = new google.maps.LatLng($latitud, $longitud);

    var mapOptions = {
        zoom: 14, // initialize zoom level - the max value is 21
        streetViewControl: false, // hide the yellow Street View pegman
        scaleControl: false, // allow users to zoom the Google Map
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: latLng,
        draggable: false,
        fullscreenControl: false,
        panControl       : false,
        zoomControl: false
    };

    map = new google.maps.Map(document.getElementById('googlemaps'),
        mapOptions);
/*
    map.addListener('center_changed', function() {
      actualizarMapa();
    });
*/
}

function errorMapa(error) {

  alert ("Error: " + error.code + ". " + error.message);
  document.getElementById("mapid").innerHTLM = "Error: " + error.code + ". " + error.message;
  //$("#mapid").html("Error: " + error.code + ". " + error.message);
}

function actualizarMapa(position) {
  $latitud = position.coords.latitude;
  $longitud = position.coords.longitude;
  var latLng = new google.maps.LatLng($latitud, $longitud);
  map.panTo(latLng);
  console.log("Actualización de mapa. Lat: " + $latitud + "| Long: " + $longitud);
}
