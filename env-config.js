const prod = process.env.NODE_ENV === 'production';
module.exports = {
    'process.env.BASE_URL': prod ? 'https://babuldeb.herokuapp.com' : 'http://localhost:3000',
    'process.env.NAMESPACE': 'https://babuldeb.herokuapp.com',
    'process.env.CLIENT_ID': 'B5CzA3jaSJe524yr3QBQU80muz6TGjGU'
}