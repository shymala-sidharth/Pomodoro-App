import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [timeRemaining, setTimeRemaining] = useState(25 * 60)
  const [timerRunning, setTimerRunning] = useState(false)
  const [intervalId, setIntervalId] = useState(null)

  const minutes = Math.floor(timeRemaining / 60)
  const seconds = timeRemaining - minutes * 60

  function startTimer() {
    if (timerRunning) {
      return
    }
    setTimerRunning(true)

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
  }

  function stopTimer() {
    if (!timerRunning) {
      return
    }
    clearInterval(intervalId)
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
        <title>Pomodoro App</title>
      </Head>
      <main>
        <h1>Pomodoro App</h1>

        <div>
          <h2>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </h2>
        </div>

        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop/Pause</button>
        <button onClick={resumeTimer}>Resume</button>
        <button onClick={resetTimer}>Reset</button>
      </main>
    </>
  )
}
