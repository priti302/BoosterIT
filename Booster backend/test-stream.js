const API_URL = 'http://localhost:5000/api';
const EMAIL = 'ananya.sharma@example.com';
const PASSWORD = 'password123';

async function testStream() {
    try {
        // 1. Login
        console.log('Logging in...');
        const loginRes = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: EMAIL, password: PASSWORD })
        });
        const loginData = await loginRes.json();
        if (!loginRes.ok) throw new Error(loginData.message);

        const token = loginData.token;
        console.log('Login successful. Token:', token.substring(0, 20) + '...');

        // 2. Go Live
        console.log('Going Live...');
        const goLiveRes = await fetch(`${API_URL}/stream/go-live`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const goLiveData = await goLiveRes.json();
        console.log('Go Live Response:', goLiveData);

        // 3. Get Live Stream
        console.log('Fetching Live Stream...');
        const getStreamRes = await fetch(`${API_URL}/stream/live`);
        const getStreamData = await getStreamRes.json();
        console.log('Get Stream Response:', getStreamData);

        if (!getStreamData.isLive) {
            console.error('❌ Expected isLive to be true');
        } else {
            console.log('✅ Stream is live');
        }

        // 4. End Live
        console.log('Ending Live Stream...');
        const endLiveRes = await fetch(`${API_URL}/stream/end-live`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        const endLiveData = await endLiveRes.json();
        console.log('End Live Response:', endLiveData);

        // 5. Verify Stream Ended
        console.log('Verifying Stream Ended...');
        const checkStreamRes = await fetch(`${API_URL}/stream/live`);
        const checkStreamData = await checkStreamRes.json();
        console.log('Check Stream Response:', checkStreamData);

        if (checkStreamData.isLive) {
            console.error('❌ Expected isLive to be false');
        } else {
            console.log('✅ Stream ended successfully');
        }

    } catch (error) {
        console.error('❌ Test Failed:', error);
    }
}

testStream();
