import React from 'react';
import DeleteButton from './deleteButton';
import EditButton from './editButton';
import Link from 'next/link';

const Songs = ({ listOfSongs, handleRefresh }) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>Songs</h1>

            <div className='card-container'>
                {listOfSongs.map(song =>
                    <div key={song._id} className='card shadow-md my-1 py-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.104,4,24,4z M21,18.453 c0,1.132-0.914,2.535-2.999,2.535c-1.862,0-2.333-1.194-2.333-1.999c0-0.991,0.598-2.005,2.335-2.004 c1.573,0,1.664-0.401,1.664-1.193v-4.028l-7.331,1.195c0,0,0,5.965,0,6.632c0,1.132-0.914,2.41-2.999,2.41 c-1.862,0-2.333-1.194-2.333-1.999c0-0.991,0.598-2.005,2.335-2.005c1.573,0,1.664-0.401,1.664-1.193c0-2.21,0-6.804,0-6.804 c0-0.33,0.244-0.591,0.558-0.645l8.688-1.349c0,0,0.058-0.005,0.085-0.005C20.702,8,21,8.298,21,8.666C21,8.666,21,17.787,21,18.453 z"></path>
                        </svg>
                        <h2>{song.title}</h2>
                        <p className="text-sm text-gray-500">{song.genre}</p>
                        <div className='ml-auto flex gap-2 mx-1'>
                            <EditButton id={song._id} />
                            <DeleteButton id={song._id} refresh={handleRefresh}/>
                        </div>
                    </div>
                )}
            </div>

            <Link href="/songs/addSong" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-6">
                Add New Song
            </Link>
        </div>
    )
}

export default Songs;
