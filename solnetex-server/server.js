const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/waitlist', (req, res) => {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
        return res.status(400).json({ status: 'error', error: 'Invalid email' });
    }

    // Log and optionally save to a file
    console.log('New waitlist email:', email);
    fs.appendFileSync('waitlist.txt', `${email}\n`);

    res.json({ status: 'success' });
});

app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
