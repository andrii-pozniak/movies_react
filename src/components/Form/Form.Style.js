import styled from 'styled-components';

export const StyleForm  = styled.form`
padding:${p => p.theme.space[5]}px;
/* border:${p => p.theme.borders.normal}; */
`;

export const StyleLabel  = styled.label`
display: flex;
margin-bottom: ${p => p.theme.space[5]}px;
font-family: ${p => p.theme.fontWeights.body};
font-size: ${ p => p.theme.fontSizes.ml};
font-weight: ${ p => p.theme.fontWeights.middle};
color: ${ p => p.theme.colors.text};


`;

export const StyleInput  = styled.input`
display: flex;
padding: ${p => p.theme.space[3]}px;
margin-bottom: ${p => p.theme.space[3]}px;
border-radius: ${ p => p.theme.radii.normal};
margin-left: ${ p => p.theme.space[5]}px;
font-size: ${ p => p.theme.fontSizes.m};
`;

export const StyleButton  = styled.button`
padding:${p => p.theme.space[3]}px;
font-family: ${p => p.theme.fontWeights.body};
font-size: ${ p => p.theme.fontSizes.m};
font-weight:${ p => p.theme.fontWeights.middle};
color: ${ p => p.theme.colors.text};
background-color: ${ p => p.theme.colors.white};
border: ${ p => p.theme.borders.normal};
border-radius: ${ p => p.theme.radii.normal};
:focus {
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
gap: 12px;
`;