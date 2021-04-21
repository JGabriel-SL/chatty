import express from 'express';
import './database';

const app = express();

/**
 * GET
 * POST 
 * PUT
 * DELETE
 * PATCH
 */

app.get('/', (req, res) => {
    return res.send('Olá NLW 05!')
})

app.post('', (req, res) => {
    //
})

app.listen(3333, () => {
    console.log('Server is running on port 3333')
})
