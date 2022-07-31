/* Autores: Abner, Allan e Elder.
   Versão: 1.2.
   Data: 25/07/2022.
   Descrição: Utilizar Vetores e Sistema de Matrizes 
   para organizar e estruturar uma tabela via Java Script. */


// Defina o dia inicial e final da tabela:
const diaInicio = 1
const diaFinal = 31

const diaTotais = diaFinal - diaInicio + 1

// Defina a hora inicial e final da tabela:
const horaInicio = 7
const horaFinal = 22

const horaTotais = (horaFinal - horaInicio) * 2 + 1


// Criação da Tabela pelos Vetores-----------
function vetor() {
    var numHoras = horaInicio;  // Auxilia a verificar o vetor hora, funciona apenas no corpo da tabela;
    var horaCabe = horaInicio;  // Define as horas somente do cabeçario;
    var dias = diaInicio;  // Auxilia a verificar o vetor dia, funciona apenas no corpo da tabela;
    var diaMes = diaInicio;  // Define os dias somente na primeira coluna de cada linha do corpo;
    var auxCabecario = 0;  // Repetir e sair do while de criação do cabeçario;
    var auxCorpo = 0;  // Serve para verificar todos vetores, tambem para repetir e sair do while de verificação
    
    var saida = false; // Ir pro While Atraves do Flag 

    var apaga = ""
    document.querySelector('.cabeca').innerHTML = apaga
    document.querySelector('.corpo').innerHTML = apaga
    while (auxCabecario <= horaTotais - 1) { /* WHILE DE CRIAÇÃO DO CABEÇARIO */
        var colunasCabe = document.createElement('th');
        var cabeca = document.querySelector('.cabeca');
        colunasCabe.classList.add('vejaHora')
        if(auxCabecario == 0){
            colunasCabe.textContent = "Hora/" + "\n" + "Dia"
        }else{
            colunasCabe.textContent = Number.isInteger(horaCabe) == true ? horaCabe + ":00" : horaCabe - 0.5 + ":30"
            horaCabe += 0.5
        }
        cabeca.appendChild(colunasCabe);
        auxCabecario++
    }     
    // Utilização de Matrix para Criação de Colunas e Linhas, cria corpo
    for (var linha = 0; linha < diaTotais; linha++) { 
        var corpo = document.querySelector('.corpo');
        var linhaCorpo = document.createElement('tr'); // Cria linhas

        for (var coluna = 0; coluna < horaTotais; coluna++) {
            var colunasCorpo = document.createElement('td'); // Cria colunas
            if (coluna == 0) {
                var colunasCorpo = document.createElement('th');
                colunasCorpo.textContent = diaMes;
                diaMes++;
                colunasCorpo.classList.add("thead");
            } else {
                auxCorpo = 0;     /* Reset Para o Laço While */
                while (saida == false && auxCorpo < vetDia.length) { /* WHILE DE VERIFICAÇÃO DO VETOR */
                    if (vetHora[auxCorpo] == numHoras) { /* Verificação das Horas */
                        if (dias == vetDia[auxCorpo]) { /* Verificação dos Dias */
                            var divFantasma = document.createElement('div')
                            divFantasma.textContent = vetNome[auxCorpo] + " " + vetSobrenome[auxCorpo] + " - " + vetServico[auxCorpo];
                            divFantasma.classList.add("cor");
                            colunasCorpo.appendChild(divFantasma)
                            colunasCorpo.classList.add("cor");
                            saida = true;

                            switch (vetServico[auxCorpo]) { /* Verificação de Serviço */

                                case "Lavagem completa":
                                    colunasCorpo.colSpan = 2;
                                    coluna++;
                                    numHoras += 0.5;
                                    break;
                                case "Lavagem externa com polimento":
                                    colunasCorpo.colSpan = 2;
                                    coluna++;
                                    numHoras += 0.5;
                                    break;
                                case "Lavagem completa com polimento":
                                    colunasCorpo.colSpan = 3;
                                    coluna += 2;
                                    numHoras++;
                                    break;
                            }
                        } else {
                            auxCorpo++; /* Caso Não Encontre o Dia ele Soma */
                        }
                    } else { /* Caso ele não Encontre a Hora ele Soma */
                        auxCorpo++;
                        colunasCorpo.classList.add("cor2");
                    }
                }
                numHoras += 0.5;
                saida = false; /* Voltar pro While Atraves do Flag */
            }
            linhaCorpo.appendChild(colunasCorpo) /* Adicionando Coluna Dentro da Linha */
        }
        numHoras = 7;   /* Resetar Hora Sempre  que Trocar a Linha */
        dias++;  /* Soma um Dia a cada Linha - Ex: Dia 1, Dia 2 Etc ... */
        corpo.appendChild(linhaCorpo); /* Adicionando Linhas e Colunas na Tabela */
    }
}
btBonito.addEventListener("click", agendar)
btBonito.addEventListener("click", vetor)









