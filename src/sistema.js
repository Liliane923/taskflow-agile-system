class TaskflowSistema {
    constructor() {
        // Simulação de banco de dados na memória
        this.usuarios = [
            { email: "admin@taskflow.com", senha: "123", cargo: "Administrador" },
            { email: "user@taskflow.com", senha: "abc", cargo: "Usuario" }
        ];
        this.tarefas = [];
        this.proximoId = 1;
    }

    // Regra de Negócio: Fazer Login
    fazerLogin(email, senha) {
        const usuario = this.usuarios.find(u => u.email === email && u.senha === senha);
        return usuario ? { logado: true, cargo: usuario.cargo } : { logado: false, cargo: null };
    }

    // CRUD: Criar Tarefa
    criarTarefa(titulo, descricao, cargoUsuario) {
        if (cargoUsuario !== "Administrador") {
            return "Erro: Apenas administradores podem criar tarefas.";
        }
        const novaTarefa = {
            id: this.proximoId++,
            titulo,
            descricao,
            status: "A Fazer"
        };
        this.tarefas.push(novaTarefa);
        return novaTarefa;
    }

    // CRUD: Visualizar Tarefas
    visualizarTarefas() {
        return this.tarefas;
    }

    // CRUD: Atualizar Status da Tarefa
    atualizarStatus(id, novoStatus) {
        const tarefa = this.tarefas.find(t => t.id === id);
        if (!tarefa) return "Erro: Tarefa não encontrada.";
        tarefa.status = novoStatus;
        return tarefa;
    }

    // CRUD: Excluir Tarefa
    excluirTarefa(id, cargoUsuario) {
        if (cargoUsuario !== "Administrador") {
            return "Erro: Apenas administradores podem excluir tarefas.";
        }
        const index = this.tarefas.findIndex(t => t.id === id);
        if (index === -1) return "Erro: Tarefa não encontrada.";
        this.tarefas.splice(index, 1);
        return "Sucesso: Tarefa excluída.";
    }
}
// Exporta a classe para usarmos nos testes depois
module.exports = TaskflowSistema; 