# 🚀 URI - Questões de Lógica em JavaScript

Este repositório contém soluções para problemas de lógica do **URI Online Judge** (agora **Beecrowd**) utilizando **JavaScript**. 🖥️✨

---

## 📌 Como Rodar os Códigos

Os problemas do URI geralmente necessitam da entrada padrão (**stdin**) para processar os dados. Para simular isso em um ambiente local, criamos um arquivo chamado **stdin** contendo as entradas de teste. 📝

### 📂 Estrutura do Arquivo de Teste (`stdin`)
O arquivo **stdin** deve conter os valores de entrada exatamente como seriam fornecidos pelo URI. 

🔹 Exemplo de um arquivo `stdin` para um problema que espera dois números inteiros:

```
10
20
```

Isso significa que o programa irá ler esses dois valores como entrada e processá-los de acordo com a lógica do problema.

---

## ⚡ Comando para Executar o Código

Para rodar os arquivos JavaScript com entradas do arquivo **stdin**, usamos o seguinte comando:

```javascript
var input = require('fs').readFileSync('stdin', 'utf8');
```

🔹 Esse comando faz a leitura do arquivo **stdin** e armazena seu conteúdo na variável `input` como uma string. Em seguida, podemos processar os dados utilizando:

```javascript
var lines = input.split('\n');
```

Isso transforma a string em um array de linhas, permitindo acessar os valores conforme necessário para resolver os problemas. 🔍

---

## ▶️ Executando o Código no Terminal
Se você já criou o arquivo `stdin`, pode rodar o código com o Node.js assim:

```bash
node nome_do_arquivo.js
```

✅ Certifique-se de estar no mesmo diretório do arquivo **stdin** e do script JavaScript antes de rodar o comando.

---

