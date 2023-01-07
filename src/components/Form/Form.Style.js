import styled from 'styled-components';
import img from "components/Images/movie.jpg";

export const StyleForm  = styled.form`
padding:${p => p.theme.space[5]}px;
`;
export const Section = styled.section`
width: 100%;
height: 100vh;
margin-top: 2px;
background-image: url(${img});
background-size: 100% 100vh;
`;
export const StyleLabel  = styled.label`
display: flex;
margin-bottom: ${p => p.theme.space[3]}px;
font-family: ${p => p.theme.fontWeights.body};
font-size: ${ p => p.theme.fontSizes.m};
font-weight: ${ p => p.theme.fontWeights.middle};
color: ${ p => p.theme.colors.text};


`;

export const StyleInput  = styled.input`
display: flex;
padding: ${p => p.theme.space[3]}px;
outline: 0;
border: solid 1px #f2f2f2;
margin-bottom: ${p => p.theme.space[4]}px;
border-radius: ${ p => p.theme.radii.large};

font-size: ${ p => p.theme.fontSizes.m};
font-weight: ${p => p.theme.fontWeights.normal};

box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 
 0px 3px 3px rgba(0, 0, 0, 0.14),
 0px 3px 3px rgba(0, 0, 0, 0.2);
`;

export const StyleButton  = styled.button`
padding:${p => p.theme.space[3]}px;
font-family: ${p => p.theme.fontWeights.body};
font-size: ${ p => p.theme.fontSizes.m};
font-weight:${ p => p.theme.fontWeights.middle};
color: ${ p => p.theme.colors.text};
background-color: ${ p => p.theme.colors.white};
border: solid 1px #f2f2f2;
border-radius: ${ p => p.theme.radii.large};
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 
 0px 3px 3px rgba(0, 0, 0, 0.14),
 0px 3px 3px rgba(0, 0, 0, 0.2);
:focus:hover {
background-color: ${ p => p.theme.colors.primary};
color: ${ p => p.theme.colors.white};


}

`;
export const StyleText  = styled.p`
font-family: ${p => p.theme.fontWeights.body};
font-size: ${ p => p.theme.fontSizes.mx};
font-weight:${ p => p.theme.fontWeights.middle};
color: ${ p => p.theme.colors.text};
margin-top: 0;
margin-bottom: 0;
`;
export const StyleContainer  = styled.div`
display: flex;
align-items: baseline;
gap: 30px;
text-decoration: 'none';

`;
