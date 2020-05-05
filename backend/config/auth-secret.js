const authSecret = process.env.AUTH_SECRET || 'local-development-secret';
if (authSecret == 'local-development-secret') {
    console.log('WARNING - Auth secret is insecure. Please specify a valid AUTH_SECRET env variable.');
}
module.exports = authSecret;