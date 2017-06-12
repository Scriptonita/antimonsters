// Fuente: http://codepen.io/mamilliery/pen/putkC

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}



function updateGradient()
{
  var colors = new Array(
    [getRandomInt(150,256),getRandomInt(150,256),getRandomInt(150,256)],
    [getRandomInt(150,256),getRandomInt(150,256),getRandomInt(150,256)],
    [getRandomInt(150,256),getRandomInt(150,256),getRandomInt(150,256)],
    [getRandomInt(150,256),getRandomInt(150,256),getRandomInt(150,256)],
    [getRandomInt(150,256),getRandomInt(150,256),getRandomInt(150,256)]);

  var step = 0;
    //color table indices for:
    // current color left
    // next color left
    // current color right
    // next color right
  var colorIndices = [0,1,2,3];

    //transition speed
  var gradientSpeed = .015;

  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];

  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "#"+((r1 << 16) | (g1 << 8) | b1).toString(16);

  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "#"+((r2 << 16) | (g2 << 8) | b2).toString(16);

 $('#protegiendo').css({background: "-webkit-radial-gradient(center, circle cover, "+color1+","+color2+")"});

  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];

    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

  }
}

//setInterval(updateGradient,10);
