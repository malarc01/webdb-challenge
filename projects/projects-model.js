const db = require('../database/dbConfig.js')
// 
module.export = {
  find, 
  findById,
  add,
  update,
  remove
}

function find(){
  return db('projects');

}

function findById(id){
  return db('projects')
  .where({id})
  .first()
}

function add(p){
  // passing 'id' as the second parameter is recomended to ensure the id is returned
  // when connecting to other database managment system like Postgres
  return db('projects')
  .insert(p, 'id')
  .then(([id]) =>{
    return findById(id)
  });
}

function update(id,changes){
  return db('projects')
  .where({id})
  .update(changes)
  .then(count=>{
    if (count>0){
      return findById(id);
    }
    else {
      return null;
    }
  })
}

function update(id,changes){
  return db('tracks')
  .where({id})
  .update(changes)
  .then(count =>{
    if (count>0) {
      return findById(id);
    } else {
      return null;
    }

  });
}