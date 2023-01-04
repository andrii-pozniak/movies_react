

import { AppBar } from "components/AppBar/AppBar"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Container, Header, Link} from "./Layout.Style"

export const Layout = () => {
    return <>
    <Container>    
      <Header>
        <nav>
          <Link to='/' end> Home </Link>
          <Link to="/movies">Movies</Link>
          
        </nav>
        <AppBar/>
      </Header>
      
        <Suspense fallback={null}>
          <Outlet/>
        </Suspense>
      
    </Container> 
    </>
}