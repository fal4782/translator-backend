const express = require('express')
require('./db/connection')
const cors = require('cors')
const router = require('./routes/routes')

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

// Load translations
const translations = {
    en: require('../frontend/src/assets/i18n/en.json'),
    es: require('../frontend/src/assets/i18n/es.json'),
}

app.get('/translations/:lang', (req, res) => {
    const lang = req.params.lang.toLowerCase();
    if (translations[lang]) {
        res.json(translations[lang]);
    } else {
        res.status(404).json({
            error: 'Language not supported'
        });
    }
});


app.listen(3000,'localhost',()=>{
    console.log('Listening on port 3000');
})