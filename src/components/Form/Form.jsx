import { useState } from "react";
import styled from 'styled-components';
import { StyleButton, StyleForm } from "components/Form/Form.Style";

export const StyleInput  = styled.input`
display: flex;
padding: ${p => p.theme.space[3]}px;
margin-bottom: ${p => p.theme.space[3]}px;
border-radius: ${ p => p.theme.radii.normal};
font-size: ${ p => p.theme.fontSizes.m};
`;


export const Form = ({onSubmit}) => {
    const [moviesName, setMoviesName ] = useState('');
    

    const handleMoviesNameChange = evt => {
     
        setMoviesName(evt.currentTarget.value.toLowerCase())
        // console.log(evt.currentTarget.value.toLowerCase())
       }
       const handleSubmit = event => {
      
        event.preventDefault();
        
        if(moviesName.trim() === '') {
            alert('do not name image')
            return;
        }
        console.log(moviesName)
        setMoviesName( '')       
        onSubmit(moviesName)
        // console.log('onSubmit', moviesName)
    }
    return <StyleForm onSubmit={handleSubmit}>
    <StyleInput type="text" placeholder="Search movies"   value={moviesName}
    onChange={handleMoviesNameChange}/>
    <StyleButton type="submit" >Search</StyleButton>
   
</StyleForm>}