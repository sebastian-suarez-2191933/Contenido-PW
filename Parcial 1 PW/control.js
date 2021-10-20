var boton=document.getElementById('button-addon2');
var editor=document.getElementById('editar');
var lista=document.getElementById('lista');
var data=[];
var botonA=document.getElementById('btnA');
var btnC=document.getElementById('btn btn-outline-danger');

boton.addEventListener("click", guardar);
boton.addEventListener("click", cancelar);
function guardar() 
{
 var nombre= document.getElementById('nombre').value;
 var correo= document.getElementById('correo').value;
 var phone=document.getElementById('phone').value;
 var gusto=document.getElementById('gustos').value;
 var porcentaje=0;
 var iden=0;
 //agrega elemnto al arreglo
 data.push
 (
    {
        "nombre":gusto,
        "porcentaje":porcentaje
    }
 );
 var id_row='row'+iden;
 var filas='<tr id='+id_row+'><td>'+gusto+'</td><td>'+porcentaje+'</td><td><p id="edicion" style="display:none" > En edición</p><a id=editar class="text" href="#" onclick="accion()">Editar</a></td></tr>';
 //agregar datos a la lista
 $("#lista").append(filas);
 $("gustos").val('');
 iden++;
}

function accion()
{
    $('#editar').css("display", "none");
    $('#edicion').css("display", "block");
    $('#oculto').css("display", "block");

}
