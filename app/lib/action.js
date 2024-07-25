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
        console.error('Error fetching songs:', error);
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

export {addSongfunc,deleteRecord}