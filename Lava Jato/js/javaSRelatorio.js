var inData = document.getElementById("inData")
var btProcurar = document.getElementById("btProcurar")
var outSaida = document.getElementById("autSaida");
var saida2 = false;

function relatorio() {
    var data = Number(inData.value);
    var hora;
    var saida = ""
    var finalServico = 0
    var tempTotalServ = 0
    if (inData.value == "" || data <= 0 || data > 32 || data != Math.floor(data)) {
        outSaida.textContent = "Os dados inseridos no campo dia estão invalidos"
    } else {

        for (var aux = 0; aux < vetDia.length; aux++) {

                    if (vetDia[aux] == data) {
                        hora = Number.isInteger(vetHora[aux]) == true? vetHora[aux] + ":00" : vetHora[aux] - 0.5 + ":30"
                        
                        switch (vetServico[aux]) {
                            
                            case "Lavagem interna":
                                finalServico = vetHora[aux] + 0.5

                            case "Lavagem externa com polimento":
                                finalServico = vetHora[aux] + 1
                                break
                            case "Lavagem externa":
                                finalServico = vetHora[aux]+ 0.5
                                break
                            case "Lavagem completa com polimento":
                                finalServico = vetHora[aux] + 1.5
                                break
                            case "Lavagem completa":
                                finalServico = vetHora[aux] + 1
                                break
                        }
                        tempTotalServ= Number.isInteger(finalServico) == true? finalServico + ":00" : finalServico - 0.5 + ":30"
                        
                    saida2 = true;
                    saida += "\n" + " - De " + hora + " até as " + tempTotalServ + ": \n" + " O(A) senhor(a) " + vetNome[aux] + " " + vetSobrenome[aux] + "\n marcou uma " + vetServico[aux] + "\n";
            }
        }
        if (saida2 == true) {
            outSaida.textContent = saida;
        } else {
            outSaida.textContent = "Não tem serviço para o dia " + data;
        }
    }

}
btProcurar.addEventListener("click", relatorio)