module.exports = {
    PORT: "3000",
    SECRET: "template_secret",
    SESSION: {
        name: 'session_template_name',
        proxy: true,
        resave: true,
        secret: "session_template.secrect", // session secret
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false /*Use 'true' without setting up HTTPS will result in redirect errors*/,
        }
    },
    DEBUG: {
        server: "template_name_project"
    }
}