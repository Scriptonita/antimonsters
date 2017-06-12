
// FIXME: Cuando está en imagen Seguros/segurosOk si le da accion la lía
// FIXME: posición manilla radar
// FIXME: que al pausar sonidos vuelvan al inicio
// FIXME: Al parar scanner sigue sonando, hay que controlar la interrupción que hace el media.puse();


$efectos = ['negative', 'mono', 'posterize', 'sepia', 'none'];
$efectIndex = 0;
$protectIndex = 0;
$aux4x100 = 0;
$temp = null;
$vibr = null;
$scan = null;
$grad = null;
$protec_modo = false;
$protecSound = null;
$sonarSound = null;
$scannerSound = null;
$botonSound = null;
$accion = false;
$enScanner = true;
$enProteccion = false;
$enMapa = false;
$vibraciones = 0;
$camWidth = 0;
$camHeight = 0;
$watchID = null;
$hechizoAccion = false;
$protectStatus = 0;
$scannerStatus = 0;
$alternar_rayos = 0;
$animacion = null;


function iniciarVariables () {
  $efectIndex = 0;
  $protectIndex = 0;
  $temp = null;
  $vibr = null;
  $scan = null;
  $grad = null;
  $protec_modo = false;
  $protecSound = null;
  $sonarSound = null;
  $scannerSound = null;
  $botonSound = null;
  $accion = false;
  $enScanner = true;
  $enProteccion = false;
  $enMapa = false;
  $vibraciones = 0;
  $watchID = null;
  $hechizoAccion = false;
  $protectStatus = 0;
  $scannerStatus = 0;
  $alternar_rayos = 0;
  $animacion = null;
}
