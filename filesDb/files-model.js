const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove
};

function add(file) {
  return db('files').insert(file)
}

function find() {
  return db('files').select('id', 'name');
}

function findBy(filter) {
  return db('files').where(filter);
}

async function add(file) {
  const [id] = await db('files').insert(file);

  return findById(id);
}

function findById(id) {
  return db('files')
    .where({ id })
    .first();
}

function remove(id) {
  return db('files')
    .where('id', id)
    .del();
}
