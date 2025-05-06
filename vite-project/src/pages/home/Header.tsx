import { useEffect, useState } from "react"

type characterProps = {
    _id: number,
    name: string,
    imageUrl: string,
    sourceUrl: string,
}

const Header = () => {
    const[characters,setCharacters] = useState ( [])

    useEffect(() => {
        
    }, [characters])
    
    return (
        <header style={({
            backgroundColor: "#213547"
        })}>
            
            <img src="Disney-logo.png"
            style={({width: "6.25rem"})}/>
        </header>
    )
}

export default Header