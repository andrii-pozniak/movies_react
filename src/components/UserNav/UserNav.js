
import { StyleButton, StyleText, StyleContainer } from "components/Form/Form.Style"
import { logOut } from 'Redux/Auth/operations';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';

export const UserNav = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    return <StyleContainer>
        <StyleText >Welcome, {user.name}</StyleText>
        <StyleButton type="button" onClick={() => dispatch(logOut())}>
            Log Out
        </StyleButton>
    </StyleContainer>
} 