# Documentação da API - Conecta IFPE

---

## 1. Propósito e Funcionalidade
**Descrição Geral:**
- **Propósito:** A API "Conecta IFPE" gerencia parte do processo de bolsas estudantis, integrando os sistemas de assistente social e financeiro com o banco de dados e serviços de notificação.
- **Funcionalidade:** A API permite a integração de dados de inscrições, a execução de ranqueamento de candidatos, a criação e gerenciamento de listas de pagamento e lotes de pagamentos, e o envio de notificações para alunos, departamento financeiro e Assistente social.

## 2. Especificação Técnica

**Endpoints e Métodos:**

### 2.1 Listagem de Todos os Usuários
- **URL Base:** `/api/usuarios`.
- **Endpoint:** `/`
- **Método Suportado:** `GET`

**Formato de Dados:**
- **Entrada:** Nenhum parâmetro obrigatório.
- **Saída:** JSON.

**Exemplo de Requisição:**
```http
GET /api/usuarios HTTP/1.1
Host: api.conectaifpe.com
Authorization: Bearer {token}
```

**Exemplo de Resposta:**
```json
[
  {
    "usuario_id": "12345",
    "nome": "João Silva",
    "email": "joao.silva@example.com",
    "role": "aluno",
    "matricula": "20240001",
    "curso": "Engenharia de Software"
  },
  {
    "usuario_id": "67890",
    "nome": "Maria Oliveira",
    "email": "maria.oliveira@example.com",
    "role": "assistente-social",
  },
  {
    "usuario_id": "54321",
    "nome": "Carlos Santos",
    "email": "carlos.santos@example.com",
    "role": "financeiro",
  }
]
```

**Códigos de Resposta e Descrições:**
- **200 OK:** Sucesso.
- **400 Bad Request:** Dados inválidos ou faltando.
- **401 Unauthorized:** Autenticação necessária.
- **404 Not Found:** Recurso não encontrado.
- **500 Internal Server Error:** Erro no servidor.

**Erros Comuns:**
- **Erro 400 - Formato de Arquivo Inválido:** Verifique os dados enviados.
- **Erro 401 - Token Inválido:** Verifique se o token de autenticação está correto.

### 2.2 Aluno
- **URL Base:** `/api/usuarios`.
- **Endpoint:** `/aluno`
- **Método Suportado:** `GET` | `POST` | `PUT` | `DELETE`

**Parâmetros de Requisição:**
- **Corpo da Requisição:**
  - `nome` (Tipo: String, Obrigatório): Nome completo do aluno.
  - `email` (Tipo: String, Obrigatório): Endereço de e-mail do aluno.
  - `senha` (Tipo: String, Obrigatório): Senha para autenticação.
  - `matricula` (Tipo: String, Obrigatório): Número de matrícula do aluno.
  - `curso` (Tipo: String, Opcional): Nome do curso do aluno.

**Formato de Dados:**
- **Entrada:** JSON.
- **Saída:** JSON.

**Exemplo de Requisição:**
```http
POST /api/usuarios/aluno HTTP/1.1
Host: api.conectaifpe.com
Authorization: Bearer {token}
Content-Type: application/json

{
  "nome": "João Silva",
  "email": "joao.silva@example.com",
  "senha": "senha123",
  "matricula": "20240001",
  "curso": "Engenharia de Software"
}

```

**Exemplo de Resposta:**
```json
{
  "message": "Aluno cadastrado com sucesso.",
  "status": "success",
  "usuario_id": "12345"
}

```

**Códigos de Resposta e Descrições:**
- **200 OK:** Sucesso.
- **400 Bad Request:** Dados inválidos ou faltando.
- **401 Unauthorized:** Autenticação necessária.
- **404 Not Found:** Recurso não encontrado.
- **500 Internal Server Error:** Erro no servidor.

**Erros Comuns:**
- **Erro 400 - Formato de Arquivo Inválido:** Verifique os dados enviados.
- **Erro 401 - Token Inválido:** Verifique se o token de autenticação está correto.

### 2.3 Assistente Social
- **URL Base:** `/api/usuarios`.
- **Endpoint:** `/assistente-social`
- **Método Suportado:** `GET` | `POST` | `PUT` | `DELETE`

**Parâmetros de Requisição:**
- **Corpo da Requisição:**
  - `nome` (Tipo: String, Obrigatório): Nome completo do assistente social.
  - `email` (Tipo: String, Obrigatório): Endereço de e-mail do assistente social.
  - `senha` (Tipo: String, Obrigatório): Senha para autenticação.

**Formato de Dados:**
- **Entrada:** JSON.
- **Saída:** JSON.

**Exemplo de Requisição:**
```http
POST /api/usuarios/assistente-social HTTP/1.1
Host: api.conectaifpe.com
Authorization: Bearer {token}
Content-Type: application/json

{
  "nome": "Maria Oliveira",
  "email": "maria.oliveira@example.com",
  "senha": "senha123",
}
```

**Exemplo de Resposta:**
```json
{
  "message": "Assistente social cadastrado com sucesso.",
  "status": "success",
  "usuario_id": "67890"
}
```

**Códigos de Resposta e Descrições:**
- **200 OK:** Sucesso.
- **400 Bad Request:** Dados inválidos ou faltando.
- **401 Unauthorized:** Autenticação necessária.
- **404 Not Found:** Recurso não encontrado.
- **500 Internal Server Error:** Erro no servidor.

**Erros Comuns:**
- **Erro 400 - Formato de Arquivo Inválido:** Verifique os dados enviados.
- **Erro 401 - Token Inválido:** Verifique se o token de autenticação está correto.

### 2.4 Setor Financeiro
- **URL Base:** `/api/usuarios`.
- **Endpoint:** `/financeiro`
- **Método Suportado:** `GET` | `POST` | `PUT` | `DELETE`

**Parâmetros de Requisição:**
- **Corpo da Requisição:**
  - `nome` (Tipo: String, Obrigatório): Nome completo  do membro do setor financeiro.
  - `email` (Tipo: String, Obrigatório): Endereço de e-mail  do membro do setor financeiro.
  - `senha` (Tipo: String, Obrigatório): Senha para autenticação.

**Formato de Dados:**
- **Entrada:** JSON.
- **Saída:** JSON.

**Exemplo de Requisição:**
```http
POST /api/usuarios/financeiro HTTP/1.1
Host: api.conectaifpe.com
Authorization: Bearer {token}
Content-Type: application/json

{
  "nome": "Carlos Santos",
  "email": "carlos.santos@example.com",
  "senha": "senha123",
}

```

**Exemplo de Resposta:**
```json
{
  "message": "Membro do setor financeiro cadastrado com sucesso.",
  "status": "success",
  "usuario_id": "54321"
}
```

**Códigos de Resposta e Descrições:**
- **200 OK:** Sucesso.
- **400 Bad Request:** Dados inválidos ou faltando.
- **401 Unauthorized:** Autenticação necessária.
- **404 Not Found:** Recurso não encontrado.
- **500 Internal Server Error:** Erro no servidor.

**Erros Comuns:**
- **Erro 400 - Formato de Arquivo Inválido:** Verifique os dados enviados.
- **Erro 401 - Token Inválido:** Verifique se o token de autenticação está correto.

### 2.5 Alunos inscritos
- **URL Base:** `/api/inscricao`.
- **Endpoint:** `/upload`
- **Método Suportado:** `POST`

**Parâmetros de Requisição:**
- **Corpo da Requisição:**
  - `file` (Tipo: File, Obrigatório): Arquivo CSV com as informações de inscrição dos alunos.

**Formato de Dados:**
- **Entrada:** CSV.
- **Saída:** JSON.

**Exemplo de Requisição:**
```http
POST /api/inscricao/upload HTTP/1.1
Host: api.conectaifpe.com
Authorization: Bearer {token}
Content-Type: multipart/form-data

Content-Disposition: form-data; name="file"; filename="inscricoes.csv"
Content-Type: text/csv

{conteúdo do arquivo CSV}
```

**Exemplo de Resposta:**
```json
{
  "message": "Inscrições enviadas com sucesso.",
  "status": "success"
}
```

**Códigos de Resposta e Descrições:**
- **200 OK:** Sucesso.
- **400 Bad Request:** Erro no formato do arquivo ou parâmetros faltando.
- **401 Unauthorized:** Autenticação necessária.
- **404 Not Found:** Recurso não encontrado.
- **500 Internal Server Error:** Erro no servidor.

**Erros Comuns:**
- **Erro 400 - Formato de Arquivo Inválido:** O arquivo deve estar no formato CSV.
- **Erro 401 - Token Inválido:** Verifique se o token de autenticação está correto.

### 2.6 Ranqueamento de Alunos
- **URL Base:** `/api/ranqueamento`.
- **Endpoint:** `/executar`
- **Método Suportado:** `POST`

**Parâmetros de Requisição:**
- **Corpo da Requisição:**
  - `file` (Tipo: File, Obrigatório): Arquivo CSV com as respostas dos alunos.

**Formato de Dados:**
- **Entrada:** CSV.
- **Saída:** JSON.

**Exemplo de Requisição:**
```http
POST /api/ranqueamento/executar HTTP/1.1
Host: api.conectaifpe.com
Authorization: Bearer {token}
Content-Type: multipart/form-data

Content-Disposition: form-data; name="file"; filename="respostas.csv"
Content-Type: text/csv

{conteúdo do arquivo CSV}
```

**Exemplo de Resposta:**
```json
{
  "lista_ranqueada": [
    {"aluno_id": "123", "fator_compatibilidade": 0.85},
    {"aluno_id": "456", "fator_compatibilidade": 0.78}
  ],
  "status": "success"
}
```

**Códigos de Resposta e Descrições:**
- **200 OK:** Sucesso.
- **400 Bad Request:** Erro no formato do arquivo ou parâmetros faltando.
- **401 Unauthorized:** Autenticação necessária.
- **404 Not Found:** Recurso não encontrado.
- **500 Internal Server Error:** Erro no servidor.

**Erros Comuns:**
- **Erro 400 - Formato de Arquivo Inválido:** O arquivo deve estar no formato CSV.
- **Erro 401 - Token Inválido:** Verifique se o token de autenticação está correto.

### 2.7 Lista de Pagamento
- **URL Base:** `/api/pagamento`.
- **Endpoint:** `/gerar`
- **Método Suportado:** `POST`

**Parâmetros de Requisição:**
- **Corpo da Requisição:**
  - `lista_pagamento` (Tipo: Array de Objetos, Obrigatório): Lista de alunos contemplados na próxima lista de pagamento mensal.

**Formato de Dados:**
- **Entrada:** JSON.
- **Saída:** JSON.

**Exemplo de Requisição:**
```http
POST /api/pagamento/gerar HTTP/1.1
Host: api.conectaifpe.com
Authorization: Bearer {token}
Content-Type: application/json

{
  "lista_pagamento": [
    {
      "cpf": "987.654.321-00",
      "aluno_id": "113",
      "fator_compatibilidade": 0.92,
      "conta_bancaria": {
        "banco": "Itaú",
        "agencia": "5678",
        "conta": "12345-6"
      },
      "nome": "Maria Oliveira",
      "data_nascimento": "1999-05-22",
      "curso": "Arquitetura",
      "frequencia": "100%",
      "email": "maria.oliveira@example.com",
      "telefone": "(21) 98765-4321"
    }
    {
      "cpf": "456.789.123-00",
      "aluno_id": "114",
      "fator_compatibilidade": 0.90,
      "conta_bancaria": {
        "banco": "Santander",
        "agencia": "4321",
        "conta": "67890-1"
      },
      "nome": "Carlos Santos",
      "data_nascimento": "1998-11-10",
      "curso": "Medicina",
      "frequencia": "95%",
      "email": "carlos.santos@example.com",
      "telefone": "(31) 98765-4321"
    }
  ]
}
```

**Exemplo de Resposta:**
```json
{
  "lista_pagamento": [
    {
      "cpf": "987.654.321-00",
      "aluno_id": "113",
      "fator_compatibilidade": 0.92,
      "conta_bancaria": {
        "banco": "Itaú",
        "agencia": "5678",
        "conta": "12345-6"
      },
      "nome": "Maria Oliveira",
      "data_nascimento": "1999-05-22",
      "curso": "Arquitetura",
      "frequencia": "100%",
      "email": "maria.oliveira@example.com",
      "telefone": "(21) 98765-4321"
    }
    {
      "cpf": "456.789.123-00",
      "aluno_id": "114",
      "fator_compatibilidade": 0.90,
      "conta_bancaria": {
        "banco": "Santander",
        "agencia": "4321",
        "conta": "67890-1"
      },
      "nome": "Carlos Santos",
      "data_nascimento": "1998-11-10",
      "curso": "Medicina",
      "frequencia": "95%",
      "email": "carlos.santos@example.com",
      "telefone": "(31) 98765-4321"
    }
  ],
  "status": "success"
}
```

**Códigos de Resposta e Descrições:**
- **200 OK:** Sucesso.
- **400 Bad Request:** Dados inválidos.
- **401 Unauthorized:** Autenticação necessária.
- **404 Not Found:** Recurso não encontrado.
- **500 Internal Server Error:** Erro no servidor.

**Erros Comuns:**
- **Erro 400 - Formato de Arquivo Inválido:** Verifique o formato e os dados enviados na lista.
- **Erro 401 - Token Inválido:** Verifique se o token de autenticação está correto.

### 2.8 Lote de Pagamento
- **URL Base:** `/api/financeiro`.
- **Endpoint:** `/lotes`
- **Método Suportado:** `POST`

**Parâmetros de Requisição:**
- **Corpo da Requisição:**
  - ano (Tipo: Integer, Obrigatório): Ano do lote de pagamento.
  - mes (Tipo: Integer, Obrigatório): Mês do lote de pagamento (1 a 12).
  - descricao (Tipo: String, Obrigatório): Descrição do lote de pagamento.
  - total (Tipo: Float, Obrigatório): Valor total do lote de pagamento.
  - transacoes (Tipo: Array de Objetos, Obrigatório): Lista de transações incluídas no lote. 
    - Cada transação deve ter:
      - usuario_id (Tipo: String, Obrigatório): ID do usuário que receberá o pagamento.
      - valor (Tipo: Float, Obrigatório): Valor da transação

**Formato de Dados:**
- **Entrada:** JSON.
- **Saída:** JSON.

**Exemplo de Requisição:**
```http
POST /api/financeiro/lotes HTTP/1.1
Host: api.conectaifpe.com
Authorization: Bearer {token}
Content-Type: application/json

{
  "ano": 2024,
  "mes": 9,
  "descricao": "Lote de pagamento referente ao mês de setembro de 2024",
  "total": 400.00,
  "transacoes": [
    {
      "usuario_id": "12345",
      "valor": 200.00
    },
    {
      "usuario_id": "67890",
      "valor": 200.00
    }
  ]
}
```

**Exemplo de Resposta:**
```json
{
  "message": "Lote de pagamento cadastrado com sucesso.",
  "status": "success",
  "lote_id": "98765"
}
```

**Códigos de Resposta e Descrições:**
- **200 OK:** Sucesso.
- **400 Bad Request:** Dados inválidos ou faltando.
- **401 Unauthorized:** Autenticação necessária.
- **404 Not Found:** Recurso não encontrado.
- **500 Internal Server Error:** Erro no servidor.

**Erros Comuns:**
- **Erro 400 - Formato de Arquivo Inválido:** Verifique se todos os campos obrigatórios estão preenchidos e se os dados estão corretos.
- **Erro 401 - Token Inválido:** Verifique se o token de autenticação é válido e não expirou.

## 3. Segurança e Autorização

**Autenticação:**
- **Método:** JWT (JSON Web Tokens)
- **Exemplo de Cabeçalho de Autenticação:**
```http
Authorization: Bearer {token}
```

**Autorização:**
- **Assistente Social**: Pode cadastrar inscrições, executar ranqueamento, e gerar listas de pagamento.
- **Departamento Financeiro**: Pode visualizar e criar lotes de pagamento, e enviar notificações.
- **Aluno**: Pode visualizar seu histórico e status da bolsa.

**Medidas de Proteção de Dados:**
- **Transmissão Segura:** A API utiliza HTTPS para garantir a segurança na transmissão de dados.
- **Criptografia:** Dados sensíveis são criptografados em trânsito e em repouso.

## 4. Monitoramento e Performance

**Monitoramento:**
- **Ferramentas Utilizadas:** Prometheus.
- **Métricas Monitoradas:** Tempo de resposta, taxa de erro, uso de recursos.

**Desempenho:**
- **Limites de Taxa (Rate Limits):** 1000 requisições por minuto.
- **Otimização:** Uso de caching e balanceamento de carga para melhorar o desempenho.

**Escalabilidade:**
- A API é projetada para escalar horizontalmente, com estratégias de balanceamento de carga para lidar com aumentos de demanda.

## 5. Versionamento e Compatibilidade

**Política de Versionamento:**
- A API utiliza versionamento na URL.
- **Exemplo:** `/v1/endpoint`.

**Compatibilidade:**
- Alterações na API são comunicadas através de notas de versão e changelogs. Compatibilidade retroativa é mantida sempre que possível.

## 6. Recursos Adicionais

**Links de Referência:**
- **Documentação Completa** (Em breve)
- **Tutoriais de Uso** (Em breve)

**Glossário:**
- **JWT:** JSON Web Token, um padrão aberto (RFC 7519) que define um método compacto e autônomo para transmitir informações de forma segura entre partes como um objeto JSON.

**Exemplos Adicionais:**
- cURL:

```bash
curl -X GET "https://api.conectaifpe.com/api/inscricao/upload" -H "Authorization: Bearer {token}"
```

- Python Requests:

```python
import requests

headers = {'Authorization': 'Bearer {token}'}
response = requests.get('https://api.conectaifpe.com/api/inscricao/upload', headers=headers)
print(response.json())
```
---

**Nota:** Mantenha esta documentação sempre atualizada com as mudanças na API para evitar problemas de integração e uso indevido.