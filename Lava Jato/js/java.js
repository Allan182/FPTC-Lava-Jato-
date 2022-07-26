/* Autores: Abner, Allan e Elder.
   Versão: 1.2.
   Data: 25/07/2022.
   Descrição: Utilizar Vetores e Sistema de Matrizes 
   para organizar e estruturar uma tabela via Java Script. */


function vetor() { /* Criação da Tabela pelos Vetores */

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

    while (aux2 <= 29) { /* Criação de Cabeçalho */
        var colunasCabe = document.createElement('th');
        var cabeca = document.querySelector('.cabeca');
        colunasCabe.classList.add('vejaHora')
        numMin = (numMin - 30) * (-1);
        colunasCabe.textContent = horaCabe + ":" + (numMin == 0 ? numMin + "0" : numMin);
        horaCabe = horaCabe + 1 + (intervalo);
        intervalo = intervalo + 1 * (trocadora);
        trocadora = trocadora * (-1);
        cabeca.appendChild(colunasCabe);
        aux2++
    } for (var linha = 0; linha < 31; linha++) { 

                                /* Utilização de Matrix 
                        para Criação de Colunas e Linhas */

        var corpo = document.querySelector('.corpo');
        var linhaCorpo = document.createElement('tr');


        for (var coluna = 0; coluna < 31; coluna++) {
            var colunasCorpo = document.createElement('td');
            if (coluna == 0) {
                var colunasCorpo = document.createElement('th');
                colunasCorpo.textContent = diaMes;
                diaMes++;
                colunasCorpo.classList.add("thead");
            } else {
                while (saida == true && aux < vetDia.length) { /* Verificação do Vetor */
                    if (vetHora[aux] == numHoras) { /* Verificação das Horas */
                        if (dias == vetDia[aux]) { /* Verificação dos Dias */
                            var divFantasma = document. createElement('div')
                            divFantasma.textContent = vetNome[aux] + " " + vetSobrenome[aux] + " - " + vetServico[aux];
                            divFantasma.classList.add("cor");
                            colunasCorpo.appendChild(divFantasma)
                            colunasCorpo.classList.add("cor");
                            saida = false;
                            switch (vetServico[aux]) { /* Verificação de Serviço */

                                case "Lavagem completa":
                                    colunasCorpo.colSpan = 2;
                                    coluna++;
                                    numHoras += 30;
                                    break;
                                case "Lavagem externa com polimento":
                                    colunasCorpo.colSpan = 2;
                                    coluna++;
                                    numHoras += 30;
                                    break;
                                case "Lavagem completa com polimento":
                                    colunasCorpo.colSpan = 3;
                                    coluna += 2;
                                    numHoras += 60;
                                    break;
                            }
                           
                        } else {
                            aux++; /* Caso Não Encontre o Dia ele Soma */
                        }
                    } else { /* Caso ele não Encontre a Hora ele Soma */
                        aux++;
                        colunasCorpo.classList.add("cor2");
                    }
                }

                aux = 0;     /* Reset Para o Laço While */
                numHoras += 30;/* Reset Para o Laço While */

                if (numHoras >= 60) { /* Transformação Minutos em Horas */
                    numHoras -= 60; /* Transformação Minutos em Horas */
                    numHoras++; 
                }
                saida = true; /* Voltar pro While Atraves do Flag */
            }
            linhaCorpo.appendChild(colunasCorpo) /* Adicionando Colunas Dentro de Linhas */
        }
        numHoras = 7;   /* Resetar Hora Sempre  que Trocar a Linha */
        dias++;  /* Soma um Dia a cada Linha - Ex: Dia 1, Dia 2 Etc ... */
        corpo.appendChild(linhaCorpo); /* Adicionando Linhas e Colunas na Tabela */
    }
}


