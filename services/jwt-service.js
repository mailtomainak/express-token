
const crypto = require('crypto');
exports.encode = function(payload,secret){

	const header = {
		alg:'HS256',
		typ:'JWT'
	}
	var jwt = base64Encode(JSON.stringify(header))+'.'+base64Encode(JSON.stringify(payload));
	return jwt+'.'+sign(jwt,secret);
}



const sign = function(str,key) {
	return crypto.createHmac('sha256',key).update(str).digest('base64');
}

const base64Encode = function(str){
	return new Buffer(str).toString('base64');
}

