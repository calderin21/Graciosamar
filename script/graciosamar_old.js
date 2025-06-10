var desplegable = getCSSRule("#desplegable");
var boton_subir = getCSSRule("#boton_subir");

// VARIABLES GLOBALES CARRUSEL PRINCIPAL
var tira_imagenes = getCSSRule("#tira_imagenes");
var boton_carrusel_derecha = getCSSRule("#boton_carrusel_derecha");
var boton_carrusel_izquierda = getCSSRule("#boton_carrusel_izquierda");

/* EFECTOS */
window.addEventListener('scroll', function()  {
    let elements = document.getElementsByClassName('scroll-content');
    let screenSize = window.innerHeight;
    
      for(var i = 0; i < elements.length; i++) {
        let element = elements[i];
  
        if(element.getBoundingClientRect().top < screenSize) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      }
  });



/* WEB  */
function click_menu()
{
    if (desplegable.style.top == "-240px") {
    desplegable.style.top = "35px";
  }
    else desplegable.style.top = "-240px";
}

function mover(direccion){
  var pantalla = window.innerWidth;
  console.log(pantalla);
  var desplazamiento;
  var limite;

  if (pantalla > 750)
  {
    desplazamiento = 25;
    limite = -50;
  }
  else
  {
    desplazamiento = 100;
    limite = -500;
  }

  switch (direccion){
      case "derecha":
          if (parseInt(tira_imagenes.style.marginLeft) != limite)
          {
              tira_imagenes.style.marginLeft = (parseInt(tira_imagenes.style.marginLeft) - desplazamiento) + "vw";
          }
          else
          {
            tira_imagenes.style.marginLeft = 0 + "vw";
          }
          break;
      case "izquierda":
          if (parseInt(tira_imagenes.style.marginLeft) != 0)
          {
              tira_imagenes.style.marginLeft = (parseInt(tira_imagenes.style.marginLeft) + desplazamiento) + "vw";
          }
          else
          {
            tira_imagenes.style.marginLeft = limite + "vw";
          }
          break;
  }
}

var intervalo = setInterval("mover('derecha')", 5000);

function temporizador(activador)
{
    if (activador == "desactivar") clearInterval(intervalo);
    else intervalo = setInterval("mover('derecha')", 5000);
}

/* FUNCIONES AUXILIARES */
/* OBETENER UN SELECTOR DE LA HOJA DE ESTILOS */
function getCSSRule(ruleName) {
    ruleName = ruleName.toLowerCase();
    var result = null;
    var find = Array.prototype.find;

    find.call(document.styleSheets, styleSheet => {
        result = find.call(styleSheet.cssRules, cssRule => {
            return cssRule instanceof CSSStyleRule 
                && cssRule.selectorText.toLowerCase() == ruleName;
        });
        return result != null;
    });
    return result;
}

/* SCROLL SUAVE EN ENLACES INTERNOS CON JQUERY */
$(document).ready(function() {
    $('a[href^="#"]').click(function() {
      var destino = $(this.hash);
      if (destino.length == 0) {
        destino = $('a[name="' + this.hash.substr(1) + '"]');
      }
      if (destino.length == 0) {
        destino = $('html');
      }
      $('html, body').animate({ scrollTop: destino.offset().top }, 500);
      return false;
    });
  });

/* DETECTAR POSICIÓN SCROLL */
window.addEventListener("scroll", (event) => {
    let scrollY = this.scrollY;
    console.log(scrollY);

    if (scrollY >= 256) 
        boton_subir.style.visibility = "visible";
    else
        boton_subir.style.visibility = "hidden";
});