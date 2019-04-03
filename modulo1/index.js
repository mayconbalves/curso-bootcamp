const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
	autoescape: true,
	express: app,
	watch: true
})

app.set('view engine', 'njk')

app.get('/', (req, res) => {
	console.log(req)
	return res.render('list', { name: 'Maycon' })
})

app.listen(3000)
