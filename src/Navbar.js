import React ,{useEffect,useState}from 'react'
import './Navbar.css'
function Navbar() {
    const [show, handleshow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY >150){
                handleshow(true);
            } else handleshow(false);
        })
        return () => {
           
        }
    }, [])
    return (
        <div className = {`nav ${show && "nav__black"}`}>
            <h1 className = 'Logo' style={{
                color:'rgb(170, 9, 9)'
            }}>
                GoLIVE
            </h1>
            <h1 className = 'Avatar' style={{
                color:'rgb(170, 9, 9)'
            }}>
                Aakash
            </h1>
            
        </div>
    )
}

export default Navbar
