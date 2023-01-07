import { useState } from "react";
// import styled from 'styled-components';
import styled from 'styled-components';

import { StyleButton, StyleInput } from "components/Form/Form.Style";

// export const StyleInput  = styled.input`
// display: flex;
// padding: ${p => p.theme.space[3]}px;
// outline: 0;
// border: solid 1px #f2f2f2;
// margin-bottom: ${p => p.theme.space[4]}px;
// border-radius: ${ p => p.theme.radii.large};

// font-size: ${ p => p.theme.fontSizes.m};
// font-weight: ${p => p.theme.fontWeights.normal};

// box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 
//  0px 3px 3px rgba(0, 0, 0, 0.14),
//  0px 3px 3px rgba(0, 0, 0, 0.2);
// `;
export const StyleForm  = styled.form`
display: flex;
align-items: baseline;
padding:${p => p.theme.space[3]}px;
gap: 30px;
margin-bottom: 5px;
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