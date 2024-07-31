'use server';
import { revalidatePath } from 'next/cache'
import axios from "axios";

async function addSongfunc(formData) {
    const title = formData.get('title');
    const genre= formData.get('genre');
    const artist = formData.get('artist');
    const album= formData.get('album');
    // const {title,genre,artist,album} = formData;
    // console.log("formdata server action ,",formData)
    try {
        axios.post(process.env.SONG_API,{title,genre,artist,album}).then(res => {
            //alert("Song Added Successfully");
            console.log("song added successfully from server")
        })
    } catch (error) {
        console.error('Error adding songs:', error);
        return [];
    }
    revalidatePath('/songs')
    revalidatePath('/songs/addSong')
}

const deleteRecord = async (id) => {
    axios.delete(`${process.env.SONG_API}/${id}`)
    .then(res => { 
        //alert("Song Deleted Successfully");
        console.log("Song Deleted Successfully")
        //refesh(); 
    })
    .catch(err => { console.log(err.response.data.error); })
    revalidatePath('/songs')

}

async function updateSongfunc(songId, formData) {
    // console.log("formdata received ", songParam + "\n" + formData);
    const title = formData.get('title');
    const genre= formData.get('genre');
    const artist = formData.get('artist');
    const album= formData.get('album');
    // const {title,genre,artist,album,id} = formData;
    // console.log("formdata server action ,",formData)
    try {
        axios.put(`${process.env.SONG_API}/${songId}`,{title,genre,artist,album})
        .then(res => {
            console.log("song updated successfully from server")
        })
    } catch (error) {
        console.log('Error updating songs:')//, error);
    }
    revalidatePath('/songs')
    revalidatePath('/songs/song/[id]', 'page')
}

const fetchSongDetail = (songId) => {
    try {
        axios.get(`${process.env.SONG_API}/${songId}`).then(res => {
            //console.log("song fetched ", res.data);
            return res.data;
        })
    } catch (error) {
        console.error('Error feftching song detail:', error);
        return null;
    }
}

export {addSongfunc,updateSongfunc,deleteRecord,fetchSongDetail}