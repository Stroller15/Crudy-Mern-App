import { AppBar, Toolbar, styled } from "@mui/material"
import {NavLink} from 'react-router-dom';


const Header = styled(AppBar)`
background:#111111;
margin-bottom: 20px;

`

const Tab = styled(NavLink)`
font-size: 1.5rem;
margin-right: 1.5rem;
color: inherit;
text-decoration: none;
`

const NavBar = () => {
    return (
        <div>
            <Header position="static">
                <Toolbar>
                    <Tab to='/'>CRUDy</Tab>
                    <Tab to='/all'>All Users</Tab>
                    <Tab to='add'>Add User</Tab>
                </Toolbar>
            </Header>
        </div>
    )
}

export default NavBar
