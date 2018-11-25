var btn;
var capital;
var juros;
var saldo;
var tempo;
var cont;
var acumulo;
var borracha;

function init(){
	btn = document.getElementById("btn_calc");
	btn.addEventListener("click", delga);
}
function delga(){
	
	borracha = document.getElementById("pelotempo");
	borracha.innerHTML='';

	capital = document.getElementById("CapIni").value;
	juros = document.getElementById("Juros").value;
	tempo = document.getElementById("Time").value;
	capital = Number(parseFloat(capital.replace(',','.')));
	juros = Number(parseFloat(juros.replace(',','.')));
	tempo = Number(parseFloat(tempo.replace(',','.')));
	test();
	
}

function test(){
	if(Number.isNaN(capital) || Number.isNaN(juros) || Number.isNaN(tempo)){
		var rr = document.getElementById("resultado");
		rr.innerHTML = "Valor(es) Inválido(os), favor corrigir!";
		
	}
	else{
		calcula();
	}
}







function calcula(){
	for(cont= 1;cont <= tempo;cont++){
		saldo = capital*Math.pow(1+(juros/100),cont);
		acumulo = document.getElementById("pelotempo");
		var rep = saldo.toFixed(3);
		acumulo.innerHTML += "Capital durante o "+cont+"°" +"Mês é: "+rep+ "<br>";
		document.body.appendChild(acumulo);
	}

	saldo = capital*Math.pow(1+(juros/100),tempo);
	var r = document.getElementById("resultado");
	r.innerHTML = "Seu Saldo:" + rep;

}
init();//Chamar a budega da função 


/*Primeiro Erro, as informações utilizadas na estrutura de repetição estão se sobrepond;
  Segundo Erro, a estruturação do IF e do Else Estava incorreto*/

