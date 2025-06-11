import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import generateRoomIDS  from "../utils/generateRoomIDs"


const Home = () => {


    const [roomCode, setRoomCode] = useState('')

    const [name, setName] = useState('')
    const [capacity, setCapacity] = useState(4)

    const navigate = useNavigate()
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // TODO: add validation logic after
        if (roomCode.trim()) {
            navigate(`/room/${roomCode}`)
        }
    }

    const handleCreateRoom = () => {
        const id = generateRoomIDS()
        console.log("generated id: ", id)
        navigate(`/room/${id}`)
    }


  return (
    <div>

        <div>create a room</div>

            <form onSubmit={handleCreateRoom} >

                <div className="">name</div>
                <input 
                type="text"
                placeholder=""
                value={name}
                onChange={(e) =>{setName(e.target.value)}}
                />
            
                <div className=""> capacity </div>
                <input 
                type="range"
                max={8}
                min={2}
                placeholder=""
                value={capacity}
                onChange={(e)=>{setCapacity(Number(e.target.value))}}
                />
                <div>{capacity}</div>
                <button type="submit"> create </button>

            </form> 


        <form onSubmit={handleSubmit} >
        <div>have a code? join the room now</div>
        <input 
        type="text"
        placeholder=""
        value={roomCode}
        onChange={(e) =>{setRoomCode(e.target.value)}}
        />
        <button type="submit">join</button>
      </form>

    </div>
  )
}

export default Home
