'use client';
import Image from 'next/image'
import axios from 'axios'

import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

export default function Home() {
 
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url)
      .then((response) => {
        setWeather(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error, "something went wrong");
      })
    setCity('');
    setLoading(false);
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=toronto&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {/* OverLay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]"/>
       
        <Image src='https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2374&q=80' 
        layout='fill'
        alt='weather image'
        className='object cover'
        />
       
      </div>
    </main>
  )
}
