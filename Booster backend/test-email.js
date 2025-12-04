require('dotenv').config();
const sendMail = require('./src/config/mailer');

async function test() {
    try {
        console.log('Testing SendGrid integration...');
        console.log('API Key present:', !!process.env.SENDGRID_API_KEY);
        console.log('From Email:', process.env.FROM_EMAIL);

        await sendMail({
            to: process.env.FROM_EMAIL, // Send to self for testing
            subject: 'Test Email from Boost ERA',
            html: '<h1>It Works!</h1><p>This is a test email to verify SendGrid integration.</p>'
        });

        console.log('Test completed successfully!');
    } catch (err) {
        console.error('Test failed:', err);
    }
}

test();
