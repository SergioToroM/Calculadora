/* Variables
var: ámbito global, la reconoce todas las funciones
let: ámbito local, solo la conocen dentro de la función
const: espacio de memoria que tendrá un valor que no se modifica

*/

function Sumar(){
    let cadena1 = parseInt(document.getElementById('num1').value);
    let cadena2 = parseInt(document.getElementById('num2').value);
    let cadena3 = parseInt(document.getElementById('num3').value);
    if (cadena1.lenght<=0 || cadena2.lenght<=0){
        document.getElementById('res').value = 'Debe ingresar todos los valores';
    }else{
        document.getElementById('res').value = (cadena1+cadena2+cadena3);
    }
}

function Restar(){
    document.getElementById('res').value = parseInt(document.getElementById('num1').value) - parseInt(document.getElementById('num2').value) - parseInt(document.getElementById('num3').value);

}
    
function Multiplicar(){
    document.getElementById('res').value = parseInt(document.getElementById('num1').value) * parseInt(document.getElementById('num2').value) * parseInt(document.getElementById('num3').value);

}

function Dividir(){
    document.getElementById('res').value = parseInt(document.getElementById('num1').value) / parseInt(document.getElementById('num2').value) / parseInt(document.getElementById('num3').value);
}


function Comparar(){
    document.getElementById('num1').style.backgroundColor='white'
    document.getElementById('num2').style.backgroundColor='white'
    var Valor1 = parseInt(document.getElementById('num1').value);
    var Valor2 = parseInt(document.getElementById('num2').value);
    if(Valor1 > Valor2){
        document.getElementById('num1').style.backgroundColor='green';
        document.getElementById('num1').style.Color='white';
        document.getElementById('num2').style.backgroundColor='red';
        document.getElementById('num2').style.Color='white';

    }else{
        document.getElementById('num2').style.backgroundColor='green';
        document.getElementById('num2').style.Color='white';
        document.getElementById('num1').style.backgroundColor='red';
        document.getElementById('num1').style.Color='white';
        
    }
}

function Multiplo() {
    let valor1 = parseInt(document.getElementById("num1").value);
    let valor2 = parseInt(document.getElementById("num2").value);
    
    if (isNaN(valor1)  || isNaN(valor2)){
        document.getElementById('res').value = "Valores incpmpletos"    
    } else if (valor1%valor2===0){
        document.getElementById('res').value = "Si es multiplo"    
        }else{ 
        document.getElementById('res').value = "No es multiplo"
    }
    
}


function Comparartxt() {
    let txt1 = document.getElementById("text1").value;
    let txt2 = document.getElementById("text2").value;

    if (txt1.length > txt2.length) {
        document.getElementById('res_text').value = "La cadena 1 es mayor"
    } else if (txt1.length < txt2.length){
        document.getElementById('res_text').value = "La cadena 2 es mayor"
    } else {
        document.getElementById('res_text').value = "Son iguales"
    }
}

function Contarletra() {
    let letras1 = (document.getElementById('text1').value);
    let letras2 = (document.getElementById('text2').value);
    let contaor = 0

    if (letras1.length == 0 || letras2.length == 0) {
        document.getElementById('res_text').value = ("Debes ingresar las palabras");
    }
    else for (let i = 0; i <= letras1.length; i++) {

        if (letras1.charAt(i) === letras2) {
            contaor++
        }
        { document.getElementById('res_text').value = ("La letra " + letras2 + " existe " + contaor + " veces en la cadena 1"); }
    }

}

function eliminarespacios() {
    let vlr1 = document.getElementById("text1").value;
    document.getElementById('res_text').value = vlr1.replace(/\s+/g, '')
}

    
function insertar() {
    let vale1 = document.getElementById("text1").value;
    let vale2 = document.getElementById("text2").value;
    document.getElementById('res_text').value = vale1.split()
}


