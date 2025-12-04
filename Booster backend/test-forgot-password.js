require('dotenv').config();
const axios = require('axios');

async function testForgotPassword() {
    try {
        const email = process.env.ADMIN_EMAIL || "admin@boostera.com";
        console.log(`Testing Forgot Password for: ${email}`);

        const response = await axios.post('http://localhost:5000/api/auth/forgot-password', {
            email
        });

        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}

testForgotPassword();
