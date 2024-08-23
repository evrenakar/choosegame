"use client";
import React, { useState, useRef } from 'react';
import SlotCounter from 'react-slot-counter';

export default function Landing() {
  const [value, setValue] = useState(['??????', '??????']);
  const counterRef = useRef(null);
  const counterReff = useRef(null);
  let date = new Date();
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = date.getFullYear();
  date = dd + '/' + mm + '/' + yyyy;

  const handleStartClick = () => {
    counterRef.current?.startAnimation();
    counterReff.current?.startAnimation();
    setValue(['Viva', 'Casino']);
  };

  return (
    <div className='slotCont w-full'>
        <h1 className='text-center text-3xl mb-16'>En Çok Kazandıran ({date})</h1>
        <div className='slot text-center text-3xl'>
            <span>
                <SlotCounter value={value[0]} dummyCharacters={'ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ?'.split('')} duration={3} ref={counterRef} /></span>
            <span className='pl-6'>
                <SlotCounter value={value[1]} dummyCharacters={'ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ?'.split('')} duration={3} ref={counterReff} />
            </span>
        </div>
        <div className='w-full text-center'>
            <button className='bg-white text-black font-bold text-center border-2 border-solid border-red-900 p-3 mt-16 rounded-2xl' onClick={handleStartClick}>Şansını Dene!</button>
        </div>
    </div>
  );
}
