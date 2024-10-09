const express = require('express');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
    try {
        res.send('Welcome');
    } catch (e) {
        console.error(e.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.get("/transaction", (req, res) => {
    try {

        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 10;
        const search = req.query.search ? req.query.search.toLowerCase() : '';
        const selectedMonth = (req.query.month || 'march').toLowerCase();


        const monthMap = {
            'january': '01',
            'february': '02',
            'march': '03',
            'april': '04',
            'may': '05',
            'june': '06',
            'july': '07',
            'august': '08',
            'september': '09',
            'october': '10',
            'november': '11',
            'december': '12',
        };

        const numericMonth = monthMap[selectedMonth];

        if (!numericMonth) {
            return res.status(400).json({ error: 'Invalid month' });
        }

        const params = [numericMonth, search, search, search, perPage, (page - 1) * perPage];

      
    } catch (error) {

    }


})
