import React from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

spotifyApi.setAccessToken('BQDwwBpCXgo6dz1RhV_w_mYKwCugDv26q2BoJfLUb13xuvT5IRkEGpj4RIigCI2RMUpdzcaixmhiPW1gni44VVynKKGzqyTXrrxTO3BTwl_eqagc24-vsulle0IDAC10WTSly8HZj5YS0xs6V2mbazmf3kY-SXBO1DLvi2hqE3skt0Iw0qnSU52fA6z43iO1kaq6TZAs45-Opf8lyxQ-SOy9o3Wa-8z9tL9yStU7F6cVuDGBHob73fnUmc2fF6iKC5RAymiGE_8S9PMhOA')

export async function getImages(playlistUrl){
    
    var imageList = [];
    
    // var err, data = await spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
    console.log(playlistUrl)
    let id = playlistUrl.split("/").reverse()[0]
    console.log(id);

    var err, data = await spotifyApi.getPlaylistTracks(id)
    // , function (err, data) {
        if (err) console.error(err);
        else {
            console.log('Playlist tracks', data);

            for (let index = 0; index < data.tracks.items.length; index++) {
                const track = data.tracks.items[index].track;
                let image = track.album.images[0].url

                imageList.push(image)
            }
        }
    // });

    // console.log(imageList)

    return imageList;
}