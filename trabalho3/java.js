var inData = document.getElementById("inData")
var btProcurar = document.getElementById("btProcurar")
var outSaida = document.getElementById("autSaida");
var saida2 = true;
function relatorio() {
    var data = Number(inData.value);
    var saida = "No dia " + data + "/08/2022" + " á estas horas marcados:" + "\n"

    if (inData.value == "" || data <= 0 || data > 20 || data != Math.floor(data)) {
        alert("Os Dados Inseridos no Campo Dia Estão Invalidos!!!")
    } else {

        for (var aux = 0; aux < vetDia.length; aux++) {
            switch (vetServico[aux]) {
                case "Lavagem interna":
                case "Lavagem externa com polimento":
                case "Lavagem externa":
                case "Lavagem completa com polimento":
                case "Lavagem completa":
                    if (vetDia[aux] == data) {
                        saida += "\n" + "As " + vetHora[aux] + " tem uma " + vetServico[aux] + "\n";
                    }
                    break
                default:
                    saida = "No dia " + data + "/08/2022" + " á estas horas marcados: Não tem"
            }


            outSaida.textContent = saida;
        }
    }
}
btProcurar.addEventListener("click", relatorio)