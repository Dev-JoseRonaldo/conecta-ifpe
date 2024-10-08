
# Conecta IFPE

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![Status](https://img.shields.io/badge/PRs-Welcome-accepting.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/IF977/if977-project-standards.svg)](https://github.com/Dev-JoseRonaldo/conecta-ifpe/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/IF977/if977-project-standards.svg)](https://github.com/Dev-JoseRonaldo/conecta-ifpe/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

## 📋 Descrição

O projeto consiste no desenvolvimento de um sistema integrado para a gestão financeira do programa de assistência estudantil de alunos do Instituto Federal de Pernambuco (IFPE), com funcionalidades para auxiliar nesse processo provendo análise de aptidão dos alunos inscritos, acompanhamento de pagamentos de bolsas estudantis e notificações automáticas, conectando alunos, setor financeiro e setor de assistência social em um único sistema. A principal funcionalidade será  a integração entre esses três atores em um sistema que possibilita gerenciar algumas etapas estratégicas do fluxo de assistência estudantil e informar, de forma transparente e acessível a todos os atores, o acompanhamento financeiro relacionado à concessão de bolsas estudantis. Atualmente em torno de 60% a 65% dos alunos do IFPE são identificados como vulneráveis econômicos e sociais. 

Com base nisso, o projeto visa resolvê-los por meio de uma solução que apresente:
- Integração e automação 
- Transparência no processo
- Comunicação entre os atores
- Pré-classificação dois alunos aptos

Com essa abordagem, o projeto se alinha na melhora da experiência dos alunos que necessitam das bolsas e também na eficiência administrativa.

## 🔗 Repositórios e Links complementares:
Atualmente, esse projeto é composto por 4 repositórios, cada um com sua responsabilidade:

- Conecta IFPE - Frontend: É esse repositório, responsável pela interface do usuário e pela documentação geral do projeto.
- [Conecta IFPE - Backend](https://github.com/Dev-JoseRonaldo/conecta-ifpe-backend): API Gateway reponsável pela centralização, controle e monitoramento das requisições. Além de ser responsável pelo gerenciamento de Autenticação e Autorização.
- [Conecta IFPE - Rank IA](https://github.com/luiz-linkezio/conecta-ifpe-rank-IA): Microserviço responsável por fazer o ranqueamento dos alunos com base em dados históricos. 

- [Conecta IFPE - Financeiro](https://github.com/Dev-JoseRonaldo/conecta-ifpe-financeiro): Microserviço responsável por gerar e gerenciar os pagamentos das bolsas estudantis.

Além disso, temos o [Figma](https://www.figma.com/design/Z9I5iAE3OyS2H4aZQQghHS/IFPE---Projeto-Eng.-de-Software?node-id=78-964&t=STRrV4rOjhQWwnQc-1) com o design do projeto.



## ⚡️ Início Rápido

Para iniciar o projeto, siga estes passos:

1. Faça um fork e clone o repositório:

```bash
git clone https://github.com/Dev-JoseRonaldo/conecta-ifpe.git
```

2. Instale as dependências:

```bash
yarn install --frozen-lockfile
```

3. Execute o servidor de desenvolvimento:

```bash
yarn dev
```

4. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

5. Este projeto usa um git hook para garantir [conventional commits](https://github.com/qoomon/git-conventional-commits). Para instalar o git hook, execute o seguinte comando no diretório raiz do projeto:

```sh
brew install pre-commit
pre-commit install -t commit-msg
```

### 💻 Pré-requisitos

Para rodar o projeto você precisará dos seguintes pré-requisitos de instalação:

1. **Node.js**: Certifique-se de ter a [versão mais recente do Node.js](https://nodejs.org/) instalada, preferencialmente LTS, pois muitas dessas ferramentas dependem do ambiente Node.js para funcionar.

2. **NPM ou Yarn**: Gerenciadores de pacotes como [NPM](https://www.npmjs.com/) (vem com o Node.js) ou [Yarn](https://yarnpkg.com/) são necessários para instalar as dependências do projeto.

3. **Git**: Para gerenciar o controle de versão, clonar repositórios e utilizar GitHub Actions, é necessário ter o [Git](https://git-scm.com/) instalado.

4. **Docker (opcional, mas recomendado)**: Se você for usar Kubernetes, o [Docker](https://www.docker.com/) será útil para criar e gerenciar contêineres durante o desenvolvimento e teste.

## 📜 Documentação

Toda a documentação necessária para o projeto, incluindo guias de instalação, configuração, e uso das ferramentas, pode ser encontrada na pasta [docs](/docs/) localizada na raiz do projeto. Certifique-se de revisar esses documentos para obter orientações detalhadas sobre o desenvolvimento e manutenção do projeto.

## 🤝 Como Contribuir

Contribuições são sempre bem-vindas, veja como você pode ajudar:

1. Crie um fork a partir do nosso projeto, isso criará um novo repositório em sua conta.
2. No seu repositório, crie uma branch a partir da branch `main`, esta branch deve ser nomeada de acordo com sua contribuição.
3. Faça suas contribuições nesta branch.
4. Abra um Pull Request do seu repositório para o nosso, enviando esta branch com sua contribuição, a branch de destino deve ser a `main`.

### Diretrizes de Contribuição

Leia através do [CONTRIBUTING](CONTRIBUTING.md)

## 🚨 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🌱 Estado do Projeto

Este projeto está em desenvolvimento ativo. Você pode esperar mudanças frequentes e atualizações.

## 💼 Créditos
<br>

| [<img src="https://github.com/luiz-linkezio.png" width=115><br><sub>Luiz Henrique</sub><br>](https://github.com/luiz-linkezio) <sub>AI Engineer / Pentester</sub><br> <sub>[Linkedin](https://www.linkedin.com/in/luiz-henrique-brito-4065761b0/)</sub><br> | [<img src="https://github.com/dev-joseronaldo.png" width=115><br><sub>José Ronaldo</sub><br>](https://github.com/Dev-JoseRonaldo) <sub>FullStack Developer</sub><br> <sub>[Linkedin](https://www.linkedin.com/in/josé-ronaldo-973a26236)</sub><br> | [<img src="https://github.com/karenvcsa.png" width=115><br><sub>Karen Verçosa</sub><br>](https://github.com/karenvcsa) <sub>UI/UX Design</sub><br> <sub>[Linkedin](https://www.linkedin.com/in/karenvcsa/)</sub><br> | [<img src="https://github.com/vitoriabtriz.png" width=115><br><sub>Vitória Beatriz</sub><br>](https://github.com/vitoriabtriz) <sub>UI/UX Design</sub><br> <sub>[Linkedin](https://www.linkedin.com/in/vitoriabtriz/)</sub><br> |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
---

<br>

## 📷 Screenshots

![Login](/.github/images/screenshot-1.png)
![Cadastro](/.github/images/screenshot-2.png)
![Cadastro Aluno](/.github/images/screenshot-3.png)
![Pagamentos](/.github/images/screenshot-4.png)
![Inscrições](/.github/images/screenshot-5.png)
![Aluno](/.github/images/screenshot-6.png)
![Financeiro](/.github/images/screenshot-7.png)