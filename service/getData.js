
const request = require('../utils/request.js')
exports.getArticle =  id =>  request.get(`/article/${id}`)
