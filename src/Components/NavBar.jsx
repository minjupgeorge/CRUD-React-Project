import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background:#04AEC4;
`;
    
const Tabs = styled(NavLink)`
    color: #111111;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;

const NavBar = () => {
    
    return (
        <Header>
            <Toolbar>
            <Tabs to="./" exact>ClimateTech</Tabs>
            <Tabs to="all" exact>All Companies</Tabs>
            <Tabs to="add" exact>Add Company</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;