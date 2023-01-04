import { NavLink } from 'react-router-dom';
import { StyleButton, StyleText, StyleContainer } from "components/Form/Form.Style"


export const AuthNav = () => {

    return <StyleContainer>
        <NavLink to="/register">
            <StyleText>
            Register
            </StyleText>        
        </NavLink>
        <NavLink to="/login">
            <StyleButton type='button'>
                Log In
            </StyleButton>
        </NavLink>
    </StyleContainer>
}