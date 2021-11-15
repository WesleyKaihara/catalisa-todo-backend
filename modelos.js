const createKnex = require('knex');

const knex = createKnex({
  client: 'sqlite3',
  debug: true,
  useNullAsDefault: true,
  connection: {
    filename: './database/catalisa-todo.sqlite3',
  }
});
const bookshelf = require('bookshelf')(knex);

const Usuario = bookshelf.model('Usuario', {
  tableName: 'usuarios',
  requireFetch: false,
  hidden: [
    'senha'
  ],
});

const Tarefa = bookshelf.model('Tarefa', {
  tableName: 'tarefas',
  requireFetch: false,
});

exports.knex = knex;
exports.Usuario = Usuario;
exports.Tarefa = Tarefa;
