import React from 'react'
import {Link} from "react-router-dom"
import {HashLink} from "react-router-hash-link"
const Header = () => {
  return (
    <nav>
        <h1>Mayank jain.</h1>
        <main>
            <HashLink to={"/#home"}>HOME</HashLink>
            <HashLink to={"/contact"}>CONTACT</HashLink>
            <HashLink to={"/#about"}>ABOUT</HashLink>
            <HashLink to={"/#brand"}>BRAND</HashLink>
            <HashLink to={"/services"}>SERVICES</HashLink>
        </main>
    </nav>
  )
}

export default Header