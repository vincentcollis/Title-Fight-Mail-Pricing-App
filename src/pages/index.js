import React, {useState} from 'react'
import styled from 'styled-components';

const mailFormat =[
  "13 x 8.5 Postcard",
  "11 x 6 Postcard",
  "17 x 10.5 1-Fold",
  "3.5 x 8.5 Walk Card",
]



export default function IndexPage() {

  const [quanity, setQuanity] = useState()
  const [total, setTotal] = useState(0)

  const formHandler = (e) => {
    if(e.target.name == "quanity") {
      setQuanity(e.target.value)
    }
  }
  

  return (
    <div>
      <form>
        <p>
          <label for='format'> Format:</label>
          <select id="format" name="format">
            {mailFormat.map(x => <option>{x}</option>)}
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
        {total}
      </div>

    </div>
  )
}