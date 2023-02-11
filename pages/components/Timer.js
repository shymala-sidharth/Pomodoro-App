import React from 'react'

export default function Timer() {
  const options = ['Pomodoro', 'Short Break', 'Long Break']

  return (
    <div className="w-10/12 mx-auto pt-5 text-white text-2xl flex justify-center items-center mt-10">
      <div className="flex gap-10 items-center">
        {options.map((option, index) => {
          return (
            <h1
              key={index}
              className={` ${
                index === 0 ? 'bg-gray-500 bg-opacity-30' : ''
              } p-1 cursor-pointer transition-all rounded`}
            >
              {option}
            </h1>
          )
        })}
      </div>
    </div>
  )
}
