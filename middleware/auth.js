const { expressjwt: jwt } = require ("express-jwt");

const getToken = (req) => {
    const { autorization } = req.headers;
    if (!autorization) {
        return null;
    }

    const [type, token] = autorization.split(' ');
    return type === "Bearer" || type === "Token" ? token : null;
};

const auth = jwt ({
    secret: process.env.SECRET,
    algorithms: ["HS256"],
    requestProperty: "user",
    getToken,
});

module.exports = auth;