const playList = [

    {

        author: "LED ZEPPELIN",

        song: "STAIRWAY TO HEAVEN"

    },

    {

        author: "QUEEN",

        song: "BOHEMIAN RHAPSODY"

    },

    {

        author: "LYNYRD SKYNYRD",

        song: "FREE BIRD"

    },

    {

        author: "DEEP PURPLE",

        song: "SMOKE ON THE WATER"

    },

    {

        author: "JIMI HENDRIX",

        song: "ALL ALONG THE WATCHTOWER"

    },

    {

        author: "AC/DC",

        song: "BACK IN BLACK"

    },

    {

        author: "QUEEN",

        song: "WE WILL ROCK YOU"

    },

    {

        author: "METALLICA",

        song: "ENTER SANDMAN"

    }

];

const h1 = document.createElement('h1');
h1.textContent = 'Playlist';

const ol = document.createElement('ol');
playList.forEach((playItem) => {
    const li = document.createElement('li');
    li.textContent = `Song: ${playItem.song} Author: ${playItem.author}`;
    ol.appendChild(li);
});


document.getElementById('title').appendChild(h1);
document.getElementById('playlist').appendChild(ol);
