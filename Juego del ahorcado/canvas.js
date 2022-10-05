//Dibujar la base de la horca
function dibujarTablero() {
    tablero.lineWidth=8
    3 //grosor de la línea base
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle= "white"  //"#F3F5FC"  fondo del tablero
    tablero.strokeStyle = "black" //"#98a8df" "#0A3871" línea base
    tablero.fillRect(0,0,950,500) //ancho: 950 y largo:500 del tablero
    tablero.beginPath();
    tablero.moveTo(316,300)
    tablero.lineTo(420,300)
    tablero.stroke()
    tablero.closePath()
    tablero.moveTo(368,300)
    tablero.lineTo(368,100)

  }

  //var teclado = {}
 /*
  function agregarEventosTeclado() {
    agregarEvento(document, "keydown", function(e) {
      teclado[e.keyCode] = true;
    });
    agregarEvento(document, "keyup", function(e) {
      teclado[e.keyCode] = false;
    });

    function agregarEvento (elemento, nombreEvento, funcion) {
      if(elemento.addEventListener) {
        elemento.addEventListener(nombreEvento,funcion, false);
      } else if(elemento.attachEvent){
        elemento.attachEvent(nombreEvento,funcion);
      }   
    }
  }
  */

  //dibujar cada línea de cada letra
  function dibujarLineas() {
    tablero.lineWidth=2 // grosor de las líneas
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.strokeStyle =  //"#0A3871"
    tablero.beginPath()
    let ancho=600/palabraSecreta.length //600 línea entera / total letras = cada línea de letra
    for (let i=0;i<palabraSecreta.length;i++){
      tablero.moveTo(240+(ancho*i),400)
      tablero.lineTo(270+(ancho*i),400)
    }
    tablero.stroke()
    tablero.closePath()
  }

  //escribir cada letra correcta sobre cada línea
  function escrribirLetraCorrecta(index) {
    tablero.font = '45px Roboto' //'bold 52px Inter';
    tablero.lineWidth=5
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle= "#0A3871" //color letra
    let ancho=600/palabraSecreta.length
    tablero.fillText(palabraSecreta[index],240+(ancho*index),380)
    tablero.stroke()
  }

  //escribir letra incorrecta al lado del ahoracado en color rojo
  function escribirLetraIncorrecta(letra, errorsLeft) {
    tablero.lineWidth=2
    tablero.font = '20px Roboto' //'bold 40px Roboto';
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle= 'red' //"#0A3871"
    tablero.fillText(letra,400+(40*(10-errorsLeft)),200,40)
  }

  //dibujar ahorcado por cada error
  function dibujarAhorcado(puntaje) {
    tablero.lineWidth=8
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.strokeStyle = "black" //"#98a8df" "#0A3871"
    if(puntaje===8){
    //poste lateral
    tablero.moveTo(368,300)
    tablero.lineTo(368,100) //vertical 180 a 700
    }
    if(puntaje===7){//teto 
    tablero.moveTo(368,100)
    tablero.lineTo(450,100) //
    }
    if(puntaje===6){//corda
    tablero.moveTo(450,100)
    tablero.lineTo(450,125)
    }
    if(puntaje===5){//para cara
        tablero.fillStyle= "black" //"#98a8df";
        tablero.moveTo(465,135)
        tablero.arc(450,145,20,0,Math.PI*2)
        tablero.fill();
     }
    if(puntaje===4){//para corpo
    tablero.moveTo(450,150)
    tablero.lineTo(450,210)
    }
    if(puntaje===3){//para perna izquerda
    tablero.moveTo(450,210)
    tablero.lineTo(420,250)
    }
    if(puntaje===2){//para perna direita
    tablero.moveTo(450,210)
    tablero.lineTo(480,250)
    }
    if(puntaje===1){//para mão izquerda
    tablero.moveTo(450,180)
    tablero.lineTo(420,200)
    }
    if(puntaje===0){//para mão direita
    tablero.moveTo(450,180)
    tablero.lineTo(480,200)
    }
    tablero.stroke()
    tablero.closePath()
  }

  //mostrar "perdiste"
  function perdiste() {
    tablero.font = '31px Roboto' //' bold 42px Inter';
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="red"
    tablero.fillText("Perdiste.",570,150)
    tablero.fillStyle="green"
    tablero.fillText("Palabra: " + palabraSecreta,240,50)
  }

    //mostrar "gananste"
  function ganaste() {
    tablero.font = '35px Roboto' //'bold 42px Inter';
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="green"
    tablero.fillText("Ganaste!!!",570,150)
    setTimeout( recargar , 1000)
  }   

  //recargar página cuando gana
  function recargar(){
    location.reload(); 
  }

  //agregarEventosTeclado();

  