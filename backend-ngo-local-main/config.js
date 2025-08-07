const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const config = {
  port: process.env.PORT || 5000,
  filesize_limit: 5 * 1024 * 1024,
  
  mongodb_uri: process.env.MONGODB_URI,
  emailjs: {
    service_id: process.env.EMAILJS_SERVICE_ID,
    template_id: process.env.EMAILJS_TEMPLATE_ID,
    user_id: process.env.EMAILJS_USER_ID,
  },
  node_env: process.env.NODE_ENV,
  app_url: process.env.APP_URL,
};

module.exports = config;
