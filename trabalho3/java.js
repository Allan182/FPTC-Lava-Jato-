var inData = document.getElementById("inData")
var btProcurar = document.getElementById("btProcurar")
var autSaida = document.getElementById("autSaida");

function relatorio() {
    var data = inData.value
    var saida = "No dia " + data + "/08/2022" + " á estas horas marcados: "
    var aux = 0
    while (aux < vetDia.length) {
        if (vetDia[aux] == data) {
                
                saida+= "Ás " + vetHora[aux] + " tem uma " + vetServico[aux] + "\n" ; 
                aux++
        } else {
            aux++;
        }
    }
 autSaida.textContent = saida
}
btProcurar.addEventListener("click", relatorio)