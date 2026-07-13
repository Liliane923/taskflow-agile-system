# RELATÓRIO TÉCNICO DE ENGENHARIA DE SOFTWARE

## 4.2 Diagrama de Classes

```mermaid
classDiagram
    class Usuario {
        +String username
        +String senha
        +String nivelAcesso
        +login(username, senha) Boolean
    }

    class Tarefa {
        +int id
        +String titulo
        +String descricao
        +String status
        +criarTarefa(titulo, descricao) Boolean
        +atualizarStatus(novoStatus) void
        +excluirTarefa() Boolean
    }

    Usuario "1" --> "*" Tarefa : gerenciac
