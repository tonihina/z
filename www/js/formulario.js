$(function(){
  $("#enviarDatos").click(function(){
    var fNombre = $("#nombre").value();
    var fPeso= $("peso").value();
    var fEdad= $("edad").value();
    var fAltura= $("altura").value();
    var fSexo= $("sexo").value();
    var fhaces= $("experiencia").value();
    

    $("nombre").value(" ");
    $("peso").value(" ");
    $("edad").value(" ");
    $("altura").value(" ");
    $("sexo").value(" ");
    $("experiencia").value(" ");

    $.ajax({
      type:"POST",
      url: "#",
      data: ({ Nombre: fNombre, Edad: fEdad, Altura: fAltura, Sexo: fSexo, Ejercicio: fhaces}),
      cache: false,
      dataType: "text",
      success: Enviado
    });
  });
  function Enviado(data){
      alert("Hola");
      window.location("../bienvenido.html");
  }
});