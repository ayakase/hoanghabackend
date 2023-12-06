const bcrypt = require('bcrypt');
const User = require('../models/UserModel'); // Assuming you have a User model
const sequelize = require('../connect');

const createAdminUser = async () => {
    const plainTextPassword = 'admin'; // Plain text password
    const hashedPassword = await bcrypt.hash(plainTextPassword, 10); // Hash the password

    try {
        const adminUser = await User.create({
            username: 'admin',
            password: hashedPassword, // Save the hashed password
            name: 'admin',
            email: 'wibu1892001@gmail.com',
        });

        console.log('Admin user created:', adminUser);
    } catch (error) {
        console.error('Error creating admin user:', error);
    }
};

createAdminUser();
