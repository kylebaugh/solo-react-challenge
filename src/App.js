import './App.css';

import {useState} from 'react'
import axios from 'axios'

import Politician from './components/Politician'

function App() {
  const [searchBy, setSearchBy] = useState('')
  const [searchState, setSearchState] = useState('')
  const [repArray, setRepArray] = useState([])

  const handleChange = (e) => {
    setSearchBy(e.target.value)
  }

  const handleSearchState = (e) => {
    setSearchState(e.target.value)
  }

  const handleSearch = (e) => {
    if(searchBy === 'Representative'){
      axios.get(`http://localhost:3456/representatives/${searchState}`)
        .then(res => {
          console.log('rep front end hit')
          console.log(res.data.results)
          setRepArray(res.data.results)
        })
        .catch(err => {
          console.log(err)
        })
      }else if(searchBy === 'Senator'){
        axios.get(`http://localhost:3456/senators/${searchState}`)
          .then(res => {
            console.log('rep front end hit')
          })
      }else{
      alert('Selection must be made')
      return
    }

  }


  return (
    <div className="App">
      <h2>Who's My Representative?</h2>
      
      <div id='dropDownSection'>

        <section id='repSelect' className='dropDown'>
          Representative or Senator?
          <label>
            <select value={searchBy} onChange={handleChange}>
              <option value='Choose one...'>Choose one...</option>
              <option value='Representative'>Representative</option>
              <option value='Senator'>Senator</option>
            </select>
          </label>
        </section>

        <section id='stateSelect' className='dropDown'>
          Which state?

          <label>
            <select value={searchState} onChange={handleSearchState}>
              <option value="AL">Choose one...</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </label>
        </section>

        <button onClick={handleSearch}>Find My Reps!</button>
      </div>

    <div id='fullResults'>
      <section id='resultHeaders'>
          <h3>Representatives</h3>
          <h3>Info</h3>
      </section>

          <section id='results'>
            {repArray.map((rep) => {
              let id = rep.name
              return (
                <Politician 
                key={id}
                item={rep}
                />
                )
              })}
          </section>
        </div>

    </div>
  );
}

export default App;
