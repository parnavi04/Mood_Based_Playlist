<h1>Mood-Based Playlist Generator</h1>
<br>
<h2>Overview :  </h2>

<p>
    The Mood-Based Playlist Generator is a simple web application that uses the Spotify API to create personalized music playlists based on the user's current mood. The app allows users to select from five predefined moods—Happy, Energetic, Calm, Sad, and Romantic—and generates a playlist with music that fits the selected mood.

</p>

<h3>Features: </h3>
<ul>
    <li>Mood Selection: Choose from five moods: Happy, Energetic, Calm, Sad, and Romantic.
</li>
    <li>Spotify Integration: Fetches playlists from Spotify based on the chosen mood.
</li>
    <li>User-Friendly Interface: Clean and simple UI for easy navigation.
</li>
</ul>
<h2>Tech Stack </h2>
<ul>
    <li>Frontend: HTML, CSS, JavaScript</li>
    <li>Backend: Node.js</li>
    <li>Spotify API: Used for fetching music playlists based on mood.</li>
</ul>
<h2>How to Run the Application:</h2>
    <p>Follow these steps to get the app running locally:</p>
    <ol>
        <li>Clone this repository:</li>
        <pre><code>git clone https://github.com/parnavi04/Mood_Based_Playlist.git</code></pre>
        
        Navigate into the project folder:
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

  

