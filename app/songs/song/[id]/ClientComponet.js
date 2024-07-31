'use client';
import React from 'react'
import Link from 'next/link';
import { useFormStatus } from 'react-dom'
import { useRef } from 'react'


const ClientComponet = ({updateSongfunc, songData}) => {
    const songId = songData?._id;
    const updateSongWithId = updateSongfunc.bind(null, songId)
    const { pending } = useFormStatus()
    const ref = useRef(null);  

    const [title, setTitle] = React.useState(songData?.title || '');
    const [genre, setGenre] = React.useState(songData?.genre || '');
    const [artist, setArtist] = React.useState(songData?.artist || '');
    const [album, setAlbum] = React.useState(songData?.album || '');

    return (
        <>

            <div className='flex justify-center items-center'>
                <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>Update Song</h1>
            </div>
            <div className='flex justify-center items-center'>
                <form
                    ref={ref}
                    action={async (formData)=>{
                        await updateSongWithId(formData);
                        alert("Song Updated Successfully");
                        ref.current?.reset();
                    }}
                >
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Song Title</label>
                            <input type="text" name='title' value={title} onChange={(e)=>setTitle(e.target.value)} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Summer Melody" required />
                        </div>
                        <div>
                            <label htmlFor="genre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genre/Description</label>
                            <input type="text" name='genre' value={genre} onChange={(e)=>setGenre(e.target.value)} id="genre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Lo-Fi" required />
                        </div>
                        <div>
                            <label htmlFor="artist" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Artist</label>
                            <input type="text" name='artist' value={artist} onChange={(e)=>setArtist(e.target.value)} id="artist" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Lo-Fi" required />
                        </div>
                        <div>
                            <label htmlFor="album" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Album</label>
                            <input type="text" name='album' value={album} onChange={(e)=>setAlbum(e.target.value)} id="album" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Summer Melody" required />
                        </div>
                    </div>
                    <button disabled={pending} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
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

export default ClientComponet