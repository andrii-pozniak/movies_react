import { Routes, Route} from "react-router-dom";
import { lazy, useEffect } from "react";
import { Home } from "pages/Home/Home";
import { Layout } from "pages/Layout";
// import { Movies } from "pages/Movies/Movies";
// import { Cast } from "components/Cast/Cast";
import { Review } from "components/Review/Review";
import { RestrictedRoute } from 'components/RestrictedRoute';
import { useDispatch } from "react-redux";
import { useAuth } from 'hooks';
import { refreshUser } from 'Redux/Auth/operations';
import { PrivateRoute } from "components/PrivateRoute";


// import { MovieDetails } from "components/MovieDetails/MovieDetails";
    
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));




export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (      
    <Routes>
       <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={
           <RestrictedRoute
           redirectTo="/movies"
           component={<RegisterPage />}
         />}/>
        <Route path="/login" element={<RestrictedRoute redirectTo="/" component={<LoginPage />} />}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="movies/:moviesId" element={<PrivateRoute redirectTo='/login' component={<MovieDetails/>}/> }>
           <Route path="review" element={<Review/>}/>
            <Route path="cast" element={<Cast/>}/>
            </Route>         
       </Route>               
     </Routes>
  
    
  );
};
