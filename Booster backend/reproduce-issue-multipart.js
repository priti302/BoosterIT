const axios = require('axios');
const FormData = require('form-data');

async function reproduceMultipart() {
    try {
        // 1. Login
        console.log('Logging in...');
        const loginRes = await axios.post('http://localhost:5000/api/auth/login', {
            email: 'admin@boostera.com',
            password: 'Admin@123'
        });
        const token = loginRes.data.token;
        console.log('Logged in.');

        // 2. Send Multipart with text fields only
        const form = new FormData();
        form.append('title', 'Multipart Test');
        form.append('imageUrl', 'https://example.com/image.png');
        form.append('isActive', 'true');

        console.log('Sending multipart payload...');

        const res = await axios.post('http://localhost:5000/api/content/posters', form, {
            headers: {
                ...form.getHeaders(),
                'Authorization': `Bearer ${token}`
            }
        });

        console.log('Success:', res.data);

    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}

reproduceMultipart();
