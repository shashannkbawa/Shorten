import React from 'react'

import styled from 'styled-components'

import icon1 from '../images/icon-brand-recognition.svg'
import icon2 from '../images/icon-detailed-records.svg'
import icon3 from '../images/icon-fully-customizable.svg'

//Styled Components
const About = styled.div`
font-family: 'Poppins', sans-serif;
margin-top: 0px;
background-color: #dfdfdf;
padding-top: 100px ;
margin-bottom: 0%;
display: list-item;
justify-content: center;
align-items: center;

@media only screen and (max-width:375px){
    display: list-item;
    list-style-type: none;
}

`;

const Heading = styled.h1`
font-family: 'Poppins', sans-serif;
color: #232127;
font-size: 50px;
font-weight: 700;
display: flex;
justify-content: center;
align-items: center;
margin-top: 100px;
@media only screen and (max-width:375px){
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    color: #232127;
}

`;

const Details = styled.p`
color:#9c9c9c;
font-size: 18px;
font-weight: 500;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 0%;
@media only screen and (max-width:375px){
    text-align: center;
}

`;

const BackgroundColour = styled.div`
background: #dfdfdf;
margin-bottom: 0%;
`;

const Cards = styled.div`
display: flex;
justify-content: center;
margin-top: 0px;
background-color: #dfdfdf;
padding-top: 100px ;
padding-bottom: 100px;
margin-left: 10%;
margin-right: 10%;
@media only screen and (max-width:375px){
    display: list-item;
    list-style-type: none;
    text-align: center;
    width: 90%;
    margin-left: 25px;
    
}

`;

const Card1 = styled.div`
background-color: white;
margin-top: 0px;
margin-left: 10px;
margin-right: 20px;
height: 300px;
border-radius: 10px;
&:hover{
    
    transition: 0.3s linear;
    transform: scale(1.05);
}

`;

const Card2 = styled.div`
background-color: white;
margin-top: 70px;
border-radius: 10px;
margin-left: 10px;
margin-right: 20px;
height: 300px;
&:hover{
    
    transition: 0.3s linear;
    transform: scale(1.05);
}

`;

const Card3 = styled.div`
background-color: white;
margin-top: 140px;
border-radius: 10px;
margin-left: 10px;
margin-right: 10px;
height: 300px;
&:hover{
    
    transition: 0.3s linear;
    transform: scale(1.05);
}
@media only screen and (max-width:375px){
    margin-top: 70px;
}

`;

const CardImg = styled.img`
display: initial;
background-color: #3b3054;
padding: 20px;
border-radius: 50%;
margin-top: -50px;
margin-left: 20px;

`;

const CardHeading = styled.h2`
font-family: 'Poppins', sans-serif;
font-weight: 700;
margin-left: 10%;
color: #232127;
@media only screen and (max-width:375px){
    margin-left: 10px;
}
`;

const CardPara = styled.p`
font-family: 'Poppins', sans-serif;
font-weight: 500;
font-size: 18px;
color: #9c9c9c;
margin-left: 10%;
@media only screen and (max-width:375px){
    text-align: center;
    margin-left: 10px;
    font-size: 17px;
}
`;


const Booster = styled.div`
background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1440' height='250'%3E%3Cg fill='%234B3F6B' fill-rule='evenodd'%3E%3Cpath d='M830-63.482C830 19.351 854.36 78.678 944.732 117c90.371 38.321 177.686 3.352 265.277 23.4 87.59 20.048 87.59 149.195 170.077 228.671 82.486 79.476 256.405 98.781 397.82 18.15 141.415-80.632 205.52-268.896 163.267-379.902C1898.919-103.687 1817.943-205 1427.236-205S830-146.314 830-63.482zM-263.351 570.909c29.685 77.331 73.689 123.988 171.79 127.377 98.102 3.39 167.085-60.547 256.043-73.22 88.958-12.674 135.24 107.895 240.73 152.532 105.488 44.638 274.775.333 377.9-125.622C886.24 526.021 878.62 327.29 799.392 238.798 720.162 150.307 608.257 84.743 243.5 224.76c-364.757 140.017-536.537 268.818-506.852 346.149zM-514-377.482c0 82.833 24.36 142.16 114.732 180.482 90.371 38.321 177.686 3.352 265.277 23.4 87.59 20.048 87.59 149.195 170.077 228.671 82.486 79.476 256.405 98.781 397.82 18.15 141.415-80.632 205.52-268.896 163.267-379.902C554.919-417.687 473.943-519 83.236-519S-514-460.314-514-377.482z'/%3E%3C/g%3E%3C/svg%3E");
background-color: #3b3054;
height: 250px;
display: list-item;
justify-content: center;
align-content:center ;
margin-top:0px;
@media only screen and (max-width:375px){
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='375' height='300'%3E%3Cg fill='%234B3F6B' fill-rule='evenodd'%3E%3Cpath d='M-263.351 570.909c29.685 77.331 73.689 123.988 171.79 127.377 98.102 3.39 167.085-60.547 256.043-73.22 88.958-12.674 135.24 107.895 240.73 152.532 105.488 44.638 274.775.333 377.9-125.622C886.24 526.021 878.62 327.29 799.392 238.798 720.162 150.307 608.257 84.743 243.5 224.76c-364.757 140.017-536.537 268.818-506.852 346.149zM-514-377.482c0 82.833 24.36 142.16 114.732 180.482 90.371 38.321 177.686 3.352 265.277 23.4 87.59 20.048 87.59 149.195 170.077 228.671 82.486 79.476 256.405 98.781 397.82 18.15 141.415-80.632 205.52-268.896 163.267-379.902C554.919-417.687 473.943-519 83.236-519S-514-460.314-514-377.482z'/%3E%3C/g%3E%3C/svg%3E");
    height: 250px;
    
}

`;

const BoosterHeading = styled.h2`
font-family: 'Poppins', sans-serif;
font-weight: 700;
font-size: 40px;
color: white;
margin-top: 0px;
padding-top: 40px;
margin-left: 34%;
@media only screen and (max-width:375px){
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    margin-left: 0px;
    padding-top: 20%;
    
}

`;
const BoosterButton = styled.div`
margin-left: 40%;
padding-left: 40px;
margin-top: 0px;
@media only screen and (max-width:375px){
    font-size: 25px;
    text-align: center;
    margin-left: 0px;
    padding-left: 0px;
  
}
`;

const Button = styled.button`
font-family: 'Poppins', sans-serif;
font-weight: 500 ;
font-size: 18px;
background: #2acfcf;
color: white;
padding-left: 10px ;
padding-right: 10px;
margin-left: 20px;
border: none;
border-radius: 20px;
text-align: center;
width: 150px;
height: 50px;
&:hover{
    background-color: 	rgba(0,255,255,0.7);
}
`;


function Statistics() {
    return (
        <>
            <About>
                <Heading>Advanced Statistics</Heading>
                <Details>Track how your links are performing across the web with
                    our advanced statistics dashboard.
                </Details>
            </About>
            <BackgroundColour>
                <Cards>
                    <Card1>
                        <CardImg src={icon1} />
                        <CardHeading>Brand Recognition</CardHeading>
                        <CardPara>Boost your brand recognition with each click. Generic
                            links don't mean a thing. Branded links help instil confidence
                            in your content.
                        </CardPara>

                    </Card1>
                    <Card2>
                        <CardImg src={icon2} />
                        <CardHeading>Detailed Records</CardHeading>
                        <CardPara>Gain insights into who is clicking your links. Knowing when and
                            where people engage with your content helps inform better decisions.
                        </CardPara>


                    </Card2>
                    <Card3>
                        <CardImg src={icon3} />
                        <CardHeading>Fully Customizable</CardHeading>
                        <CardPara>Improve brand awareness and content discoverability through customizable
                            links, supercharging audience engagement.</CardPara>


                    </Card3>
                </Cards>
            </BackgroundColour>
            <Booster>
                <BoosterHeading>
                    Boost your links today
                </BoosterHeading>
                <BoosterButton>
                    <Button>Get Started</Button>
                </BoosterButton>
            </Booster>

        </>

    )
}

export default Statistics
