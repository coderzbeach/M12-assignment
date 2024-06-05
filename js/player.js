class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}
const albumData = [
    { artist: 'Operation Ivy', title: 'Energy' },
    { artist: 'Blink 182', title: 'Dude Ranch' },
    { artist: 'New Found Glory', title: 'Sticks and Stones' }
]

const albumSelect = document.getElementById('albumSelect');
        jbox.albums.forEach((album, index) => {
            const option = document.createElement('option')
            option.value = index;
            option.textContent = `${album.artist} - ${album.title}`
            albumSelect.appendChild(option);
        })

 document.getElementById('playButton').addEventListener('click', () => {
            const selectedAlbumIndex = albumSelect.value
            if (selectedAlbumIndex !== "") {
                const selectedAlbum = jbox.albums[selectedAlbumIndex]
                selectedAlbum.play()
                alert(`Playing ${selectedAlbum.title}`)
            }
        })

 document.getElementById('favoriteAlbumButton').addEventListener('click', () => {
            const favoriteAlbum = jbox.favoriteAlbum()
            document.getElementById('favoriteAlbum').textContent = `Favorite Album: ${favoriteAlbum}`
        })

console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`)