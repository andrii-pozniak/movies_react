import { NavLink } from 'react-router-dom';
import { StyleButton } from "components/Form/Form.Style"
import { Link } from "pages/Layout.Style"


export const AuthNav = () => {

    return <div>
        <Link to="/register">
            Register
        </Link>
        <NavLink to="/login">
            <StyleButton type='button'>
                Log In
            </StyleButton>
        </NavLink>
    </div>
}