const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

//basic health check endpoint
app.get('api/health/', (req, res) => {
    res.json({ status: 'ok', message: 'MeroSafety API is running'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});