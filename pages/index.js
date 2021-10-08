import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {Header} from '../components/Header'

export default function Home() {
  const [colour, setColour] = useState('test')
  return (
    <>
      <Header colour={colour} text='Ethan is whack.com'/>
      <input type="text" onChange={e => setColour(e.target.value)} value={colour} />
      <p>This is the text you are typing {colour}</p>
    </>
  )
}
