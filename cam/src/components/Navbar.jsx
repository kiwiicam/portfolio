import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

function Navbar() {
    return (
        <>
            <div className='container'>

                <div className='box'>

                    <div className='nav'>
                        <h2>About</h2>
                    </div>
                    <div className='nav'>
                        <h2>Experience</h2>
                    </div>
                    <div className='nav'>
                        <h2>Projects</h2>
                    </div>
                    <div className='nav'>
                        <h2>Contact</h2>
                    </div>
                </div>

                <div className='end-icons'>
                    <MdOutlineMail className='mail' />
                    <CiLinkedin className='linked-in' />
                    <FaGithub className='github' />
                </div>
            </div>
        </>
    )
}

export default Navbar
