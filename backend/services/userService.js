const userRepository = require('../repositories/userRepository');

class UserService {
  async registerUser(userData) {
    const existingUser = await userRepository.findByEmail(userData.email);
    if (existingUser) {
      throw new Error('Email already in use');
    }

    const user = await userRepository.create(userData);
    const token = user.generateAuthToken();
    return { user, token };
  
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
