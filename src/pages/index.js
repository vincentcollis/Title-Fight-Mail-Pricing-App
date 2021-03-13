import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

export default function IndexPage() {

  const [quanity, setQuanity] = useState('')
  const [format, setFormat] = useState("13 x 8.5 Postcard")
  const [costPerPeice, setCostPerPeice] = useState(.76)
  const [total, setTotal] = useState(0) 
  const [orders, setOrders] = useState([])
  

  const calcCostPerPeice = (x) => {
    let num;

    switch (x) {
      case "13 x 8.5 Postcard":
        num = .76
        break;
      case "11 x 6 Postcard":
        num = .71
        break;
      case "17 x 10.5 1-Fold":
        num = .86
        break;
      case "8.5 x 11 2-Fold":
        num = .74
        break;
      case "17 x 10.5 2-Fold":
        num = .82
        break;
      case "8.5 x 11 Postcard":
        num = .78
        break;
      case "9 x 4 Walk Card":
        num = .00
        break;
      default:
        break;
    }
    
    return num
  }

  const mailFormat =[
    "13 x 8.5 Postcard",
    "11 x 6 Postcard",
    "17 x 10.5 1-Fold",
    "8.5 x 11 2-Fold",
    "17 x 10.5 2-Fold",
    "8.5 x 11 Postcard",
    "9 x 4 Walk Card"
  ]
  
  const calculateTotal = (x = orders) => {
    let sum = 0
    // console.log(x)
    for(let i = 0; i < x.length; i++) {
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

  
  return (
    <div>
      <form>
          <label > Format:</label>
          <select id="format" name="format" onChange={formHandler}>
            {mailFormat.map((x,i) => <option key={i} value={x} > {x} </option>)}
          </select>
          <p/>
          <label > Quanity: </label>
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