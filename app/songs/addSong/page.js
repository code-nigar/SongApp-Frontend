// 'use client';
// import React from 'react';
// import Link from 'next/link';
// // import axios from 'axios';
// import SubmitBtn from './submitButton';

// const AddSong = () => {

//     const [title, setTitle] = React.useState('');
//     const [genre, setGenre] = React.useState('');
//     const [artist, setArtist] = React.useState('');
//     const [album, setAlbum] = React.useState('');

//     // const formSubmit = async () => {
//     //     // try {
//     //     //     const response = axios.post('http://localhost:2001/api/songs',{title,genre});
//     //     //     const result = response.data;
//     //     //     console.log("Success:", result);
//     //     // } catch (error) {
//     //     //     console.error("Error:", error);
//     //     // }
//     //     axios.post('http://localhost:2001/api/songs',{title,genre,artist,album}).then(res => {
//     //         alert("Song Added Successfully");
//     //     }).catch(err => {
//     //         alert(err.response.data.error);
//     //     }
//     //     )
        
//     // }

//     return (
//         <>

//             <div className='flex flex-col justify-center items-center'>
//                 <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>Add Song</h1>
            
//                 <form>
//                     <div className="grid gap-6 mb-6 md:grid-cols-2">
//                         <div>
//                             <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Song Title</label>
//                             <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Summer Melody" required />
//                         </div>
//                         <div>
//                             <label htmlFor="genre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genre</label>
//                             <input type="text" value={genre} onChange={(e)=>setGenre(e.target.value)} id="genre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Lo-Fi" required />
//                         </div>
//                         <div>
//                             <label htmlFor="artist" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Artist</label>
//                             <input type="text" value={artist} onChange={(e)=>setArtist(e.target.value)} id="artist" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Lo-Fi" required />
//                         </div>
//                         <div>
//                             <label htmlFor="album" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Album</label>
//                             <input type="text" value={album} onChange={(e)=>setAlbum(e.target.value)} id="album" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Summer Melody" required />
//                         </div>
//                     </div>
//                     <SubmitBtn title={title} genre={genre} artist={artist} album={album}/>
//                     {/* <button onClick={formSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button> */}
//                 </form>
//             </div>
            
//             <div className='flex justify-center items-center mt-6'>
//                 <Link href="/songs" className="text-white bg-blue-400 hover:bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-300 dark:hover:bg-blue-400 focus:outline-none dark:focus:ring-blue-500 mt-4">
//                     Back
//                 </Link>
//             </div>
//         </>

//     )
// }

// export default AddSong










import Link from 'next/link';
import { addSongfunc } from '@/app/lib/action';

const AddSong = () => {


    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>Add Song</h1>
            
                <form action={addSongfunc}>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Song Title</label>
                            <input type="text" 
                            //value={title} 
                            //onChange={(e)=>setTitle(e.target.value)} 
                            id="title" name='title' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Summer Melody" required />
                        </div>
                        <div>
                            <label htmlFor="genre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genre</label>
                            <input type="text" 
                            //value={genre} 
                            //onChange={(e)=>setGenre(e.target.value)} 
                            id="genre" name='genre' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Lo-Fi" required />
                        </div>
                        <div>
                            <label htmlFor="artist" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Artist</label>
                            <input type="text" 
                            //value={artist} 
                            //onChange={(e)=>setArtist(e.target.value)} 
                            id="artist" name='artist' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Lo-Fi" required />
                        </div>
                        <div>
                            <label htmlFor="album" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Album</label>
                            <input type="text" //value={album} 
                            //onChange={(e)=>setAlbum(e.target.value)} 
                            id="album" name='album' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Summer Melody" required />
                        </div>
                    </div>
                    <button type='submit' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    {/* <button onClick={()=>addSongfunc({title,genre,artist,album})} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button> */}
                </form>
            </div>
            
            <div className='flex justify-center items-center mt-6'>
                <Link href="/songs" className="text-white bg-blue-400 hover:bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-300 dark:hover:bg-blue-400 focus:outline-none dark:focus:ring-blue-500 mt-4">
                    Back
                </Link>
            </div>
        </>

    )
}

export default AddSong