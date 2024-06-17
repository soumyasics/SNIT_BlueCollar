
const config = {
    development: {
        localUrl: 'http://localhost:3000',
        serverUrl: 'http://hybrid.srishticampus.in:4026/',
        // Add other development-specific settings here
    },
    // production: {
    //     localUrl: 'https://your-production-local-url.com',
    //     serverUrl: 'https://your-production-server-url.com',
    //     // Add other production-specific settings here
    // }
};

const environment = process.env.NODE_ENV || 'development';

module.exports = config[environment];
