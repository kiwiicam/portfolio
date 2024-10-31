import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";


import '../css/Navbar.css'

function Navbar() {
    const [open, setOpen] = useState(false);
    function showMenu() {
        setOpen(prevState => !prevState);
    }
    return (
        <>
            <div className='container'>
                {open ?

                    <div className='container-cross'>

                        <RxCross1 className='cross' onClick={showMenu} />
                        <div className='box'>

                            <Link to="">
                                <h2>About me</h2>
                            </Link>
                            <Link to="">
                                <h2>Experience</h2>
                            </Link>
                            <Link to="">
                                <h2>Projects</h2>
                            </Link>
                            <Link to="">
                                <h2>Contact me</h2>
                            </Link>
                        </div>
                    </div>
                    :
                    <div className='dropDown' >
                        <RxHamburgerMenu className='menu' onClick={showMenu} />
                    </div>
                }
            </div>
        </>
    )
}

export default Navbar
