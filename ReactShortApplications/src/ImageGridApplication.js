import React, { useState, useEffect } from 'react'
import './card.css'

export default function ImageGridApplication () {
    const [data, setData] = useState()
    const [search, setSearch] = React.useState("")

    useEffect(() => {
        const value = async () => {
            const res = await fetch('https://api.npoint.io/20c1afef1661881ddc9c')
            const result = await res.json()
            setData(result)
        }
        value()
    }, [])
    if(!data) return null;
    const mdata = () => {
        return data && data.playerList && data.playerList.filter((val) => val.PFName.match(search))
    }

    return (
        <div>
            <input placeholder='Search player' type='search' onChange={e => setSearch(e.target.value)}></input>
            {mdata().map((val) => (
                <div className='row'>
                <div className='column'>
                  <div className='card'>
                        <h4>Player Name: {val.PFName}</h4>
                        <h4>Skill Set: {val.SkillDesc}</h4>
                        <h4>UpComingMatchesList: {`${val.UpComingMatchesList[0].CCode} vs ${val.UpComingMatchesList[0].VsCCode}`}</h4>
                        <h4>Next match date:  {val.UpComingMatchesList[0].MDate}</h4>
                        <img key={val?.Id} src={require(`./player-images/${val?.Id}.jpg`)} alt={`Images ${val?.Id}`}/>
                  </div>
                </div>
                </div>
                
            ))}
        </div>
    )
}