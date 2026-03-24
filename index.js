const express = require('express');
const QRCode = require('qrcode');

const app = express();
app.use(express.static('public'));
app.use(express.json());

app.post("/generate", async (req, res) => {
    const { text } = req.body;
    try {
        const qrCodeDataURL = await QRCode.toDataURL(text);
        res.json({ qr: qrCodeDataURL });
    } catch (err) {
        res.status(500).json({ error: 'Failed to generate QR code' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});