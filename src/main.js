
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





document.getElementById('Filter').addEventListener('click', () => {
  document.getElementById('pantalla1').style.display = 'none';
  document.getElementById('pantalla2').style.display = 'none'; 
  document.getElementById('pantalla4').style.display = 'none';
  document.getElementById('consejomunicipal').style.display = 'none'; 
  document.getElementById('organizacionmunicipal').style.display = 'none';
  document.getElementById('pantalla3').style.display = 'block'; 
});

// matrimonio

document.getElementById('matrimonio').addEventListener('click', () => {
  document.getElementById('VASOLECHE').style.display = 'none';
  document.getElementById('AUTOVALUO').style.display = 'none';
  document.getElementById('PENSION65').style.display = 'none';
  document.getElementById('ALQUILER').style.display = 'none';
  document.getElementById('pantalla3').style.display = 'block'; 
  document.getElementById('MATRIMONIO').style.display = 'block';
});

// autovaluo
document.getElementById('autovaluo').addEventListener('click', () => {
  document.getElementById('VASOLECHE').style.display = 'none';
  document.getElementById('MATRIMONIO').style.display = 'none';
  document.getElementById('PENSION65').style.display = 'none';
  document.getElementById('ALQUILER').style.display = 'none';
  document.getElementById('pantalla3').style.display = 'block'; 
  document.getElementById('AUTOVALUO').style.display = 'block';
});

// vaso de leche

document.getElementById('vasoleche').addEventListener('click', () => {
  document.getElementById('PENSION65').style.display = 'none';
  document.getElementById('AUTOVALUO').style.display = 'none';
  document.getElementById('MATRIMONIO').style.display = 'none';
  document.getElementById('ALQUILER').style.display = 'none';
  document.getElementById('pantalla3').style.display = 'block'; 
  document.getElementById('VASOLECHE').style.display = 'block';
});

// pension 65

document.getElementById('pension65').addEventListener('click', () => {
  document.getElementById('AUTOVALUO').style.display = 'none';
  document.getElementById('MATRIMONIO').style.display = 'none';
  document.getElementById('VASOLECHE').style.display = 'none';
  document.getElementById('ALQUILER').style.display = 'none';
  document.getElementById('pantalla3').style.display = 'block'; 
  document.getElementById('PENSION65').style.display = 'block';
});

// alquiler de maquinaria


document.getElementById('alquiler').addEventListener('click', () => {
  document.getElementById('AUTOVALUO').style.display = 'none';
  document.getElementById('MATRIMONIO').style.display = 'none';
  document.getElementById('VASOLECHE').style.display = 'none';
  document.getElementById('PENSION65').style.display = 'none';
  document.getElementById('pantalla3').style.display = 'block'; 
  document.getElementById('ALQUILER').style.display = 'block';
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


document.getElementById('JefeMdc').addEventListener('click', () => {
  document.getElementById('JEFEEXTERNO').style.display = 'none'
  document.getElementById('recursohumano').style.display = 'none';
  document.getElementById('organizacionmunicipal').style.display = 'block'; 
  document.getElementById('AsesorLegal').style.display = 'block';
});
document.getElementById('RecursosHumanos').addEventListener('click', () => {
  document.getElementById('JEFEEXTERNO').style.display = 'none'
  document.getElementById('AsesorLegal').style.display = 'none';
  document.getElementById('organizacionmunicipal').style.display = 'block'; 
  document.getElementById('recursohumano').style.display = 'block';
});

document.getElementById('jefeexterno').addEventListener('click', () => {
 document.getElementById('recursohumano').style.display = 'none';
  document.getElementById('AsesorLegal').style.display = 'none';
  document.getElementById('organizacionmunicipal').style.display = 'block'; 
  document.getElementById('JEFEEXTERNO').style.display = 'block';
});