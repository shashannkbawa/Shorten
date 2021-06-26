import React, { useState } from 'react'
import logo from '../images/logo.svg'
import styled from 'styled-components'
import menuImg from '../images/HamMenu.png'
import Menu from './Menu'

const Image = styled.div`
    
    margin-top: 10px;
    margin-right: 60%;
    margin-left: 11%;
    display:flex;
    justify-content: start;
    align-items: flex-start; 
    @media only screen and (max-width: 375px) {
        display: flex;
        justify-content: flex-start;
        align-content: flex-start;
        margin-right: 0px;
    
    }
    `;






const MenuImage = styled.img`
    height: 30px;
    width: 30px;
    background-color: white;
    margin-left: 90%;
    margin-bottom: 20%;
    margin-top: 0%;
    padding-top: 10px;

`;
const Whole = styled.div`
display: flex;
justify-content: space-between;
width: 20%;
margin-right: 40%;
padding-top: 10px;
@media only screen and (max-width: 375px) {
    width: 55%;
    
}
`;




function Navbar() {
    const [menu, setMenu] = useState(false)
    function myMenu() {
        setMenu(true);


    }

    if (window.screen.width > 375 && window.screen.width < 1440) {
        alert("Site cannot work")

    }
    if (window.screen.width === 375) {
        return (
            <>
                <Whole>
                    <Image><img src={logo} /></Image>

                    <MenuImage src={menuImg} onClick={myMenu} />
                    {menu === true ? <Menu /> : ""}

                </Whole>






            </>

        )
    }
    else {
        return (
            <Whole>

                <Image><img src={logo} /></Image>




                <Menu />




            </Whole>


        )

    }







}

export default Navbar