import { NavLink } from 'react-router-dom';

export const AuthNav = () => {

    return <div>
        <NavLink>
            Registration
        </NavLink>
        <NavLink>
            <button type='button'>
                Log In
            </button>
        </NavLink>
    </div>
}