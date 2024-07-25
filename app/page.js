import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>
        Hello World
      </h1>
      <div className='flex flex-col justify-center items-center mt-10'>
        <h2>
          Explore Examples
        </h2>
        <div className='flex justify-center items-center mt-10'>
          <Link href="/songs" className="text-white bg-blue-400 hover:bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-300 dark:hover:bg-blue-400 focus:outline-none dark:focus:ring-blue-500">
            Songs
          </Link>
          <Link href="/user" className="text-white bg-blue-400 hover:bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-300 dark:hover:bg-blue-400 focus:outline-none dark:focus:ring-blue-500">
            Users
          </Link>
          <Link href="/demosegmentation" className="text-white bg-blue-400 hover:bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-300 dark:hover:bg-blue-400 focus:outline-none dark:focus:ring-blue-500">
            Demo
          </Link>
        </div>
      </div>
    </main>
  )
}
