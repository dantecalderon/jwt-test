const jwt = require('jsonwebtoken')

const [,, option, secret, nameOrToken] = process.argv

if(!option || !secret || !nameOrToken) {
	console.log('Give me arguments')
	process.exit(0)
}

const signToken = (payload, secret) => {
	return jwt.sign(payload, secret)
}

const verifyToken = (token, secret) => {
	return jwt.verify(token, secret)
}

if(option === 'sign') {
	console.log(signToken({ sub: nameOrToken }, secret))
}
else if(option === 'verify') {
	console.log(verifyToken(nameOrToken, secret))
}
else {
	console.log('option should be sign or verify')
}


