# Análise de Tarefa

O conteúdo do framework está coerente com o desenvolvimento das telas.

## Diagrama

![Diagrama de Análise de Tarefa]()

## Planos de Análise

**Objetivo:** Comprar um ingresso para um evento do campus de forma rápida e segura através do aplicativo do Inatel.

| Passo | Ação do Usuário | Resposta do Sistema |
| :--- | :--- | :--- |
| 1 | Abre o aplicativo do Inatel. | Exibe a tela principal com as seções "Mensagens", "Aulas" e "Eventos & Notícias". |
| 2 | Rola a tela até a seção "Eventos & Notícias". | A seção com o carrossel de eventos é visível. |
| 3 | Navega pelos eventos usando os botões ou o scroll. | O carrossel exibe diferentes cards de eventos com título, imagem, descrição e preço. |
| 4 | Encontra o evento desejado ("Festa dos Alunos"). | O card do evento exibe o botão "Comprar Ingresso". |
| 5 | Clica no botão "Comprar Ingresso". | Um modal de confirmação aparece na tela, sobrepondo o conteúdo, com os detalhes do evento, preço e valor da taxa de conveniência. |
| 6 | Clica no botão "Confirmar Compra" no modal. | O modal exibe uma mensagem de sucesso ("Compra realizada com sucesso!") e fecha automaticamente após alguns segundos. |
| 7 | (Opcional) Clica em "Cancelar". | O modal fecha e o usuário retorna à tela principal. |