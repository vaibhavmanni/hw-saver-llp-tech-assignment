import React, { useState, useEffect } from "react"
import NasaApi from "../nasa-api"
import "./App.css";
import Navigation from './Navigation/navigation'

const App = () => {
  const [apod, setApod] = useState({})

  useEffect(() => {
    NasaApi.getApod().then(apodData => {
      setApod(apodData.data)
    })
  }, [])

  return (
    <div style={{ backgroundColor: 'transparent' }}>
      <Navigation/>
      <img src={apod.url} alt="APOD" width="100%" height="auto" style={{marginTop: 5}} />
      <div style={{ padding: 30 }}>
      {apod && (
        <article>
          <header>
            {apod.title} - <i>{apod.date}</i>
          </header>
          <h2 style={{textAlign: "center"}}>Astronomy Picture of the Day</h2>
          <p style={{ marginLeft: 'auto', marginRight: 'auto', width: '50%'}}>{apod.explanation}</p>
          {/* <pre
            style={{
              overflowX: "auto",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
            }}
          >
            <hr />
            {JSON.stringify(apod, null, 2)}
          </pre> */}
        </article>
      )}
      </div>
    </div>
  )
}

export default App


