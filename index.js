const TaskflowSistema = require('./src/sistema');

const sistema = new TaskflowSistema();

console.log("=== INICIANDO TESTE DO SISTEMA TASKFLOW ===\n");

// 1. Testando o Login
console.log("Tentando login com credenciais corretas...");
const loginAdmin = sistema.fazerLogin("admin@taskflow.com", "123");
console.log(`Resultado do Login: Logado = ${loginAdmin.logado}, Cargo = ${loginAdmin.cargo}\n`);

// 2. Testando a Criação de Tarefa (CRUD)
console.log("Criando uma nova tarefa como Administrador...");
const tarefa1 = sistema.criarTarefa("Configurar H2 Database", "Configurar banco em memória no Spring Boot", loginAdmin.cargo);
console.log("Tarefa Criada:", tarefa1);
console.log("");

// 3. Visualizando as tarefas
console.log("Lista de Tarefas Atual:", sistema.visualizarTarefas());
console.log("\n=== TESTE FINALIZADO EM AMBIENTE DE DESENVOLVIMENTO ===");