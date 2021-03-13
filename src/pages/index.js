import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

export default function IndexPage() {

  const [quanity, setQuanity] = useState()
  const [format, setFormat] = useState("13 x 8.5 Postcard")
  const [costPerPeice, setCostPerPeice] = useState(25)
  const [total, setTotal] = useState(0)

  const [orders, setOrders] = useState([])
  const [orderTotal, setOrderTotal] = useState(0)

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
  
  const calculateTotal = (x = orders) => {
    let sum = 0
    console.log(x)
    for (let i = 0; i < x.length; i++) {
      const element = x[i].total
      sum = sum + element
    }  

    return sum
  }

  

  const formHandler = (e) => {
    e.preventDefault()

    let key = e.target.name  
    let value =  e.target.value

    switch (key) {
      case 'format':
        setFormat(value)
        setTotal(calcCostPerPeice(value)*quanity)
        break;
      case 'quanity':
        setQuanity(value)
        setTotal(value*costPerPeice)
        break;
      case 'submit':
        let order = {format: format, quanity: quanity, total: total}
        setOrders([...orders,order])
      default:
        break;
    }
  }
  
  // calculateTotal(orders)
  return (
    <div>
      <form>
          <label for='format'> Format:</label>
          <select id="format" name="format" onChange={formHandler}>
            {mailFormat.map((x,i) => <option key={i} value={x} > {x} </option>)}
          </select>
          <p/>
          <label for="quanity"> Quanity: </label>
          <input type="number" name="quanity" onChange={formHandler} value={quanity} placeholder="5000"></input>
          <p/>
          <button type="submit" name="submit" onClick={formHandler}> Submit </button>
      </form>
      
      <div>
        {orders.map((x,i) => <div key={i}> Format: {x.format} Quanity: {x.quanity} Total: {x.total} </div>)}
      </div> <p/>

      <div>
        Total Cost: {calculateTotal()}
      </div>    

    </div>
  )
}