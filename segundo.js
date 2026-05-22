const elNombre = document.querySelector('#entradaNombre');
const elApellido = document.querySelector('#entradaApellido');
const elCedula = document.querySelector('#entradaCedula');
const elBotonAccion = document.querySelector('#btnProcesarDatos');
const elContenedorTabla = document.querySelector('#nodoContenedorFilas');

elBotonAccion.addEventListener('click', (eventoPizarra) => {
    eventoPizarra.preventDefault();

    const strNom = elNombre.value;
    const strApe = elApellido.value;
    const strCed = elCedula.value;

    if (strNom.trim() === "" || strApe.trim() === "" || strCed.trim() === "") {
        alert("Todos los campos son obligatorios");
        return;
    }

    const trNodoFila = document.createElement('tr');

    const tdDatoNom = document.createElement('td');
    tdDatoNom.textContent = strNom;

    const tdDatoApe = document.createElement('td');
    tdDatoApe.textContent = strApe;

    const tdDatoCed = document.createElement('td');
    tdDatoCed.textContent = strCed;

    const tdDatoAccion = document.createElement('td');
    const elementoBotonQuitar = document.createElement('button');
    
    elementoBotonQuitar.textContent = 'Quitar';
    elementoBotonQuitar.style.backgroundColor = '#d9534f';
    elementoBotonQuitar.style.color = 'white';
    elementoBotonQuitar.style.border = 'none';
    elementoBotonQuitar.style.padding = '4px 8px';
    elementoBotonQuitar.style.cursor = 'pointer';
    elementoBotonQuitar.style.borderRadius = '3px';

    elementoBotonQuitar.addEventListener('click', () => {
        trNodoFila.remove();
    });

    tdDatoAccion.appendChild(elementoBotonQuitar);

    trNodoFila.appendChild(tdDatoNom);
    trNodoFila.appendChild(tdDatoApe);
    trNodoFila.appendChild(tdDatoCed);
    trNodoFila.appendChild(tdDatoAccion);

    elContenedorTabla.appendChild(trNodoFila);

    elNombre.value = "";
    elApellido.value = "";
    elCedula.value = "";
    elNombre.focus();
});