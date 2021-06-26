import React from 'react'
import styled from 'styled-components'

function Link() {

//Styled Components
const Box = styled.p`
background-color: white;
height: 100px;
margin-top: 30px;
margin-left: 10%;
margin-right: 15%;
border-radius: 10px;
color: black;
@media only screen and (max-width:375px){
    width: 95%;
    margin-left: 0%;   
}
`;

    return (
        <Box>

        </Box>
    )
}

export default Link
