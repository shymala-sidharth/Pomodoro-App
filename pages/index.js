import Head from 'next/head'
import { useState } from 'react'
import Navigation from './components/Navigation'
import Timer from './components/Timer'

export default function Home() {
  const [timeRemaining, setTimeRemaining] = useState(25 * 60)
  const [timerRunning, setTimerRunning] = useState(false)
  const [intervalId, setIntervalId] = useState(null)

  const minutes = Math.floor(timeRemaining / 60)
  const seconds = timeRemaining - minutes * 60

  function startTimer() {
    if (timerRunning) {
      return timerRunning
    }
    setTimerRunning(true)

    const id = setInterval(() => {
      setTimeRemaining((prevTime) => {
        const newTime = prevTime - 1
        if (newTime === 0) {
          stopTimer()
        }
        return newTime
        console.log(newTime)
      })
    }, 1000)
    setIntervalId(id)
    console.log(id)
  }

  function stopTimer() {
    if (!timerRunning) {
      return
    }
    clearInterval(intervalId)
    console.log(clearInterval)
    setTimerRunning(false)
  }

  function pauseTimer() {
    if (!timerRunning) {
      return
    }
    clearInterval(intervalId)
    setTimerRunning(false)
  }

  function resumeTimer() {
    if (timerRunning) {
      return
    }
    const id = setInterval(() => {
      setTimeRemaining((prevTime) => {
        const newTime = prevTime - 1
        if (newTime === 0) {
          stopTimer()
        }
        return newTime
      })
    }, 1000)
    setIntervalId(id)
    setTimerRunning(true)
  }

  function resetTimer() {
    if (timerRunning) {
      stopTimer()
    }

    setTimeRemaining(25 * 60)
  }

  return (
    <>
      <Head>
        <title>Pomodoro</title>
      </Head>

      <main className="bg-teal-900 min-h-screen">
        <div>
          <Navigation />
          <Timer />
        </div>
        <div>
          <div className="flex justify-center mx-auto text-white text-9xl font-bold p-20">
            <h2>
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </h2>
          </div>
          <div className="flex flex-row gap-5 justify-center">
            <button
              className="text-white text-2xl bg-gradient-to-r from-lime-500 via-lime-600 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
              onClick={startTimer}
            >
              Start
            </button>
            <button
              className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={stopTimer}
            >
              Stop/Pause
            </button>
            <button
              className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={resumeTimer}
            >
              Resume
            </button>
            <button
              className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
