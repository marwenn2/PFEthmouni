import React from 'react' ; 
import { useHistory } from 'react-router';
import styled from 'styled-components' ; 
import toolbox from '../../assets/toolbox.svg'

const WrapperFlex =styled.div`
display : flex ; 
justify-content: space-between ; 
alignt-items : center ; 
position: sticky ;  
border: 0 ; 
box-shadow: 0 2px 4px 0 rgba(0,0,0,.2); 

`
const StyledButton = styled.button`
display: flex ; 
padding-top: 8px ; 
justify-content: center ; 
align-items: center ; 
margin: 10px ;
margin-left: 25px ; 
background: transparent ; 
border: 0 ;  
font-family: 'Baloo Tammudu 2' ,sans-serif ; 
font-size: 17px ; 
font-weight: 400 ; 
transition-duration: 0.3s ; 
border-radius: 14px ;
 
&: hover{
    background-color: #f7fafc ; 
    cursor: pointer ;   

}
`
const Khaddamny = styled.h3`
color: #87abfa ; 
margin-left: 30px ; 
font-size: 25px ; 
`
const Wrapper = styled.div`
display : flex ; 
justify-content: space-between ;
align-items : center ; 
margin-right:30px ;  
`
const IMG= styled.img`
height: 30px ;
margin-left: 20px ;  
`
const Logo = styled.div`
display: flex ;
justify-content: space-around ; 
align-items: center;  `

const Navigation=()=> {
    const history = useHistory() ; 

    const handleLogin=()=>{
        history.push('/login') ; 

    }
    return(
        <>
        <WrapperFlex>
            <Logo>
            <Khaddamny>Khadamny</Khaddamny>
            <IMG src = {toolbox} alt="My Happy SVG"/>
            </Logo>
            
            <Wrapper>
            
            <StyledButton>Accueil</StyledButton>
            <StyledButton>Annonces</StyledButton>
            <StyledButton onClick={handleLogin}>Connexion</StyledButton>
            </Wrapper>
           
        </WrapperFlex>
        </>
    )

}
export default Navigation ; 