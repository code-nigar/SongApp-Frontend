import { addSongfunc } from '@/app/lib/action';
import React from 'react'
import FormComponent from './formComponent';

const User = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { next: { revalidate: 10 } });
  const users = await res.json();
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map(x => <li key={x.id}>{x.name}</li>)}
      </ul>
      <br/>
      <p>Dated: {new Date().toLocaleString()}</p>
      <p>{process.env.specialKey}</p>
      <FormComponent/>
    </>
  )
}

export default User