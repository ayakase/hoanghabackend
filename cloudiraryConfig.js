const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dxkmteupm',
    api_key: '464234668971617',
    api_secret: 'VAkF3cu-QheVtzdeA_HScjADiw8',
    secure: true,
});

module.exports = cloudinary;