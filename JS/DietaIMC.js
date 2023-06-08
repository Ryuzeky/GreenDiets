function imc() {
  var peso = parseFloat(document.getElementById("peso").value);     
    var altura = parseFloat(document.getElementById("altura").value);            
    
    if (isNaN(peso) || isNaN(altura)) {      
          document.getElementById("resultado").textContent = "Ingresa un valor numérico para peso y altura.";       
            return;    
          }             
             var resultado = Math.round(peso/(altura**2));
                document.getElementById("resultado").textContent = "Su IMC es: " + resultado;     
              
                  if(resultado < 18.5){
                      document.getElementById("resultado").innerHTML += ' - Estás bajo de peso. <br> <br> <br> <input class="inp" type="button" value="Ir a Dietas" onclick="bajoPeso()">';
                  }
                  else if(resultado >= 18.5 && resultado < 25){
                    document.getElementById("resultado").innerHTML += ' - Tienes un peso adecuado. <br> <br> <br> <input class="inp" type="button" value="Ir a Dietas" onclick="pesoAde()">';
                  }
                  else if(resultado >= 25 && resultado < 30){
                    document.getElementById("resultado").innerHTML += ' - Tienes Sobrepeso. <br> <br> <br> <input class="inp" type="button" value="Ir a Dietas" onclick="sobrePeso()">';
                  }
                  else if(resultado >= 30 && resultado < 35){
                    document.getElementById("resultado").innerHTML += ' - Tienes Obesidad Grado 1. <br> <br> <br> <input class="inp" type="button" value="Ir a Dietas" onclick="obesidadUno()">';
                  }
                  else if(resultado >= 35 && resultado < 40){
                    document.getElementById("resultado").innerHTML += ' - Tienes Obesidad Grado 2. <br> <br> <br> <input class="inp" type="button" value="Ir a Dietas" onclick="obesidadDos()">';
                  }
                  else if(resultado >= 40){
                    document.getElementById("resultado").innerHTML += ' - Tienes Obesidad Grado 3. <br> <br> <br> <input class="inp" type="button" value="Ir a Dietas" onclick="obesidadTres()">';
                  }
}

function bajoPeso() {
  window.location.href = "/html/proximamente.html";
}
function pesoAde() {
  window.location.href = "/html/proximamente.html";
}
function sobrePeso() {
  window.location.href = "/html/proximamente.html";
}
function obesidadUno() {
  window.location.href = "/html/proximamente.html";
}
function obesidadDos() {
  window.location.href = "/html/proximamente.html";
}
function obesidadTres() {
  window.location.href = "/html/proximamente.html";
}
