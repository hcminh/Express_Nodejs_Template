let appName = "Express_Nodejs_Template";

module.exports = {
    PORT: `3000`,
    SECRET: `${appName}_secret`,
    DATA_COLLECTION: `${appName}`,
    SESSION: {
        name: 'session_${appName}',
        proxy: true,
        resave: true,
        secret: `session_${appName}.secrect`, // session secret
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false /*Use 'true' without setting up HTTPS will result in redirect errors*/ ,
        }
    },
    DEBUG: {
        server: `${appName}`
    }
}