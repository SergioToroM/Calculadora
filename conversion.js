function Restar(a,b){
    let valor1 = parseFloat(document.getElementById('v1').value);
    let valor2 = parseFloat(document.getElementById('v2').value);
    let resultado = valor1 - valor2;

    document.getElementById('res').value = resultado;

    if(resultado < 0){
        document.getElementById('res').style.background = 'darkorange';
        document.getElementById('res').style.color = 'white';
    }else{
        document.getElementById('res').style.background ='lightgreen';
        document.getElementById('res').style.color = 'darkblue';
    }
}

