const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api', // Proxy all requests starting with /api
        createProxyMiddleware({
            target: 'https://radiancelooks.in', // Target server
            changeOrigin: true, // Modify the origin of the request
            pathRewrite: { '^/api': '' }, // Remove `/api` from the request path
        })
    );
};
