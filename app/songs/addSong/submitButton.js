 import { addSongfunc } from '@/app/api/add-song'
// import React from 'react'
// import axios from 'axios';


// const addSong = async (payload) => {
//     'use server';
//     try {
//         axios.post('http://localhost:2001/api/songs',{...payload}).then(res => {
//             alert("Song Added Successfully");
//         })
//     } catch (error) {
//         console.error('Error fetching songs:', error);
//         return [];
//     }
// }

// const addSongfunc = async (formData) => {
//     try {
//         console.log(formData)
//         const res = await fetch('http://localhost:2001/api/songs',
//             {
//                 method: "POST",
//                 body: JSON.stringify(formData),
//             })
//         console.log(res);
//     } catch (error) {
//         console.error('Error fetching songs:', error);
//         return [];
//     }
//     revalidatePath('/song')
// }


function SubmitBtn({title,genre,artist,album}) {
  return (
    <button onClick={()=>addSongfunc({title,genre,artist,album})} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  )
}

export default SubmitBtn