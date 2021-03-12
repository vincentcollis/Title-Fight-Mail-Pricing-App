import React, {useState, useEffect} from 'react'
import styled from 'styled-components';




export default function IndexPage() {

  const [quanity, setQuanity] = useState(0)
  const [format, setFormat] = useState("13 x 8.5 Postcard")
  const [costPerPeice, setCostPerPeice] = useState(25)
  const [total, setTotal] = useState(0)

  const calcCostPerPeice = (x) => {
    let num;
    switch (x) {
      case "13 x 8.5 Postcard":
        num = 25
        break;
      case "11 x 6 Postcard":
        num = 50
      default:
        break;
    }
    console.log(num)
    return num
  }

  const mailFormat =[
    "13 x 8.5 Postcard",
    "11 x 6 Postcard",
    "17 x 10.5 1-Fold",
    "3.5 x 8.5 Walk Card",
  ]
  
  const calculateTotal = (x, y) => {
    let num = x * y
    setTotal(num)
  }

  const formHandler = (e) => {
    let key = e.target.name  
    let value =  e.target.value

    switch (key) {
      case 'format':
        // console.log(value)
        setFormat(value)
        setTotal(calcCostPerPeice(value)*quanity)
        
        break;
      case 'quanity':
        // console.log(value)
        setQuanity(value)
        setTotal(value*costPerPeice)
        break;
      default:
        break;
    }
  }

  console.log(`
  quanity: ${quanity}
  format: ${format}
  total: ${total}
  `)

  // calculateTotal(quanity, costPerPeice)

  return (
    <div>
      <form>
        <p>
          <label for='format'> Format:</label>
          <select id="format" name="format" onChange={formHandler}>
            {mailFormat.map(x => <option key={x} value={x} > {x} </option>)}
          </select>
        </p>
        <p>
          <label for="quanity"> Quanity: </label>
          <input type="number" name="quanity" onChange={formHandler} value={quanity} placeholder="5000"></input>
        </p>

        {/* <p>
          <label for="total"> Total: </label>
          <input type="text" name="total" value={total}> </input>
        </p> */}
      </form>
      
      <div>
        {/* {quanity * costPerPeice} */}
        {total}
      </div>

    </div>
  )
}