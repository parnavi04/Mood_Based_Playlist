const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Spotify API credentials
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

// Step 1: Redirect user to Spotify login page
app.get('/login', (req, res) => {
    const scope = 'user-read-private user-read-email playlist-modify-public';
    res.redirect(`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=${scope}`);
});

// Step 2: Handle callback from Spotify and get access token
app.get('/callback', async (req, res) => {
    const code = req.query.code;

    try {
        const response = await axios.post('https://accounts.spotify.com/api/token', null, {
            params: {
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: REDIRECT_URI,
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        const accessToken = response.data.access_token;
        res.redirect(`http://localhost:5500/frontend/index.html?access_token=${accessToken}`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error during authentication');
    }
});

// Step 3: Search for tracks based on mood
app.get('/search', async (req, res) => {
    const { mood, accessToken } = req.query;

    console.log("Mood (Backend):", mood); // Debugging
    console.log("Access Token (Backend):", accessToken); // Debugging

    try {
        const response = await axios.get('https://api.spotify.com/v1/search', {
            params: {
                q: mood,
                type: 'track',
                limit: 20,
            },
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        console.log("Spotify API Response:", response.data.tracks.items); // Debugging
        res.json(response.data.tracks.items);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error searching for tracks');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
