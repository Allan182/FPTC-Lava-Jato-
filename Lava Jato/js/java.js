var numHoras = 7;
var horaCabe = 7;
var numMin = 30;
var intervalo = -1;
var trocadora = 1;
var aux = 0;
var dias = 1;
var diaMes = 1;
var aux2 = 0;
var saida = true;

function vetor() {
    while (aux2 <= 30) {
        var colunasCabe = document.createElement('th');
        var cabeca = document.querySelector('.cabeca');
        numMin = (numMin - 30) * (-1);
        colunasCabe.textContent = horaCabe + ":" + (numMin == 0 ? numMin + "0" : numMin);
        horaCabe = horaCabe + 1 + (intervalo);
        intervalo = intervalo + 1 * (trocadora);
        trocadora = trocadora * (-1);
        cabeca.appendChild(colunasCabe);
        aux2++
    }
    for (var linha = 0; linha < 20; linha++) {
        var corpo = document.querySelector('.corpo');
        var linhaCorpo = document.createElement('tr');


        for (var coluna = 0; coluna < 32; coluna++) {
            var colunasCorpo = document.createElement('td');
            if (coluna == 0) {
                var colunasCorpo = document.createElement('th');
                colunasCorpo.textContent = diaMes + "/Ago";
                diaMes++;
                colunasCorpo.classList.add("thead");
            } else {
                while (saida == true && aux < vetDia.length) {
                    if (vetHora[aux] == numHoras) {
                        if (dias == vetDia[aux]) {
                            colunasCorpo.classList.add("cor");
                            colunasCorpo.textContent = vetNome[aux] + " " + vetSobrenome[aux];
                            saida = false;
                            if (vetServico[aux] == "Lavagem completa") {
                                colunasCorpo.colSpan = 2;
                                coluna++;
                                numHoras += 30;
                                if (numHoras >= 60) {
                                    numHoras -= 60;
                                    numHoras++;
                                }
                            } else if (vetServico[aux] == "Lavagem externa com polimento") {
                                colunasCorpo.colSpan = 2;
                                coluna++;
                                numHoras += 30;
                                if (numHoras >= 60) {
                                    numHoras -= 60;
                                    numHoras++;
                                }
                            } else if (vetServico[aux] == "Lavagem completa com polimento") {
                                colunasCorpo.colSpan = 3;
                                coluna += 2;
                                numHoras += 60;
                                if (numHoras >= 60) {
                                    numHoras -= 60;
                                    numHoras++;
                                }
                            }
                        } else {
                            aux++;
                        }
                    } else {
                        aux++;
                        colunasCorpo.classList.add("cor2");
                    }
                }
                aux = 0;
                numHoras += 30;
                if (numHoras >= 60) {
                    numHoras -= 60;
                    numHoras++;
                }
                saida = true;
            }
            linhaCorpo.appendChild(colunasCorpo)
        }
        numHoras = 7;
        dias++;
        corpo.appendChild(linhaCorpo);
    }
    numHoras = 7;
    horaCabe = 7;
    numMin = 30;
    intervalo = -1;
    trocadora = 1;
    aux = 0;
    dias = 1;
    diaMes = 1;
    saida = true;
}


