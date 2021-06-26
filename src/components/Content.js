import React, { useState } from 'react'

import styled from 'styled-components'
import image from '../images/illustration-working.svg'
import Link from './Link'

//Styled Components
const Section = styled.section`
margin-left: 10%;
margin-right: 10px;
margin-bottom: 0px;
padding: 0px;
height: auto;
width: auto;
display: flex;
justify-content: right;
@media only screen and (max-width:375px){
    display: flex;
    flex-direction: column-reverse;
    margin-left: 5%;
}
`;

const Started = styled.h1`
font-size: 70px;
font-family: 'Poppins', sans-serif;
font-weight: 700;
margin-bottom: 0px;
padding: 0px;
color: #232127;
display: grid;
padding: 0px;
@media only screen and (max-width:375px){
    font-size: 40px;
    color: #3b3054;
    text-align: center;
    margin-top: 50px;
    margin-left:0px;
    display: list-item;
    list-style-type: none;  
}
`;

const Para = styled.p`
color:#9c9c9c;
font-size: 18px;
font-weight: 500;
margin-right: 30%;
padding: 0px;
margin-top: 0px;
@media only screen and (max-width:375px){
    margin-right: 0%;
    margin-top: 10px;
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
@media only screen and (max-width:375px){
    margin-left: 0%;
    margin-top: 10px;
}
`;

const Image = styled.img`
height: 50%;
width: 60%;
margin-right: -40px;
margin-left: 10px;
@media only screen and (max-width:375px){
    height: 100%;
    width: 100%;
    margin-top: 30px;
    padding-left: 30px;
    transform: scale(1.3);
}
`;

const BackgroundColour = styled.div`
background: linear-gradient(180deg , white 50% , #dfdfdf 50%);
margin-top: 100px;
`;

const FormSection = styled.div`
background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1110' height='168'%3E%3Cpath fill='%234B3F6B' fill-rule='evenodd' d='M647-93.924c0 52.724 15.5 90.486 73 114.877 57.5 24.391 113.055 2.134 168.786 14.894 55.731 12.76 55.731 94.962 108.214 145.549s163.142 62.874 253.12 11.552c89.976-51.322 130.765-171.152 103.88-241.807C1327.115-119.515 1275.593-184 1027-184c-248.593 0-380 37.353-380 90.076zm-781 213c0 52.724 15.5 90.486 73 114.877 57.5 24.391 113.055 2.134 168.786 14.894 55.731 12.76 55.731 94.962 108.214 145.549s163.142 62.874 253.12 11.552C559.095 354.626 599.884 234.796 573 164.141 546.115 93.485 494.593 29 246 29c-248.593 0-380 37.353-380 90.076z'/%3E%3C/svg%3E");
height: 150px;
background-color: #3b3054;
background-repeat: no-repeat;
margin-top: 20px;
margin-left: 10%;
margin-right: 15%;
border-radius: 10px;
width: auto;
@media only screen and (max-width:375px){
    margin-left: 10px;
    width: 95%;
    height: 200px;
    background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='375' height='128'%3E%3Cpath fill='%234B3F6B' fill-rule='evenodd' d='M0-.924C0 51.8 15.5 89.562 73 113.953c57.5 24.391 113.055 2.134 168.786 14.894 55.731 12.76 55.731 94.962 108.214 145.549s163.142 62.874 253.12 11.552C693.095 234.626 733.884 114.796 707 44.141 680.115-26.515 628.593-91 380-91 131.407-91 0-53.647 0-.924z'/%3E%3C/svg%3E");
    background-color: #3b3054;

}
`;

const InputSection = styled.div`
display: flex;
justify-content: center;
align-content: center;
@media only screen and (max-width:375px){
    display: list-item;
    list-style-type: none;   
}
`;

const Input = styled.input`
margin-top: 50px;
font-family: 'Poppins', sans-serif;
font-weight: 300;
font-size: 18px;
height: 40px;
border-radius: 7px;
width: 600px;
@media only screen and (max-width:375px){
    width: 90%;
    margin: 0%;
    align-items: center;
    margin-left: 4%;
    margin-top: 30px;
}
`;

const ButtonLink = styled.button`
font-family: 'Poppins', sans-serif;
font-weight: 500 ;
font-size: 18px;
background: #2acfcf;
color: white;
padding-left: 10px ;
padding-right: 10px;
margin-left: 20px;
border: none;
border-radius: 10px;
margin-top: 50px;
text-align: center;
width: 150px;
height: 50px;
&:hover{
    background-color: 	rgba(0,255,255,0.7);
}
@media only screen and (max-width:375px){
    width: 90%;
    font-size: 20px;
    margin-top: 40px;
}
`;

const NewLink = styled.div`
background-color: #dfdfdf;
padding-top: 10px;
display: flex;
justify-content: space-between;
height: 100px;
width: 100%;
@media only screen and (max-width:375px){
    display: list-item;
    list-style-type: none;
    padding-left:10px;
}
`;

const CopyBtn = styled.button`
height: 50px;
margin-right: 15%;
margin-top: 20px;
width: 100px;
height: 40px;
font-family: 'Poppins', sans-serif;
font-weight: 700 ;
font-size: 18px;
background-color: cyan;
color: white;
border-radius: 5px;
border-style: none;
&:hover{
    background-color: 	rgba(0,255,255,0.3);
}
@media only screen and (max-width:375px){
    width: 95%;
    margin-left: 0%;
    margin-top: 0%;
}
`;


function Content() {

    const colours = ['#2acfcf', '#3b3054'];
    const [url, setUrl] = useState("");
    const [link, setLink] = useState(false);
    const [selectedColourIndex, setColourIndex] = useState(0);

    //To get the link from the API
    function Shorten() {
        setLink(true)
        var api = new URL("https://api.shrtco.de/v2/shorten"),
            params = { url }
        Object.keys(params).forEach(key => api.searchParams.append(key, params[key]))
        fetch(api, {
            method: 'GET',
            mode: 'no-cors'

        }).then(res => {
            console.log(res)
            return res.json()

        })
            .then(data => {
                console.log(data)
            })
            .catch(e => {
                console.error(e)
            })
    }

    //To copy the link into clipboard and change text to copied
    function changeCopy() {

        const newColourIndex = selectedColourIndex + 1;
        var copyText = document.getElementById("copy");

        if (copyText.innerText === "Copy") {
            setColourIndex(newColourIndex);
            copyText.innerText = "Copied!";
        }
        else {
            copyText.innerText = "Copied!";
            setColourIndex(1);
        }
    }

    return (
        <>
            <Section>
                <Started>More than just shorter links<Para>Build your brand's recogination and get detailed
                    insights on how your links are performing</Para>
                    <Button>Get Started</Button></Started>
                <Image src={image}></Image>
            </Section>
            <BackgroundColour>
                <FormSection>
                    <InputSection>
                        <Input value={url} onChange={(e) => setUrl(e.target.value)} type="url" placeholder="Shorten a link here..."></Input>
                        <ButtonLink onClick={Shorten}>Shorten it!</ButtonLink>
                    </InputSection>
                </FormSection>
            </BackgroundColour>
            <NewLink>
                {link === true ?
                    <>
                        <Link />
                        <CopyBtn type="button" id="copy" style={{ backgroundColor: colours[selectedColourIndex] }} onClick={changeCopy}>Copy</CopyBtn>
                    </>
                    : ""}
            </NewLink>
        </>
    )
}

export default Content
