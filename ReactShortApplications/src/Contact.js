// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState, useRef } from 'react';
import ContactChild from './ContactChild';

function App() {
  const [data, setData] = React.useState(null)
  const [search, setSearch] = React.useState("")
  const [selectedData, setSelectedData] = useState("")

  // This is a way to used useRef Hook's
  const xyz = useRef()
  console.log('xyz', xyz)


    React.useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
        console.log('response', response)
        setData(response.data)
        }).catch(error => console.log(error));
    }, [])
    if(!data) return null;

    const mdata = () => {
        // console.log('search' ,data.filter(val => val.email.match(search)))
        return data.filter(val => val.email.match(search))
    }

  return (
    <div className="App" ref={xyz}>
      <header className="App-header">
        <h4>Contact application</h4>
        <input placeholder='Search email id' type='search' onChange={e => setSearch(e.target.value)}></input>
        {mdata().map((val) => 
          (
          <div>
            <li>{val.email}</li>
            {/* The arrow function used inside onClick bcz it will call only when user click */}
          <button onClick={() => setSelectedData(val.email)}>Click me</button>
          </div>
          )
          )}
          <ContactChild value={selectedData}/>

      </header>
    </div>
  );
}

export default App;
