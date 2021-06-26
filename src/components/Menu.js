import React from 'react'
import styled from 'styled-components'

const Top = styled.div`
font-family: 'Poppins', sans-serif;
font-weight: 500 ,700;
font-size: 18px;
margin-left: 10%;
margin-right: 10%;
display: flex;
justify-content: start;
flex-direction: row;
@media only screen and (max-width:375px){
    display: list-item;
    list-style-type: none;
    justify-content: start;
    flex-direction: column;
    background-color: #3b3054;
   border-radius: 10px;
    margin-top: 0px;
    padding-bottom: 10%;
}
    
`;

const NavBar = styled.div`
display: flex;
justify-content: start;
flex-direction: row;

@media only screen and (max-width:375px){
    display: flex;
    justify-content: start;
    flex-direction: column;
    margin-top: 20px;
    margin-left: 0px;
    margin-right: 15px;
}
`;
const Button = styled.div`

padding-top: 20px;
padding-bottom: 40px ;
padding-left: 15px;
padding-right: 15px;

color: #9e9aa7;
border-radius: 10px;

&:hover{
    color: #232127;
}
@media only screen and (max-width: 375px) {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 20px;
        padding-bottom:20px ;
        

        font-family: 'Poppins', sans-serif;
font-weight: 500 ;
font-size: 18px;
color: white;
  font-weight: 700;
  margin-top: 0%;
  width: 100%;
    }

`;
const SignIn = styled.div`
display: flex;
justify-content: end;
margin-left: 45%;
margin-top: 10px;
background-color: none;
@media only screen and (max-width: 375px) {
   display: list-item;
   justify-content: center;
   align-items: center;
   margin-left: 30px;
   margin-right: 20px;
   padding-left: 20px;
   border-top-style: solid;
  border-top-color: #9e9aa7;
  border-top-width: 1px;
  padding-top: 10px;
  
  

}

`;
const LogIn = styled.button`
font-family: 'Poppins', sans-serif;
font-weight: 500 ;
font-size: 18px;
height: 50px;
width: 130px;
text-align: center;
background: none;
color:  #9e9aa7;
margin-right: 30px;
padding-left: 10px ;
padding-right: 10px;
padding-top: 5px;
padding-bottom: 5px;
border-radius: 20px;
border: none;
&:hover{
    background-color: #dfdfdf;
}
@media only screen and (max-width: 375px) {
    display: flex;
    justify-content: center;
    width: 90%;
    text-align: center;
    margin-bottom: 20px;
    color: white;
  font-weight: 700;
   
}


`;
const SignUp = styled.button`
font-family: 'Poppins', sans-serif;
font-weight: 500 ;
font-size: 18px;
height: 50px;
width: 130px;
text-align: center;
background: ${props => props.primary ? "#2acfcf" : "#bfbfbf"};
color: ${props => props.primary ? "white" : "#9e9aa7"};
padding-left: 10px ;
padding-right: 10px;
padding-top: 5px;
padding-bottom: 5px;
border-radius: 20px ;
border: none;
&:hover{
    background-color: 	rgba(0,255,255,0.7);
}
@media only screen and (max-width:375px){
    width: 90%;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 0%;
    padding-left: 0%;
    color: white;
  font-weight: 700;
    
}

`;



export default function Menu() {
    return (
        <Top>
        <NavBar >
               

               <Button>Features</Button>
               <Button>Pricing</Button>
               <Button>Resources</Button>
               </NavBar>
               <SignIn>
               <LogIn>Log In</LogIn>
               <SignUp primary >Sign Up</SignUp>
               </SignIn>
            
        </Top>
    )
    }    
