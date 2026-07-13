const TaskflowSistema = require('../src/sistema');

describe('Testes do Sistema Taskflow', () => {
  let sistema;

  beforeEach(() => {
    sistema = new TaskflowSistema();
  });

  test('Deve realizar login com credenciais válidas', () => {
    const resultado = sistema.fazerLogin('admin@taskflow.com', '123');
    expect(resultado.logado).toBe(true);
    expect(resultado.cargo).toBe('Administrador'); // Bate com o teu core business
  });

  test('Deve falhar o login com credenciais inválidas', () => {
    const resultado = sistema.fazerLogin('errado@taskflow.com', '999');
    expect(resultado.logado).toBe(false);
  });

  test('Deve permitir administrador criar tarefas', () => {
    const tarefa = sistema.criarTarefa('Configurar H2 Database', 'Configurar banco em memória', 'Administrador');
    expect(tarefa).toHaveProperty('id');
    expect(tarefa.titulo).toBe('Configurar H2 Database');
  });
});