
# Project Model Canvas Template para Projetos de Software

## 1. Objetivos e Justificativas
O projeto consiste no desenvolvimento de um sistema integrado para a gestão financeira do programa de assistência estudantil de alunos do IFPE, com funcionalidades para auxiliar nesse processo provendo análise de aptidão dos alunos inscritos, acompanhamento de pagamentos de bolsas estudantis e notificações automáticas, conectando alunos, setor financeiro e setor de assistência social em um único sistema. A principal funcionalidade será  a integração entre esses três atores em um sistema que possibilita gerenciar algumas etapas estratégicas do fluxo de assistência estudantil e informar, de forma transparente e acessível a todos os atores, o acompanhamento financeiro relacionado à concessão de bolsas estudantis.
 
Atualmente em torno de 60% a 65% dos alunos do IFPE são identificados como vulneráveis econômicos e sociais. O processo atual é manual e demorado, o que pode atrasar a concessão de bolsas aos alunos que mais necessitam, gerando evasão desses alunos. No processo atual há, basicamente, problemas como a falta de transparência e comunicação eficiente, assim como a presença de processos manuais que são mais propensos a erros e respostas lentas a problemas de pagamento. Com base nisso, o projeto visa resolvê-los por meio de uma solução que apresente:
 
Integração e automação: integrar o sistema com os que existem, automatizando a coleta e atualização de informações sobre alunos e editais, garantindo a precisão e atualização de dados.
 
Transparência: O sistema permitirá que os alunos observem facilmente a aptidão para receber bolsas, acompanhem previsões dos pagamentos e confirmem recebimentos por meio de uma plataforma que seja amigável.
 
Comunicação: O projeto fornecerá um sistema de notificações constantes entre os atores que os informe sobre as previsões de pagamentos e confirmações, além de alertar a assistência social e setor financeiro sobre problemas de pagamento, permitindo respostas mais rápidas e proativas.

Pré-classificação dois alunos aptos: O projeto usará  inteligência artificial para fazer uma pré-seleção dos alunos que possivelmente estão aptos, com base em suas respostas no formulário de inscrição e em dados históricos de alunos aptos, agilizando o processo de avaliação das inscrições feito pela a assistência social.
 
Com essa abordagem, o projeto se alinha na melhora da experiência dos alunos que necessitam das bolsas e também na eficiência administrativa.


## 2. Requisitos Principais
- O sistema deve permitir que alunos, pessoas do setor financeiro e pessoas do setor de assistência estudantil façam login na plataforma;
- O sistema deve fornecer uma interface intuitiva e personalizada para cada tipo de usuário, considerando suas necessidades;
- O sistema deve permitir que as assistentes sociais façam upload dos dados das inscrições para avaliação.
- O sistema deve categorizar e ordenar as inscrições priorizando os alunos mais vulneráveis com base nas respostas do formulário. O algoritmo deve utilizar o campo "relato de vida" como critério de desempate.
- O sistema deve ser flexível para cada campus utilizar seu próprio calendário de inscrições e avaliações.
- O sistema deve permitir a assistente social marcar alunos como aptos ou não aptos e gerar listas de espera (todos os alunos aptos) e pagamento (todos os alunos aptos que foram contemplados com a bolsa).
- O sistema deve permitir exportar a lista de pagamento com os dados dos alunos aptos, incluindo CPF e conta bancária.
- O sistema deve permitir a modificação da lista de pagamento a qualquer momento pelo setor de assistência social.
- O sistema deve permitir ajustes nos valores das bolsas em casos de excedente de alunos aptos.
- O sistema deve enviar notificações automáticas para os alunos sobre o status de suas inscrições e pagamentos.
- O sistema deve enviar notificações para o setor financeiro informando e solicitando o pagamento da lista de pagamento.
- O sistema deve enviar notificações para o setor de assistência estudantil informando o pagamento e enviando o extrato de pagamento.
- Todas as notificações devem ser enviadas diretamente para o ambiente do sistema em que o destinatário tem acesso.
- O sistema deve gerar gráficos e estatísticas para monitoramento da avaliação dos alunos e  do sucesso/fracasso do pagamento das bolsas a partir do extrato de pagamento.
- O sistema deve gerar gráficos e estatísticas do histórico de pagamentos.
- O sistema deve ter uma interface de usuário intuitiva e fácil de usar.
- O sistema deve ser acessível via web por ambos os usuários.


## 3. Stakeholders
### Marco Eugênio:
**Expectativas**:

Espera que a equipe de desenvolvimento compreenda completamente o problema existente e as necessidades dos usuários finais e deseja uma comunicação contínua e clara durante todo o processo de desenvolvimento para garantir validações com a equipe.
Espera que o sistema entregue resolva os problemas identificados de forma eficaz.
Deseja garantir que todas as necessidades da equipe sejam atendidas e que a solução final seja eficiente.

**Responsabilidades**:

Participar ativamente das reuniões de planejamento e fornecer contexto adicional necessário para a compreensão completa do problema.
Fornecer feedback contínuo sobre o progresso do desenvolvimento, ajudando a identificar quaisquer desvios ou problemas, além de validar as funcionalidades entregues pela equipe.

**Impacto**: Por ser o principal stakholder do projeto, terá um impacto direto na eficácia e eficiência do sistema. A solução desenvolvida deve atender às suas expectativas e garantir que os problemas identificados sejam resolvidos de forma eficaz. A comunicação contínua e o feedback fornecido por ele ajudarão a garantir que o sistema atenda às necessidades da equipe e dos usuários finais.

### Assistente Social:
**Expectativas**:

Transparência e clareza nas informações que serão fornecidas pelo sistema, desejando algo que facilite a comunicação com os alunos e a área financeira, especialmente em casos de problemas ou atrasos nos pagamentos.

**Responsabilidades**: 

Será responsável por monitorar de forma regular as notificações e relatórios gerados pelo sistema para identificar e resolver os problemas de forma proativa, informar os alunos sobre status de suas bolsas e quaisquer problemas que possam surgir, oferecendo devido suporte e orientação, além do trabalho colaborativo com a área financeira para a garantia de previsão e eficiência nos processos de pagamento.

**Impacto**:

O impacto maior será de melhoria substancial na eficiência operacional. A automação dos processos de verificação e notificação reduzirá o tempo gasto nas tarefas manuais, permitindo que se concentre também em outras atividades importantes. As integrações com sistemas existentes vai proporcionar um fluxo de informações mais preciso e atualizado, minimizando erros. Notificações vão permitir respostas rápidas e eficientes, capacitando o monitoramento e análise de pagamentos em tempo real, facilitando a identificação de problemas recorrentes e implementação de soluções preventivas.
 
### Alunos: 
**Expectativas**: 

Esperam receber informações claras, precisas e acessíveis sobre a aptidão e status de pagamento de suas bolsas, assim como esperam receber notificações sobre as previsões de pagamento e confirmações de recebimento para planejar finanças pessoais. Esperam resposta rápida da Assistência Social e da área financeira em caso de atrasos ou possíveis problemas no pagamento.

**Responsabilidades**: 

Se atualizar sempre seu status financeiro e acompanhar as notificações do sistema para que esteja sempre atualizado

**Impacto**:

O impacto para os alunos será significativo, visto que o sistema visa proporcionar um acesso que seja transparente e confiável às informações financeiras. Eles vão poder visualizar facilmente se estão aptos para receber bolsas, acompanhar suas previsões de pagamento e confirmar esse recebimento. Essa clareza e precisão reduzirá a incerteza e ansiedade em relação ao recebimento dessas bolsas, enquanto a resolução rápida de problemas financeiros melhora a experiência geral do aluno.

### Equipe de Desenvolvimento
**Expectativas**:

Espera-se que a equipe compreenda profundamente o escopo do projeto, às necessidades dos usuários finais e os problemas identificados para criar uma solução eficaz. é importante que haja uma comunicação contínua e clara com as partes interessadas, incluindo feedback regular para ajustar o desenvolvimento conforme necessário. A equipe também deve garantir que a solução entregue não apenas resolva os problemas identificados, mas também seja intuitiva e fácil de usar para os usuários finais. É importante que a equipe cumpra os prazos estabelecidos e entregue um produto de alta qualidade que funcione de forma confiável em diferentes condições.

**Responsabilidades**:

Desenvolver o sistema de acordo com os requisitos especificados e assegurar que todas as funcionalidades sejam implementadas conforme o planejado. 
Realizar testes rigorosos para garantir que o sistema esteja livre de erros e atenda aos padrões de qualidade. 
Manter comunicação contínua com as partes interessadas para entender suas necessidades e ajustar o desenvolvimento conforme necessário. 
Fornecer suporte técnico e realizar manutenções após o lançamento para resolver quaisquer problemas que possam surgir.

**Impacto**:

O sucesso da equipe de desenvolvimento terá um impacto direto na eficácia e eficiência do sistema. Uma solução bem desenvolvida reduzirá a quantidade de erros e problemas operacionais, melhorará a satisfação dos usuários finais e garantirá que os processos de pagamento e comunicação sejam mais ágeis e precisos.
A implementação eficaz do sistema também pode resultar em economias de tempo e recursos para a Assistência Social e alunos, além de garantir que as expectativas de Marco Eugênio sejam atendidas com precisão.
A capacidade da equipe de responder rapidamente a problemas e ajustar o sistema conforme necessário terá um impacto positivo na manutenção e melhoria contínua do sistema, assegurando que ele permaneça funcional e útil ao longo do tempo.


## 4. Entregas
Os principais entregáveis do projeto serão:

- Software totalmente desenvolvido e funcional, atendendo a todos os requisitos acordados com o cliente;
- Documentação completa do sistema;
- Treinamento para o setor assistentes sociais e setor financeiro;
- Manual do usuário para alunos, Assistentes Sociais e Setor Financeiro.


## 5. Marcos e Cronograma
- **Marco 1 (05/08/2024)**: Levantamento e validação dos requisitos com o cliente.
- **Marco 2 (12/08/2024)**: Entrega e validação de protótipos de alta fidelidade (principais telas) e setup, configurações.
- **Marco 3 (19/08/2024)**:  Revisão e ajustes do protótipo com base no feedback das partes interessadas, design do Sistema, modelagem do banco de dados e casos gerais de testes relacionados às regras de negócio.
- **Marco 4 (26/08/2024)**: Desenvolvimento do módulo de login com diferentes “roles” (Aluno, assistente social, setor financeiro).
- **Marco 5 (02/08/2024)**: Desenvolvimento do módulo de Notificação e do módulo de Upload e envio de listas (Lista de Pagamento, por parte do setor de assistência estudantil, e extrato bancário, por parte do setor financeiro).
- **Marco 6 (09/08/2024)**: Treinamento da inteligência artificial de análise do texto da tabela “relato social” e desenvolvimento dos módulos de visualização de dados e informações nas interfaces dos três tipos de usuários.
- **Marco 7 (23/08/2024)**: Treinamento da inteligência artificial com as outras colunas da tabela e desenvolvimento do módulo de classificação e agrupamento dos alunos inscritos.
- **Marco 8 (30/08/2024)**: Integração das IAs com o sistema no módulo de classificação e agrupamento dos alunos inscritos e ajustes finais.
- **Marco 9 (07/08/2024)**: Entrega da documentação completa do sistema e manual do usuário.


## 6. Riscos e Suposições
### Riscos:
- Falta de disponibilidade do cliente. Para mitigar, pretendemos engajar o cliente a realizar reuniões frequentemente e focar na entrega de valor contínua a cada iteração.

- Falta de engajamento e disponibilidade dos membros da equipe. Para mitigar, pretendemos fazer uma divisão de tarefas alcançáveis e condizente ao nível técnico de cada integrante e levar em consideração a disponibilidade de cada um para o planejamento de cada iteração.

- Resistência dos usuários à mudança. Para mitigar, pretendemos fornecer o treinamento adequado e suporte inicial contínuo verificando e exibindo métricas de resultados obtidos a partir do sistema.

- Problemas de integração com os demais sistemas já existentes. Para mitigar, pretendemos ter uma comunicação contínua com a equipe de TI do IFPE, para obter documentação e procedimentos para essa integração.

- Problemas referentes ao treinamento e desenvolvimento da inteligência artificial no desenvolvimento do módulo de classificação e categorização. Para mitigar, pretendemos ter uma comunicação contínua com pessoas que têm um bom nível técnico sobre o assunto, e o desenvolvimento de MVPs focado nesse módulo o quanto antes.

### Suposições:

- O cliente estará disponível para reuniões regulares e fornecer feedback contínuo durante o desenvolvimento do projeto.

- A equipe de desenvolvimento terá acesso a todos os recursos necessários.

- Os sistemas internos atuais não precisarão sofrer grandes alterações durante o desenvolvimento.


## 7. Orçamento

Considerando o prazo de aproximadamente 9 semanas (05/08/2024 - 07/10/2024) para a entrega do projeto e a disponibilidade média de 9 horas semanais por membro da equipe, o custo total de horas para o projeto será de **486 horas**.

Este valor é obtido com base na contribuição de 6 integrantes, cada um dedicando 9 horas por semana ao longo de 9 semanas.

## 8. Premissas
- A equipe de desenvolvimento terá, ou adquirá em tempo hábil, as habilidades necessárias para completar o projeto. Caso contrário, poderá influenciar diretamente na data em que o projeto será finalizado.

- Todos os membros da equipe de desenvolvimento estarão engajados e terão disponibilidade para participar das reuniões pré-definidas durante todo o processo. Caso contrário, poderá influenciar diretamente na data em que o projeto será finalizado.

- A administração do IFPE disponibilizará dados, arquivos e acessos necessários para a elaboração da solução e desenvolvimento do sistema. Caso contrário, poderá afetar diretamente na ideação da solução, no desenvolvimento e na implantação do sistema.

- Os principais Stakeholders terão disponibilidade para reuniões e validações de entregas e artefatos semanalmente. Caso contrário, poderá gerar um mal entendimento do problema e, consequentemente, no desenvolvimento de um sistema que não atenda suas expectativas.


## 9. Restrições
- O projeto deve ser concluído dentro do prazo estipulado (07/10/2024).

- Possíveis restrições relacionadas à necessidade de integração com sistemas existentes (Qacadêmico, SEI, Fluxo, API externa do governo).

- Conformidade com as políticas e regulamentos do IFPE e do governo federal.

- Os sistemas internos já existentes não podem sofrer grandes alterações.

