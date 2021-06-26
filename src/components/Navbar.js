import React, { useState } from 'react'
import styled from 'styled-components'

import logo from '../images/logo.svg'
import menuImg from '../images/HamMenu.png'
import Menu from './Menu'

//Styled Components
const Whole = styled.div`
display: flex;
justify-content: space-between;
width: 20%;
margin-right: 0px;
padding-top: 10px;
margin-left: 10%;
@media only screen and (max-width: 375px) {
    width: 350px;
    margin-left: 0px;
    margin-top: 0px;
    display: list-item;
    list-style-type: none;
    margin-bottom: 20px;
    
}
`;

const NavbarChild = styled.div`
@media only screen and (max-width: 375px) {
    display: flex;
    justify-content: flex-start;
    height: 50px;
   
}


`;

const Image = styled.div`   
margin-top: 10px;
margin-right: 0%;
margin-left: 11%;
display:flex;
justify-content: start;
align-items: flex-start; 

@media only screen and (max-width: 375px) {
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    margin-right: 0px;
    margin-left: 10px;
}
`;

const MenuImage = styled.img`
height: 30px;
width: 30px;
background-color: white;
margin-left: 50%;
margin-bottom: 20%;
margin-top: 0%;
padding-top: 10px;
`;



function Navbar() {
    const [menu, setMenu] = useState(false)

   
    //To show menu button on click
    function myMenu() {
        setMenu( !menu );
    }
    

    //To show alert on different screen width
    if (window.screen.width > 375 && window.screen.width < 1440) {
        alert("Site cannot work")

    }
    if (window.screen.width === 375) {
        return (
            <>
                <Whole >
                    <NavbarChild >
                        <Image><img alt="" src={logo} /></Image>
                        <MenuImage src={menuImg} onClick={myMenu} />
                    </NavbarChild>
                    {menu === true ? <Menu /> : ""}
                </Whole>
            </>
        )
    }
    else {
        return (
            <Whole>
                <Image><img alt="" src={logo} /></Image>
                <Menu />
            </Whole>
        )
    }
}

export default Navbar
