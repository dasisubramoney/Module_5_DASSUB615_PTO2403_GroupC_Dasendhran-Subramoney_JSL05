// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Wait for you", artist: "Drake", genre: "Rap" },
    { title: "Wet dreams", artist: "J cole", genre: "Rap" },
    { title: "Not like us", artist: "Kendrick Lamar", genre: "Rap" },
    { title: "Marvins Room", artist: "Drake", genre: "R&B" },
    { title: "Impatient", artist: "Jeremih", genre: "R&B" },
    { title: "Down on me", artist: "Jeremih", genre: "R&B" },
    { title: "Benin Boys", artist: "Rema", genre: "Afrobeats" },
    { title: "Dumebi", artist: "Rema", genre: "Afrobeats" },
    { title: "Soso", artist: "Omah lay", genre: "Afrobeats" },

    // Feel free to add even more songs
];

// Create Object 
const playlistsGuardians = {};

// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Rocket": "R&B",
    "Groot": "Afrobeats",
    "Drax": "Rap",
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here
    const guardiansNames = Object.keys(guardians) // Selects object content
    // Fills new object with Guardian names and their music 
    guardiansNames.map(guardian => {
        const preferGenre = guardians[guardian]; 
        const playlist = songs.filter(song => song.genre === preferGenre); // Filters through array and looks for songs in the genre
        playlistsGuardians[guardian] = playlist; // Add songs to the guardian object 
    });
    return playlistsGuardians; // writes to the object 
}

function displayPlaylists(playlistsGuardians) {
    const holderplaylist = document.getElementById('playlists'); // Stores variable for playlists div
    containerplaylist.innerHTML = '';  // Clear any existing content


    // Runs through each object in an object class and displays the content in html
    Object.keys(playlistsGuardians).forEach(guardian => {
        const guardPlaylist = playlistsGuardians[guardian]; // selects first object  
        const guardianDiv = document.createElement('div'); // Create a div in HTML
        guardianDiv.classList.add('playlist');  // Adds a class name to the div

        const guardians = document.createElement('h2'); // Create h2 inn HTML
        guardians.texttoContent = `${guardian}'s Playlist`; // Add content for the h2
        guardianDiv.appendChild(guardians); //Adds the content to the HTML

        const songList = document.createElement('ul'); // Create list in HTML
        songList.classList.add('song'); //Add class name for HTML

        //For each content in the object adds the content to the hTML 
        guardPlaylist.forEach(song => {
            const songItem = document.createElement('li'); // Create content for the List 
            songItem.classList.add('song-title'); // Add class name to the content 
            songItem.textContent = `${song.title} by ${song.artist}`; // Adds the content 
            songList.appendChild(songItem); // Writes content to the HTML 
        });

        guardianDiv.appendChild(songList); // Writes for the Div to the HTML
        holderplaylist.appendChild(guardianDiv); // Writes for the Div to the HTML
    });
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
displayPlaylists(playlistsGuardians);


