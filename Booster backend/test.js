console.log('Hello from test.js');
(async () => {
    try {
        const mongoose = require('mongoose');
        console.log('mongoose loaded');
        const dotenv = require('dotenv');
        console.log('dotenv loaded');
        const path = require('path');
        console.log('CWD:', process.cwd());
        const envPath = path.resolve(process.cwd(), '.env');
        console.log('Env path:', envPath);

        const result = dotenv.config({ path: envPath });
        if (result.error) {
            console.log('Dotenv error:', result.error);
        }

        console.log('URI:', process.env.MONGODB_URI ? 'Found' : 'Missing');

        if (process.env.MONGODB_URI) {
            await mongoose.connect(process.env.MONGODB_URI);
            console.log('Connected to MongoDB');
            await mongoose.disconnect();
            console.log('Disconnected');
        }
    } catch (e) {
        console.error('Error:', e);
    }
})();
