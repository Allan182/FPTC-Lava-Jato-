// Conexão html para javaScript
var rdLavIntena = document.getElementById("rdLavIntena");
var rdLavExterna = document.getElementById("rdLavExterna");
var rdLavCompleta = document.getElementById("rdLavCompleta");
var rdLavExPoli = document.getElementById("rdLavExPoli");
var rdLavComPoli = document.getElementById("rdLavComPoli");
var inHora = document.getElementById("inHora");
var inData = document.getElementById("inData");
var inNome = document.getElementById("inNome");
var inSobrenome = document.getElementById("inSobrenome");
var outSaidaTrue = document.getElementById("outSaidaTrue");
var outSaidaFalse = document.getElementById("outSaidaFalse");

function agendar() {
    var LavIntena = rdLavIntena.checked;
    var LavExterna = rdLavExterna.checked;
    var LavCompleta = rdLavCompleta.checked;
    var LavExPoli = rdLavExPoli.checked;
    var LavComPoli = rdLavComPoli.checked;
    var horaFinal = Number(inHora.value);
    var horaInicio = Number(inHora.value);
    var data = Number(inData.value);
    var nome = inNome.value;
    var sobrenome = inSobrenome.value;
    outSaidaTrue.textContent = "";
    outSaidaFalse.textContent = "";
    var agenda = "";
    var valido = false;
    var horaVaga = true;
    var numValido = true;
    var vetPosicao = [];
    
    if(LavComPoli == true){
        if(horaInicio > 20.5){
            numValido = false
        }
    }else if(LavCompleta == true || LavExPoli == true){
        if(horaInicio > 21){
            numValido = false
        }
    }
    if(LavIntena == false && LavExterna == false && LavCompleta == false && LavExPoli == false && LavComPoli == false){
        outSaidaFalse.textContent ="*Selecione o tipo de lavagem";
    }else if(horaInicio == "" || data == "" || data < 1 || data > 31 || horaInicio < 7 || horaInicio > 21.5){
        outSaidaFalse.textContent ="*Preencha os campos de Data/Hora - Dia 1 ate 31, Hora 7:00 ate 21:30";
    }else if(nome == "" || isNaN(nome) == false || sobrenome == "" || isNaN(sobrenome) == false){
        outSaidaFalse.textContent ="*Informe seu Nome/Sobrenome";
    }else{
        if(Number.isInteger(horaInicio) == false){
            if(Number.isInteger(horaInicio - 0.5) == false){
                numValido = false;
            }
        }
        if(numValido == true){
            for(var auxPosicao = 0; auxPosicao <= vetDia.length; auxPosicao++){
                if (vetDia[auxPosicao] == data) {
                    switch(vetServico[auxPosicao]){
                        case "Lavagem completa":
                        case "Lavagem externa com polimento":
                            vetPosicao.push(vetHora[auxPosicao] + 0.5)
                            break
                        case "Lavagem completa com polimento":
                            vetPosicao.push(vetHora[auxPosicao] + 0.5)
                            vetPosicao.push(vetHora[auxPosicao] + 1)
                            break
                    }
                    vetPosicao.push(vetHora[auxPosicao]);
                }
            }
            for(var aux = 0; aux <= vetPosicao.length && valido == false; aux++){
                for(var i=0; i<=vetPosicao.length; i++) {
                    if(vetPosicao[i] == horaFinal) {
                        horaVaga = false;
                    }
                }
                if(horaVaga == true){
                    if(LavIntena == true){
                        valido = true;
                        agenda = "Lavagem interna";
                    }else if(LavExterna == true){
                        valido = true;
                        agenda = "Lavagem externa";
                    }else if(LavCompleta == true){
                        horaFinal+= 0.5;
                        if(horaInicio + 1 == horaFinal){
                            valido = true;
                            agenda = "Lavagem completa";
                        }
                    } else if(LavExPoli == true){
                        horaFinal+= 0.5;
                        if(horaInicio + 1 == horaFinal){
                            valido = true;
                            agenda = "Lavagem externa com polimento";
                        }
                    } else{
                        horaFinal+= 0.5;
                        if(horaInicio + 1.5 == horaFinal){
                            valido = true;
                            agenda = "Lavagem completa com polimento";
                        }
                    }             
                }
            }
            if(valido == true){
                vetNome.push(nome);
                vetSobrenome.push(sobrenome);
                vetDia.push(data);
                vetHora.push(horaInicio);
                vetServico.push(agenda);
                outSaidaTrue.textContent = "Agendado com sucesso!"
            }else{
                outSaidaFalse.textContent = "*O Dia/Hora que foi selecionado não esta disponivel para o tipo de lavamgem selecionado, por favor comsulte a tabela abaixo ou os tipos de serviços";
            }
        }else{
            outSaidaFalse.textContent ="*Hora invalida. Permitidos Ex: 7, 7.5, 8, 8.5 ... 21.5 ou excede o horario de funcionamento";
        }
    }
}

