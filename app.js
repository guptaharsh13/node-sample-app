const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT || 3001;
let count = 0;
app.get('/', (_, res) => {
    console.log(`Request number: ${count}`)
    count++
    return res.json({ count });
})
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
