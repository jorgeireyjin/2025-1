// SequelizeUserRepository.js
const UserRepository = require('./userRepository');

class SequelizeUserRepository extends UserRepository {
  constructor(db) {
    super();
    this.db = db;
  }

  async getAll() {
    const users = await this.db.User.findAll();
    return users.map(u => u.toJSON());
  }

  async save(user) {
    const newUser = await this.db.User.create({ name: user.name, email: user.email });
    return newUser.toJSON();
  }
}

module.exports = SequelizeUserRepository;
