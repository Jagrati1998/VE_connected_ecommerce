const userRepository = require('../repositories/userRepository');

class UserService {
  async registerUser(userData) {
    // Perform business logic, validation, etc.
    const user = await userRepository.create(userData);
    return user;
  }

  async getUserById(id) {
    const user = await userRepository.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async updateUser(id, updateData) {
    const updatedUser = await userRepository.update(id, updateData);
    return updatedUser;
  }

  async deleteUser(id) {
    await userRepository.delete(id);
  }
}

module.exports = new UserService();
