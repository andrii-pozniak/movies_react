import { AuthNav } from "components/AuthNav/AuthNav";
import { UserNav } from "components/UserNav/UserNav";
import { useAuth } from 'hooks';




export const AppBar = () => {
    const { isLoggedIn } = useAuth();


    return <div>
        {isLoggedIn ? <UserNav /> : <AuthNav />}

    </div>
}