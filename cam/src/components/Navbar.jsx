import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

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

                        <AiOutlineClose className='cross' onClick={showMenu} />
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
                        <IoMenu className='menu' onClick={showMenu} />
                        <h2>Menu</h2>
                    </div>
                }
                <div className='end-icons'>
                    <MdOutlineMail className='mail'/>
                    <CiLinkedin className='linked-in'/>
                    <FaGithub className='github'/>
                </div>
            </div>
        </>
    )
}

export default Navbar
