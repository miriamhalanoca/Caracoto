
 const pagina1 = document.getElementById('pantalla1');
 const botonmunicipio=document.getElementById('order');
 const pagina2 =document.getElementById('pantalla2');
let contador = 0;




// boton inicio
document.getElementById('Start').addEventListener('click', () => {
  document.getElementById('pantalla2').style.display = 'none';
  document.getElementById('pantalla3').style.display = 'none';
  document.getElementById('pantalla4').style.display = 'none';
  document.getElementById('consejomunicipal').style.display = 'none';
  document.getElementById('organizacionmunicipal').style.display = 'none'; 
  document.getElementById('pantalla1').style.display = 'block';

});


// boton municipio
document.getElementById('Order').addEventListener('click', () => {
    document.getElementById('pantalla1').style.display = 'none';
    document.getElementById('pantalla3').style.display = 'none';
    document.getElementById('pantalla4').style.display = 'none';
    document.getElementById('consejomunicipal').style.display = 'none'; 
    document.getElementById('organizacionmunicipal').style.display = 'none';
    document.getElementById('pantalla2').style.display = 'block'; 
  });



// boton  tramites

document.getElementById('Filter').addEventListener('click', () => {
  document.getElementById('pantalla1').style.display = 'none';
  document.getElementById('pantalla2').style.display = 'none'; 
  document.getElementById('pantalla4').style.display = 'none';
  document.getElementById('consejomunicipal').style.display = 'none'; 
  document.getElementById('organizacionmunicipal').style.display = 'none';
  document.getElementById('pantalla3').style.display = 'block'; 
});

//boton de contacto
document.getElementById('Calculate').addEventListener('click', () => {
  document.getElementById('pantalla1').style.display = 'none';
  document.getElementById('pantalla2').style.display = 'none'; 
  document.getElementById('pantalla3').style.display = 'none';
  document.getElementById('consejomunicipal').style.display = 'none'; 
  document.getElementById('organizacionmunicipal').style.display = 'none';
  document.getElementById('pantalla4').style.display = 'block'; 
});

  // boton consejo municipal
  document.getElementById('municipio').addEventListener('click', () => {
    document.getElementById('pantalla1').style.display = 'none';
    document.getElementById('pantalla3').style.display = 'none';
    document.getElementById('pantalla4').style.display = 'none';
    document.getElementById('pantalla2').style.display = 'none'; 
    document.getElementById('organizacionmunicipal').style.display = 'none'; 
    document.getElementById('consejomunicipal').style.display = 'block'; 
  });

// boton organizacion
document.getElementById('organizacion').addEventListener('click', () => {
  document.getElementById('pantalla1').style.display = 'none';
  document.getElementById('pantalla3').style.display = 'none';
  document.getElementById('pantalla4').style.display = 'none';
  document.getElementById('pantalla2').style.display = 'none'; 
  document.getElementById('consejomunicipal').style.display = 'none';
  document.getElementById('organizacionmunicipal').style.display = 'block'; 
});

