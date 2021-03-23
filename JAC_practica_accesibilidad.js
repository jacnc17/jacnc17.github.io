function verifica_nif(dni) {
	var numero
	var letr
	var letra
	var expresion_regular_dni
	var resultado=true

	if (dni)
	{
		expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

		if(expresion_regular_dni.test (dni) == true){
			numero = dni.substr(0,dni.length-1);
			letr = dni.substr(dni.length-1,1);
			numero = numero % 23;
			letra='TRWAGMYFPDXBNJZSQVHLCKET';
			letra=letra.substring(numero,numero+1);

			if (letra!=letr.toUpperCase()) {
				alert('DNI erróneo, la letra del NIF no se corresponde.');
				resultado=false;
			}
			//else {
			//  alert('Dni correcto');
			//}
		}else{
			alert('DNI erróneo, formato no válido. El formato esperado es 123456789B.');
			resultado=false;
		}
	}
	
	if (!resultado) document.getElementById('nif').focus();

	return resultado;
}

function verifica_telefono(tlf)
{
	resultado=true;
	if ( (/^\d{10}$/g.test(tlf)) == false) {
		alert ('Teléfono incorrecto, el formato esperado es de diez dígitos.');
		document.getElementById('tlf').focus();
		resultado=false;
	}
	return resultado
}

function verifica_cp(cp)
{
	resultado=true;
	
	if ((/^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/.test(cp) ) == false) {
		alert ('El código postal debe ser un número entre 01000 y 52999.');
		document.getElementById('cp').focus();
		resultado=false;
	}
	return resultado;
}

function verifica_correo(email)
{
	resultado=true;
	if ((/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))==false) {
		alert ('El formato del correo electrónico no es correcto.');
		document.getElementById('email').focus();
		resultado=false;
	}
	return resultado;
}

function verifica_obligatorios()
{
	resultado=true;
	if(!(document.getElementById('nombre').value!=null && document.getElementById('nombre').value!='' &&
		document.getElementById('apellidos').value!=null && document.getElementById('apellidos').value!='' &&
		document.getElementById('dir').value!=null && document.getElementById('dir').value!='' &&
		document.getElementById('localidad').value!=null && document.getElementById('localidad').value!='' &&
		document.getElementById('provincia').value!=null && document.getElementById('provincia').value!='')) {
		resultado = false;
		alert ("Verifique campos obligatorios");
		document.getElementById('nombre').focus();
	}

	return resultado;
}
	

function verifica ()
{
	if (verifica_obligatorios() &&
		verifica_nif(document.getElementById('nif').value) && 
		verifica_telefono(document.getElementById('tlf').value) &&
		verifica_cp(document.getElementById('cp').value) &&
		verifica_correo(document.getElementById('email').value) &&
		(confirm('¿Confirma el envío del formulario con los datos facilitados?')))
			return true;

	return false;
}