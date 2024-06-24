'use client';
import axios from 'axios';
import React from 'react';
import Link from 'next/link';

const DeleteButton = ({id}) => {
    const deleteRecord = () => {
        axios.delete(`http://localhost:2001/api/songs/${id}`)
        .then(res => { 
            alert("Song Deleted Successfully"); 
            //refesh(); 
        })
        .catch(err => { alert(err.response.data.error); })
    }
    return (
        <button onClick={deleteRecord}  className='mx-1'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 24 24">
                <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
            </svg>
        </button>
    )
}

export default DeleteButton