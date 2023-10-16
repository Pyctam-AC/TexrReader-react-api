
import { useState } from "react";

import './App.css'
import * as api from '../utils/api'

function App() {

  const [totalTime, setTotalTime] = useState(null);

  const [totalMashineTime, setTotalMashineTime] = useState(null)

  const [totalMashineDownTime, setTotalMashineDownTime] = useState(null)

  const [totalProcessAmount, setTotalProcessAmount] = useState(null)

  const [averageQuantity, setAverageQuantity] = useState(null)

  const [maxOperatingTime, setMaxOperatingTime] = useState(null)

  const [maxDownTime, setMaxDownTime] = useState(null)

  const requestTotalTime = () => {
    api.getTotalTime()
      .then((res) => {
        setTotalTime(res)
      })
      .catch((err) => console.log(err))
  }
  
  const requestMashineTimeWork = () => {
    api.getMashineTimeWork()
      .then((res) => {
        setTotalMashineTime(res)
      })
      .catch((err) => console.log(err))
  }

  const requestMashineDownTime = () => {
    api.getMashineDownTime()
      .then((res) => {
        setTotalMashineDownTime(res)
      })
      .catch((err) => console.log(err))
  }

  const requestTotalProcessAmount = () => {
    api.getProcessAmount()
      .then((res) => {
        setTotalProcessAmount(res)
      })
      .catch((err) => console.log(err))
  }

  const requestAverageQuantity = () => {
    api.getAverageQuantity()
      .then((res) => {
        setAverageQuantity(res)
      })
      .catch((err) => console.log(err))
  }

  const requestMaxOperatingTime = () => {
    api.getMaxOperatingTime()
      .then((res) => {
        setMaxOperatingTime(res)
      })
      .catch((err) => console.log(err))
  }

  const requestMaxDownTime = () => {
    api.getMaxDownTime()
      .then((res) => {
        setMaxDownTime(res)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className='main'>
      <h1 className='title'>Запрос логов</h1>
      <div className='container'>
        <div className='container__box'>
          <button
            type="button"
            onClick={requestTotalTime}
          >
            Получить общее время работы
          </button>
          <button
            type="button"
            onClick={requestMashineTimeWork}
          >
            общее время работы оборудования
          </button>
          <button
            type="button"
            onClick={requestMashineDownTime}
          >
            общее время простоя оборудования
          </button>
          <button
            type="button"
            onClick={requestTotalProcessAmount}
          >
            общее количество обработанных единиц продукции
          </button>
          <button
            type="button"
            onClick={requestAverageQuantity}
          >
            средняя скорость обработки единиц в час
          </button>
          <button
            type="button"
            onClick={requestMaxOperatingTime}
          >
            максимальное время работы оборудования
          </button>
          <button
            type="button"
            onClick={requestMaxDownTime}
          >
            максимальное время простоя оборудования
          </button>
        </div>
        <div className='container__box'>
          <p>{totalTime}</p>
          <p>{totalMashineTime}</p>
          <p>{totalMashineDownTime}</p>
          <p>{totalProcessAmount}</p>
          <p>{averageQuantity}</p>
          <p>{maxOperatingTime}</p>
          <p>{maxDownTime}</p>
        </div>
      </div>
    </div>
  )
}

export default App
