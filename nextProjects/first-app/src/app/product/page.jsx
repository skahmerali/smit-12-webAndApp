// import Link from 'next/link'
'use client'
// import { useState } from 'react'
 
import { useRouter } from 'next/router'
 
 
export default function Page(props) {
  const router = useRouter;
  console.log(router, 7)
//   const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Page:</h1>
      {/* <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
      <Link href="/one">one</Link> <Link href="/two">two</Link> */}
    </div>
  )
}