import React, { useState } from 'react'

const Home = () => {
  const [text, setText] = useState('')
  const [result, setResult] = useState([])
  const reg = (inputText) => {
    const lines = inputText.split('\n')
    const data = lines.map((line) => {
      const match = line.match(/от (\d{1,2}\.\d{1,2}\.\d{4}).*?((\d*\s)+?\d+,\d+)/)
      if (match && match.length >= 3) {
        const [, date, amount] = match
        return { date, amount }
      }
      return null
    })

    const validData = data.filter((it) => it !== null)
    return validData
  }

  const handleInputText = (e) => {
    const input = e.target.value
    setText(input)
    setResult(reg(input))
  }
  return (
    <div className="w-full flex">
      <div className="w-1/2 ml-3">
        <textarea
          placeholder="Enter data from 1C"
          onChange={handleInputText}
          value={text}
          className=" border-hidden h-full w-full"
          rows={25}
          cols={40}
        />
      </div>
      <div className="border-l-2 border-black px-4 flex flex-col text-center">
        <ul>
          {result.map((it, index) => (
            <li key={index}>{`${it.date} на суму ${it.amount} грн.`}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home
