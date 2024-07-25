export const revalidate = 20
export const fetchCache = 'force-no-store'
export default async function Home() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', { next: { revalidate: 10 } });
    const users = await res.json();
  return (
    <div>
      {/* <h1>{users.name}</h1> */}
      <ul>
        {users.map((feature) => (
          <li key={feature.id}>
            <h1>{feature.name}</h1>
            <p>{feature.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

