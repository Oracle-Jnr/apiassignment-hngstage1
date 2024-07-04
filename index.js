const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());


app.get('/api/hello', (req, res) => {
    const visitorName = req.query.visitor_name || 'Guest';
    res.send({ message: `Hello, ${visitorName}!` });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
