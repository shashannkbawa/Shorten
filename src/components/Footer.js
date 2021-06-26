import React from 'react'
import styled from 'styled-components'

import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import instagram from '../images/icon-instagram.svg';

const Foot = styled.div`
font-family: 'Poppins', sans-serif;
font-size: 18px;
background-color: #35323e;
display: flex;
height: 300px;
@media only screen and (max-width:375px){
    display: list-item;
    list-style-type: none;
    height: 100%;
    align-content: center;
    justify-content: center;
    
}
`;
const Image = styled.div`
font-weight: 700;
font-size: 40px;
color : white;
margin-left: 10%;
padding-top:40px;
margin-right: 13%;
@media only screen and (max-width:375px){
    margin-left: 15%;
    text-align: center;
    align-content: center;
    justify-content: center;
    
}

`;
const ListHeading = styled.div`
font-family: 'Poppins', sans-serif;
font-weight: 700;
font-size: 18px;
color: white;
margin-left: 50px;
margin-top: 50px;
margin-bottom: 20px;
padding-left: 20px;
&:hover{
    color: #2acfcf;
}
@media only screen and (max-width:375px){
    padding-left: 0px;
    text-align: center;
    margin-left: 0px;
    
}

`;
const ListItem = styled.li`
font-family: 'Poppins', sans-serif;
list-style-type: none;
font-weight: 500;
font-size: 18px;
color: #bfbfbf;
margin-top: 10px;
&:hover{
    color: #2acfcf;
}

`;
const SocialHandles = styled.div`
margin-left: 80px;
margin-top: 50px;
`;
const Facebook = styled.img`
padding-left: 20px;
&:hover{
    background-color: #2acfcf;
}
`;
const Twitter = styled.img`
padding-left: 20px;
`;
const Pinterest = styled.img`
padding-left: 20px;
`;
const Instagram = styled.img`
padding-left: 20px;
`;


function Footer() {
    return (
        <>
        <Foot>
            <Image>Shortly</Image>
            <ListHeading>Features
                <ListItem>Link Shortening</ListItem>
                <ListItem>Branded Links</ListItem>
                <ListItem>Analytics</ListItem>
            </ListHeading>
            <ListHeading>Resources
                <ListItem>Blog</ListItem>
                <ListItem>Developers</ListItem>
                <ListItem>Support</ListItem>
            </ListHeading>
            <ListHeading>Company
                <ListItem>About</ListItem>
                <ListItem>Our Teams</ListItem>
                <ListItem>Careers</ListItem>
                <ListItem>Contact</ListItem>
            </ListHeading>
            <SocialHandles>
                <Facebook src = {facebook} />
                <Twitter src = {twitter} />
                <Pinterest src = {pinterest} />
                <Instagram src = {instagram} />
                
            </SocialHandles>

            
        </Foot>
        </>
    )
}

export default Footer
