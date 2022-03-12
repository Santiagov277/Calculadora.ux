function calcular() {
    var nota1, nota2, nota3, resultado;
    nota1 = window.document.Colegio.nota1.value;
    nota2 = window.document.Colegio.nota2.value;
    nota3 = window.document.Colegio.nota3.value;

    resultado = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

    window.document.Colegio.inputtext.value = resultado;

    if (resultado >= 3.0) {
        alert("El estudiante aprobo");
    } else {
        alert("El estudiante reprobo");
    }
}

function alerborrar() {
    alert("Las notas se borraron correctamente");
}