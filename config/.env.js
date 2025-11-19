// src/config/env.js
const path = require('path');
const dotenv = require('dotenv');

function configEnv() {
  // env file:  Boost ERA/.env
  // env.js:    Boost ERA/src/config/env.js
  // Isliye:    ../.. se upar jaa ke .env
  const envPath = path.join(__dirname, '..', '..', '.env');

  const result = dotenv.config({ path: envPath });

  if (result.error) {
    console.error('⚠️  Could not load .env file at:', envPath);
    console.error(result.error);
  } else {
    console.log('✅ .env loaded from:', envPath);
  }
}

module.exports = { configEnv };
