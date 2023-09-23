function CambiarColor(){
    let color = document.getElementById('cambiar').style.background = 'green';
    if(color == 'tomato'){
        document.getElementById('cambiar').style.background ='green'
    
    }else{
        document.getElementById('cambiar').style.background ='tomato'
    }
        
    
}


function Sumar(a,b){
    let valor1 = parseFloat(document.getElementById('v1').value);
    let valor2 = parseFloat(document.getElementById('v2').value);
    let resultado = valor1 + valor2;

    document.getElementById('res').value = resultado;
    
}

function Restar(a,b){
    let valor1 = parseFloat(document.getElementById('v1').value);
    let valor2 = parseFloat(document.getElementById('v2').value);
    let resultado = valor1 - valor2;

    document.getElementById('res').value = resultado;

}
    
function Multiplicar(a,b){
    let valor1 = parseFloat(document.getElementById('v1').value);
    let valor2 = parseFloat(document.getElementById('v2').value);
    let resultado = valor1 * valor2;

    document.getElementById('res').value = resultado;

}

function Dividir(a,b){
    let valor1 = parseFloat(document.getElementById('v1').value);
    let valor2 = parseFloat(document.getElementById('v2').value);
    let resultado = valor1 / valor2;

    document.getElementById('res').value = resultado;

}