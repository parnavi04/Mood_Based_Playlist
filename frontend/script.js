document.getElementById('search').addEventListener('click', async () => {
    const mood = document.getElementById('mood').value;
    const accessToken = new URLSearchParams(window.location.search).get('access_token');

    // Redirect to Spotify login if no access token is found
    if (!accessToken) {
        window.location.href = 'http://localhost:3000/login';
        return;
    }

    try {
        // Fetch tracks based on mood from the backend
        const response = await fetch(`http://localhost:3000/search?mood=${mood}&accessToken=${accessToken}`);
        const tracks = await response.json();

        // Display the results
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';

        if (tracks.length === 0) {
            resultsDiv.innerHTML = '<p>No tracks found for this mood. Try another mood!</p>';
            return;
        }

        tracks.forEach(track => {
            const trackElement = document.createElement('div');
            trackElement.innerHTML = `
                <h3>${track.name}</h3>
                <p>By ${track.artists.map(artist => artist.name).join(', ')}</p>
                ${track.preview_url ? `<audio controls src="${track.preview_url}"></audio>` : '<p>No preview available</p>'}
            `;
            resultsDiv.appendChild(trackElement);
        });
    } catch (error) {
        console.error(error);
        document.getElementById('results').innerHTML = '<p>An error occurred while fetching tracks. Please try again.</p>';
    }
});