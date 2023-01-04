import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'Redux/Auth/selector';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // console.log(isLoggedIn)
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};