<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mood-Based Playlist Generator</title>
</head>
<body>
    <h1>Mood-Based Playlist Generator</h1>

    <p><strong>Website Overview:</strong></p>
    <p>This is a simple web application that generates playlists based on the user's mood. The application uses the Spotify API to fetch and display playlists according to the selected moods: <em>Happy</em>, <em>Energetic</em>, <em>Calm</em>, <em>Sad</em>, and <em>Romantic</em>.</p>

    <h2>Technologies Used:</h2>
    <ul>
        <li><strong>HTML</strong> - Structure of the web pages</li>
        <li><strong>CSS</strong> - Styling the web pages</li>
        <li><strong>JavaScript</strong> - Handling the logic for mood-based playlist generation</li>
        <li><strong>Node.js</strong> - Backend server to handle the API requests</li>
        <li><strong>Spotify API</strong> - Fetching playlists based on moods</li>
    </ul>

    <h2>Features:</h2>
    <ul>
        <li>Select your current mood from a list of available moods.</li>
        <li>Get a playlist curated by Spotify based on the chosen mood.</li>
        <li>Simple and intuitive interface to enhance user experience.</li>
    </ul>

    <h2>How to Run the Application:</h2>
    <p>Follow these steps to get the app running locally:</p>
    <ol>
        <li>Clone this repository:</li>
        <pre><code>git clone https://github.com/parnavi04/Mood_Based_Playlist.git</code></pre>
        
        <li>Navigate into the project folder:</li>
        <pre><code>cd Mood_Based_Playlist</code></pre>
        
        <li>Install dependencies:</li>
        <pre><code>npm install</code></pre>

        <li>Set up your Spotify API credentials by creating a <strong>.env</strong> file:</li>
        <pre><code>SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REDIRECT_URI=http://localhost:3000/callback</code></pre>

        <li>Start the server:</li>
        <pre><code>npm start</code></pre>

        <li>Visit <a href="http://localhost:3000">http://localhost:3000</a> in your browser to interact with the app.</li>
    </ol>

    <h2>Contributing:</h2>
    <p>Feel free to fork this repository, make changes, and submit a pull request!</p>

    <h2>License:</h2>
    <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>

</body>
</html>
