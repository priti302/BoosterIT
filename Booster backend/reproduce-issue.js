const axios = require('axios');

async function reproduce() {
    try {
        // 1. Login
        console.log('Logging in...');
        const loginRes = await axios.post('http://localhost:5000/api/auth/login', {
            email: 'admin@boostera.com',
            password: 'Admin@123'
        });
        const token = loginRes.data.token;
        console.log('Logged in.');

        // 2. Send JSON payload
        const payload = {
            title: "AI Automation Webinar",
            imageUrl: "https://cdn.yoursite.com/banners/ai-automation.png",
            linkUrl: "/services/ai-automation",
            isActive: true,
            sortOrder: 1
        };

        console.log('Sending payload:', payload);

        const res = await axios.post('http://localhost:5000/api/content/posters', payload, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        console.log('Success:', res.data);

    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}

reproduce();
