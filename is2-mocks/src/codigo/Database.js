// Función que utiliza la base de datos
const createUser = (db, user) => {
    db.addUser (user);
    return user;
  }
const getUser = (db, id)  => {
    return db.getUser_ById(id);
  }

module.exports = { createUser , getUser};