const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

async function testPosterUpload() {
    try {
        // 1. Login as Super Admin
        console.log('Logging in...');
        const loginRes = await axios.post('http://localhost:5000/api/auth/login', {
            email: 'admin@boostera.com',
            password: 'Admin@123'
        });
        const token = loginRes.data.token;
        console.log('Logged in. Token received.');

        // 2. Create a dummy image file
        const dummyPath = path.join(__dirname, 'dummy.txt');
        fs.writeFileSync(dummyPath, 'This is a dummy image content');

        // 3. Upload Poster
        console.log('Uploading poster...');
        const form = new FormData();
        form.append('title', 'Test Poster');
        form.append('image', fs.createReadStream(dummyPath));

        const uploadRes = await axios.post('http://localhost:5000/api/content/posters', form, {
            headers: {
                ...form.getHeaders(),
                'Authorization': `Bearer ${token}`
            }
        });

        console.log('Poster created:', uploadRes.data);

        // Cleanup
        fs.unlinkSync(dummyPath);

    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}

testPosterUpload();
