let formulario = document.getElementById('formulario');
let tabla = document.getElementById('tabla-content');

const datos = {
  name: '',
  lastname: '',
  id: '',
};

formulario.addEventListener('submit', (e) => {
  console.log(e);
  e.preventDefault();
  datos.name = document.getElementById('fname').value;
  datos.lastname = document.getElementById('lname').value;
  datos.id = document.getElementById('identificacion').value;
  tabla.children[0].innerHTML += `
    <tr>
    <td>${datos.name}</td>
    <td>${datos.lastname}</td>
    <td>${datos.id}</td>
    </tr>
    `;
  console.log(datos);
});
