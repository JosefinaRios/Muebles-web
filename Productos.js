const ham =document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras= document.querySelectorAll('.ham span');

ham.addEventListener('click', () =>{
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')})
});


const urlBase = 'https://api.yumserver.com/16775/products';

function MostrarProductos(producto){
    let html = '';
    for(let i= 0; i <producto.length; i++){
        console.log(producto[i].titulo)
        html += `
        <tr>
          <td><b>${producto[i].idcod}</b></td>
          <td><b>${producto[i].titulo}</b></td>
          <td><b>${producto[i].precioPeso}</b></td>
          <td><b>${producto[i].precioDolar}</b></td>
          <td><b>${producto[i].fecha}</b></td>
          <td><button onclick="Borrar('${producto[i].idcod}')" class="btnBorrar">Eliminar</button></td>

          <td><button onclick="MostrarFormularioModificar('${producto[i].idcod}', '${producto[i].titulo}', '${producto[i].precioPeso}', '${producto[i].precioDolar}', '${producto[i].fecha}')"  class="btnModificar">Modificar</button></td>      
              </tr>
        `;       
    }
    document.getElementById('resultados').innerHTML = html;
}

//obtener los productos
function ObtenerProductos(){
    fetch(urlBase)
    .then(response => response.json())
    .then(MostrarProductos)
    .catch(error => console.error('Error:', error));
}



var ids = ['container-tabla', 'nuevo-producto', 'modificar-producto'];
function Mostrar(_div){
    for(let i = 0; i<ids.length; i++){
        document.getElementById(ids[i]).setAttribute('style', 'display:none');
    }
    document.getElementById(_div).removeAttribute('style');

}



//crear un producto
function CrearNuevoProducto(){
    let producto ={
        titulo: document.getElementById('titulo').value,
        precioPeso: document.getElementById('preciopeso').value,
        precioDolar: document.getElementById('preciodolar').value,
        fecha: document.getElementById('Fecha').value
    };
    fetch('https://api.yumserver.com/16775/products',{
        method: 'POST',
        headers :{ 'Content-Type': 'application/json'},
        body: JSON.stringify(producto)
    })
    .then(response =>response.text())
    .then(
        function (texto){
            if(texto.trim() == "OK"){
                alert('Se ha creado el producto exitosamente');
                Mostrar('container-tabla');
                ObtenerProductos();
            }
            else{
                alert(texto);
                
            }
           
        }
    )
    .catch(error => console.error ('Error', error));
}

function Borrar(idcod) {
  
     let decision = window.confirm("¿Estás seguro de que deseas eliminar este producto?");
     
         if (decision) {
           
             fetch(urlBase, {
                 method: 'DELETE',
                 headers: {
                     'Content-Type': 'application/json'
                 },
                 body: JSON.stringify({
                    idcod:idcod
                 })
             })
             .then(response => response.text())
             .then(data => {console.log(data)
                if(data.trim() == "OK"){
                    alert('Se ha eliminado el producto exitosamente');
                    
             Mostrar('container-tabla');
             ObtenerProductos();
                }
                else{
                    alert('El idcod no es valido');
                }
            })

         
             .catch(error => console.error(error));
           
           
         }
          else {
             console.log("Operación de eliminación cancelada.");
         }
        }

        function MostrarFormularioModificar(idcod, titulo, precioPeso, precioDolar, fecha) {
            console.log(idcod, titulo, precioPeso, precioDolar, fecha);
       document.getElementById('nuevoidcod').value = idcod;
    document.getElementById('nuevotitulo').value = titulo;
    document.getElementById('nuevopreciopeso').value = precioPeso;
    document.getElementById('nuevopreciodolar').value = precioDolar;
    document.getElementById('nuevaFecha').value = fecha;
    Mostrar('modificar-producto');
}
     
         //Modificar
     function Modificar() {
            fetch(urlBase, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    idcod:document.getElementById('nuevoidcod').value,
                    titulo:document.getElementById('nuevotitulo').value,
                    precioPeso:document.getElementById('nuevopreciopeso').value,
                    precioDolar:document.getElementById('nuevopreciodolar').value,
                    fecha:document.getElementById('nuevaFecha').value
                    
                })
            })
            .then(response => response.text())
            .then(data => {console.log(data)
                if (data.trim() == "OK") {
                    alert('Se ha modificado el producto exitosamente');
                    Mostrar('container-tabla');
                    ObtenerProductos();
                    
                } else {
                    alert('Error al modificar el producto (no puede estar vacio)');
                    
                }
            })
            .catch(error => console.error('Error:', error));
         
    }
     
    


