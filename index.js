function calculaTeorema(){
    document.getElementById("resultado").style.display = 'flex';
    const catetoA = document.getElementById("catetoA").value;
    const catetoB = document.getElementById("catetoB").value;
    const hipotenusa = document.getElementById("hipotenusa").value;       

    let somaQuadradoCatetos = (catetoA*catetoA) + (catetoB*catetoB);

    if(hipotenusa!="" && catetoA!="" && catetoB!=""){

        if((hipotenusa*hipotenusa) === somaQuadradoCatetos){            
            document.getElementById("retorno").innerHTML = "É um triângulo retângulo!";
            document.getElementById("resposta").innerHTML = "Resolução: <br>" + hipotenusa + "² = " +catetoA + "² + " + catetoB + "² <br>" + hipotenusa*hipotenusa + " = " + (catetoA*catetoA) + " + " + (catetoB*catetoB) + "<br>" + hipotenusa*hipotenusa + " = " + somaQuadradoCatetos;
        }else{
            document.getElementById("retorno").innerHTML = "Não é um triângulo retângulo!";
            document.getElementById("resposta").innerHTML = "Resolução: <br>" + hipotenusa + "² = " +catetoA + "² + " + catetoB + "² <br>" + hipotenusa*hipotenusa + " = " + (catetoA*catetoA) + " + " + (catetoB*catetoB) + "<br>" + hipotenusa*hipotenusa + " ≠ " + somaQuadradoCatetos;
        }
    }else{
        alert("Hummm..algo não está bem, revise e tente novamente!");
    }
};


function apagarCampos(){
    document.getElementById("catetoA").value = ""; 
    document.getElementById("catetoB").value = ""; 
    document.getElementById("hipotenusa").value = ""; 
    document.getElementById("retorno").innerHTML = "";
    document.getElementById("resposta").innerHTML = "";
    document.getElementById("resultado").style.display = 'none';
}
