var vetNome = ['Aline', 'Ana Julia', 'Emanuelle', 'Gabriela', 'Larissa', 'Maiane', 'Maria Salete', 'Mariana', 'Mariene', 'Marisol', 'Patricia', 'Sandra', 'Thais Natalia de Sousa', 'vanessa', 'Isabela', 'Aline Mirielle', 'Ana', 'Andrea Aparecida Severino', 'Andreza', 'Any Caroliny de Almeida dos', 'Celi', 'Erica', 'Helenita Aparecida', 'Juliana', 'Samantha', 'Sheila', 'Sueli', 'Thais', 'Viviane', 'Viviane', 'Eduardo', 'Erica', 'Inês', 'Ione', 'Karoline', 'LEILA REGINA', 'Luciana', 'Maria Margarida', 'Maria Salete', 'Silvana', 'ZEZELINA', 'Jhenifer', 'Michele', 'LUCIMARA', 'Argemira', 'Amanda', 'André', 'Andressa Cristina', 'Juliana Moreira', 'Maria Assunção', 'Naiara Daiane', 'Paula', 'Regina', 'Sabrina', 'Sara', 'Valdira', 'JUSSARA VIEIRA', 'Jéssica', 'Patricia Donizete Alves', 'Alessandra', 'Adriana Cristina Nascimento', 'Ana Cristina', 'Crelia Fátima', 'Cristina Eiko', 'Eduardo', 'Fabiana', 'Gabriel', 'Gislene', 'Ione', 'Márcia Aristeu', 'Maria José', 'Mauricio', 'Raquel', 'Rebeca', 'Yasmin', 'Marcelo', 'BRUNO', 'Celia', 'elsa', 'Jaqueli', 'LEILA REGINA', 'Leticia', 'Mauricio', 'Miriam Andrade', 'Naira Letícia L F', 'Patrícia de Fátima', 'Raquel Iara Franco da Silva', 'Tatiana', 'stefany de moraes ruano', 'Livia', 'Rafaela', 'Aline', 'Debora', 'Ederson oliveira', 'Elisabete', 'Ellen', 'Gisele Regiane da Silva', 'Karina da silva souza', 'Nivea', 'Roberta', 'Rodrigo', 'Samantha', 'Viviane', 'WAGNER', 'Lalesca', 'giovanni'];

var vetSobrenome = ['Cardoso', 'Alves', 'Oliveira Figueiredo', 'Barbosa', 'Souza do Nascimento', 'Costa Souza', 'Gerevini', 'Queiroz', 'Xavier Veiga da Silva', 'Francisco', 'RIBEIRO', 'Gouveia', 'Gomes', 'oliveira', 'Oliveira lotito', 'Santos', 'Bianca', 'Fernandes', 'Torres de Melo', 'Santos', 'Jesus', 'Favaretto', 'Barbosa', 'Fernandes dos Santos Almeida', 'Tabatha da costa', 'Santos', 'Hernandes da Costa', 'Souza Maciel', 'Aparecida da Silva', 'De paula ferreira cardoso', 'Florindo dos santos', 'Favaretto', 'do Carmo Luiz', 'Lopes', 'Rodrigues Kurosaki', 'FREIRE DA SILVA', 'Franco Varela', 'de Souza Santos', 'Gerevini', 'Candido', 'ALDANA Tarifa', 'Beatriz nunes pedro', 'da silva cardoso', 'DAMASCENO BARROS', 'Dos santos machado', 'Lisboa Cavalcante Novaes', 'Demeter', 'Silva Zanin', 'Santos', 'Sales de Jesus', 'da Costa Cabral Gomes', 'De godoy', 'Camargo do espírito santo', 'Reginaldo de Sá Oliveira', 'Tozatti', 'dos santos de lima', 'DE ANDRADE', 'Alana correa', 'De Mello', 'Ap. De Souza Melo Miranda', 'Hofmann', 'Oliveira Teles Costa', 'Souza', 'Sakai', 'Florindo dos santos', 'da Conceição Santos', 'Mauricio', 'Lugoboni', 'Lopes', 'Ferraz', 'De Jesus Oliveira', 'Dias', 'Aires Manfré', 'Conceição Santos', 'Neres de Oliveira', 'Siqueira', 'DOS SANTOS OLIVEIRA', 'Regina Maciel', 'peres da silva', 'Franciele', 'FREIRE DA SILVA', 'Vidal', 'Dias', 'Silva', 'Gomes', 'Rocha Rodrigues', 'Franco', 'Camargo', 'ruano', 'Santos', 'Schneider', 'Ligramante', 'Ribeiro Bento', 'Camargo Alves', 'Fernandes da Silva', 'Brito', 'Silva', 'Souza', 'Lopes Ananias', 'Moraes Marinho', 'Beppe Lage', 'Tabatha da costa', 'Aparecida da Silva', 'TEODORO DOS SANTOS', 'Eduardo', 'da silva cardoso'];

var vetDia = [5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 13, 12, 12, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19];


var vetHora = [7, 8, 9, 10, 11, 13, 14, 16, 17, 7, 8, 10, 12, 13, 15, 16, 7, 8, 9, 10, 11, 13, 15, 16, 7, 9, 10, 12, 13, 8, 9, 11, 12, 14, 15, 17, 7, 8, 9, 11, 12, 14, 16, 17, 18, 20, 21, 7, 8, 10, 11, 13, 14, 16, 18, 19, 7, 8, 9, 11, 7, 8, 10, 11, 13, 15, 16, 18, 19, 20, 51, 17, 8, 9, 11, 13, 14, 7, 8, 10, 11, 12, 14, 16, 17, 8, 10, 11, 12, 13, 14, 7, 9, 10, 11, 13, 15, 16, 18, 8, 10, 12, 14, 16, 18, 20];

var vetServico = ['Lavagem completa', 'Lavagem completa', 'Lavagem completa com polimento', 'Lavagem externa com polimento', 'Lavagem completa', 'Lavagem completa com polimento', 'Lavagem completa', 'Lavagem externa com polimento', 'Lavagem completa', 'Lavagem completa', 'Lavagem completa', 'Lavagem externa com polimento', 'Lavagem externa com polimento', 'Lavagem externa com polimento', 'Lavagem externa com polimento', 'Lavagem externa com polimento', 'Lavagem externa com polimento', 'Lavagem interna', 'Lavagem externa com polimento', 'Lavagem externa', 'Lavagem completa com polimento', 'Lavagem interna', 'Lavagem completa com polimento', 'Lavagem externa com polimento', 'Lavagem interna', 'Lavagem interna', 'Lavagem externa com polimento', 'Lavagem interna', 'Lavagem completa', 'Lavagem externa', 'Lavagem externa com polimento', 'Lavagem externa', 'Lavagem externa com polimento', 'Lavagem externa', 'Lavagem completa', 'Lavagem externa', 'Lavagem completa', 'Lavagem interna', 'Lavagem externa com polimento', 'Lavagem externa', 'Lavagem completa com polimento', 'Lavagem completa com polimento', 'Lavagem interna', 'Lavagem completa', 'Lavagem completa', 'Lavagem interna', 'Lavagem completa com polimento', 'Lavagem completa', 'Lavagem externa', 'Lavagem externa', 'Lavagem externa com polimento', 'Lavagem externa com polimento', 'Lavagem interna', 'Lavagem completa com polimento', 'Lavagem completa', 'Lavagem interna', 'Lavagem completa com polimento', 'Lavagem interna', 'Lavagem externa com polimento', 'Lavagem completa', 'Lavagem externa com polimento', 'Lavagem externa com polimento', 'Lavagem completa', 'Lavagem completa', 'Lavagem completa', 'Lavagem interna', 'Lavagem externa com polimento', 'Lavagem completa com polimento', 'Lavagem interna', 'Lavagem completa', 'Lavagem externa com polimento', 'Lavagem externa com polimento', 'Lavagem completa com polimento', 'Lavagem completa', 'Lavagem externa com polimento', 'Lavagem interna', 'Lavagem completa com polimento', 'Lavagem externa com polimento', 'Lavagem completa com polimento', 'Lavagem externa com polimento', 'Lavagem interna', 'Lavagem externa com polimento', 'Lavagem completa com polimento', 'Lavagem completa', 'Lavagem externa', 'Lavagem completa com polimento', 'Lavagem interna', 'Lavagem externa com polimento', 'Lavagem completa', 'Lavagem interna', 'Lavagem completa', 'Lavagem completa', 'Lavagem externa com polimento', 'Lavagem interna', 'Lavagem externa com polimento', 'Lavagem externa com polimento', 'Lavagem completa com polimento', 'Lavagem externa com polimento', 'Lavagem completa com polimento', 'Lavagem externa', 'Lavagem externa', 'Lavagem completa com polimento', 'Lavagem completa com polimento', 'Lavagem interna', 'Lavagem interna', 'Lavagem externa com polimento'];
