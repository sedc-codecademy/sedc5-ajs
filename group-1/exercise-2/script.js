let albums = [
    {
        artist: "Metallica",
        album: "Metallica",
        duration: 3400
    },
    {
        artist: "Iron Maiden",
        album: "Number of the beast",
        duration: 3200
    },
    {
        artist: "Dissection",
        album: "Storm of the lord's bane",
        duration: 3300
    },
    {
        artist: "System of a down",
        album: "Steal this album",
        duration: 3100
    },
    {
        artist: "Beatles",
        album: "White Album",
        duration: 3000
    },
    {
        artist: "Sepultura",
        album: "Chaos A.D.",
        duration: 3400
    },
    {
        artist: "Antrax",
        album: "Persistence of time",
        duration: 3700
    },
    {
        artist: "Exploited",
        album: "album-name",
        duration: 412
    }
];

function displayArray() {
    let body = document.getElementsByTagName("tbody")[0];
    for (var index = 0; index < albums.length; index++) {
        var album = albums[index];
        body.rows[index].cells[0].textContent = album.artist;
        body.rows[index].cells[1].textContent = album.album;
        body.rows[index].cells[2].textContent = album.duration;
    }
}

function sortArray(selector) {
    albums.sort((a, b) => selector(a).localeCompare(selector(b)));
    displayArray();
}

document.getElementById("fill").addEventListener("click", () => {
    displayArray();
});

document.getElementById("album").addEventListener("click", () => {
    sortArray(a => a.album);
});

document.getElementById("artist").addEventListener("click", () => {
    sortArray(a => a.artist);
});

document.getElementById("duration").addEventListener("click", () => {
     albums.sort((a, b) => a.duration - b.duration);
    displayArray();
});

