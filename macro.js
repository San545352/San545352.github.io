// document.querySelector('#formulario').addEventListener('submit', function (e) {
//     e.preventDefault();
//     document.body.append('Formulário submetido')
// })
// function Selecione(num) {
//     let opc = parseInt(num);

// }

// Botão de rolagem para o top
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* Botão de passar fotos */
// $(document).ready(function(){
//   var fotos = $("#fotos > img").length -1;
//   var pos = 0;
//   // $("#fotos > img:eq("+pos+")").addClass("ativa");

//   $("#voltar").click(function(){
//       if(pos > 0){
//           pos -= 1;
//           $("img.ativa").removeClass("ativa");
//           $("#fotos > img:eq("+pos+")").addClass("ativa");
//       }else{
//           pos = 3;
//           $("img.ativa").removeClass("ativa");
//           $("#fotos > img:eq("+pos+")").addClass("ativa")
//       }
//   });
//   $("#passar").click(function(){
//       if(pos < fotos){
//           pos += 1;
//           $("img.ativa").removeClass("ativa");
//           $("#fotos > img:eq("+pos+")").addClass("ativa");
//       }else{
//           pos = 0;
//           $("img.ativa").removeClass("ativa");
//           $("#fotos > img:eq("+pos+")").addClass("ativa");
//       }
//   });

