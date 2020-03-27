const type = "mongodb"
const host = "127.0.0.1"
const port = "27017"
const name = "Weather_App"

const dbPassword = `${type}://${host}:${port}/${name}`;

module.exports = {
    mongoURI: dbPassword
};