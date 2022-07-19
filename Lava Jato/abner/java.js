
/*var autSaida = document.getElementById("autSaida")



var numHoras = 7 // essa variavel serve pra identicar se tem esse mesma hora dentro do vetHora
var numHora = 7 // essa variavel serve apenas para definir os horarios na tabela
var numMin = 30 // essa variavel define se é meia hora ou não, ela fica trocando de 30 pra 0 e de 0 pra 30
var intervalo = -1 // essa variavel
var trocadora = 1 // essa variavel
var aux = 0 // essa variavel e acumuladora, serve como o poc(var abaixo) so que para a tabela
var dias = 1 // essa variavel serve pra identicar se tem esse mesmo dia dentro do vetDia
var dia = 1 // essa variavel serve apenas para definir os dias no thead da tabela
var poc = 0 // essa variavel serve para identificar em ordem vetDia e vetHora age apenas pro autSaida e n pra tabela
var saida = true // essa variavel serve apenas para sair do while
function vetor() {



    // Abaixo esta apenas o autSaida para facilitar a revisao da tabela, mostra qual numero do vetDia equivale ao do vetHora
    acumula = "olha :"
    while(poc <= vetDia.length){
        acumula += "//           " + vetDia[poc] +":"+ vetHora[poc]
        poc++
    }


    // inicio do duplo for, o primero - que esta logo abaixo - cria a quantidade de linhas
    for (var linha = 0; linha < 35; linha++) {
        var mae = document.querySelector('.tabela')
        var organiza = document.createElement('tr') // cria linha



        // Toda vez que o for reseta, criase um novo elemento no thead, o if abaixo cria somente o cabeçario da tabela - Dia e mes-
        if (dia <= 30) {
            var organiza3 = document.createElement('th')
            var pai = document.querySelector('.titulo')

            organiza3.textContent = dia + "/Ago"
            dia++

        }




        // Sengundo for, responsavel para criar as colunas
        for (var coluna = 0; coluna < 31; coluna++) {
            var organiza2 = document.createElement('td') // cria coluna


            pai.appendChild(organiza3)

            if (coluna == 0) { // Esse if quando verdadeiro cria a parte dos horarios, ele so e verdadeiro para a primeira linha de cada coluna
                numMin = (numMin - 30) * (-1)
                organiza2.textContent = numHora + ":" + (numMin == 0 ? numMin + "0" : numMin)
                numHora = numHora + 1 + (intervalo)
                intervalo = intervalo + 1 * (trocadora)
                trocadora = trocadora * (-1)
                organiza2.classList.add("thead")
                
            }else{ // Quando falso, uma serie de anilises sao feitas repetidamente
                while(saida == true && aux < vetDia.length){ 
                    if (dias == vetDia[aux]) { // Aqui indentifica se o dias posiveis (1, 2, ..., 30) se encontra no vetDia
                        
                        if(vetHora[aux] == numHoras){ // Caso o dia do mes esteja no vetDia, pegase o seu equivalento no vetHora e compara se ele equivale ao primeiro horario do dia que no caso e 7
                            organiza2.classList.add("cor")
                            saida = false // caso o if seja verdadeiro tem que sair da repetição e pintar a celula
                            

                        }else { // se for falso, repita esse while checando todas as posiçoes de vetDia ate entra de novo no primero if acima caso seja falso volta a checar em uma posição diferente
                            aux++

        
                        }
                           
                    } else { // se for falso, repita esse while checando todas as posiçoes de vetDia, se não encontrar sai sem fazer nenhuma alteração
                        aux++
    
                    }
                }
                aux = 0
                dias++
                saida = true

            }
            
            
            organiza.appendChild(organiza2)
            mae.appendChild(organiza)
        }
        if(numMin == 30){
        dias = 1
        aux = 0
        numHoras++

        }
        
        
    }
    autSaida.textContent = acumula // apenas o autsaida
    
}*/

var numHoras = 7 // essa variavel serve pra identicar se tem esse mesma hora dentro do vetHora
var numHora = 7 // essa variavel serve apenas para definir os horarios na tabela
var numMin = 30 // essa variavel define se é meia hora ou não, ela fica trocando de 30 pra 0 e de 0 pra 30
var intervalo = -1 // essa variavel
var trocadora = 1 // essa variavel
var aux = 0 // essa variavel e acumuladora, serve como o poc(var abaixo) so que para a tabela
var dias = 1 // essa variavel serve pra identicar se tem esse mesmo dia dentro do vetDia
var dia = 1 // essa variavel serve apenas para definir os dias no thead da tabela
var poc = 0 // essa variavel serve para identificar em ordem vetDia e vetHora age apenas pro autSaida e n pra tabela
var saida = true // essa variavel serve apenas para sair do while
var pinta = false
var pinta2 = false
var pintaa = 0

function vetor() {
    var rept = 0

    acumula = "olha :"
    while (poc <= vetDia.length) {
        acumula += "//           " + vetDia[poc] + ":" + vetHora[poc]
        poc++
    }

    while (rept <= 30) {
        var organiza3 = document.createElement('th')
        var pai = document.querySelector('.titulo')
        numMin = (numMin - 30) * (-1)
        organiza3.textContent = numHora + ":" + (numMin == 0 ? numMin + "0" : numMin)
        numHora = numHora + 1 + (intervalo)
        intervalo = intervalo + 1 * (trocadora)
        trocadora = trocadora * (-1)
        pai.appendChild(organiza3)
        rept++

    }


    for (var linha = 0; linha < 30; linha++) {
        var mae = document.querySelector('.tabela')
        var organiza = document.createElement('tr') // cria linha
        for (var coluna = 0; coluna < 32; coluna++) {
            var organiza2 = document.createElement('td')
            if (coluna == 0) {
                var organiza2 = document.createElement('th')

                organiza2.textContent = dia + "/Ago"
                dia++
                organiza2.classList.add("thead")

            } else {
                while (saida == true && aux < vetDia.length) {
                    if (vetHora[aux] == numHoras) {
                        if (dias == vetDia[aux]) {
                            organiza2.classList.add("cor")
                            organiza2.textContent = vetNome[aux]
                            saida = false
                            if (vetServico[aux] == "Lavagem completa") {
                                organiza2.colSpan = 2;
                                coluna++;
                                numHoras += 30
                                if (numHoras >= 60) {
                                    numHoras -= 60
                                    numHoras++
                                }
                            } else if (vetServico[aux] == "Lavagem externa com polimento") {
                                organiza2.colSpan = 2;
                                coluna++;
                                numHoras += 30
                                if (numHoras >= 60) {
                                    numHoras -= 60
                                    numHoras++
                                }
                            } else if (vetServico[aux] == "Lavagem completa com polimento") {
                                organiza2.colSpan = 3;
                                coluna += 2;
                                numHoras += 60
                                if (numHoras >= 60) {
                                    numHoras -= 60
                                    numHoras++
                                }
                            }
                        } else {
                            aux++
                        }
                    } else {
                        aux++
                        organiza2.classList.add("cor2")
                    }

                }
                aux = 0
                numHoras += 30
                if (numHoras >= 60) {
                    numHoras -= 60
                    numHoras++
                }

                saida = true
            }
            organiza.appendChild(organiza2)
        }

        numHoras = 7
        dias++
        mae.appendChild(organiza)
    }

    autSaida.textContent = acumula

}


