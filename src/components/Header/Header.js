import classes  from './Header.module.css';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import {NavLink} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import { useEffect } from 'react';

export default function Header() {
    const location = useLocation();
    const checkIfActive = (path)=> {
        if(location.pathname === path) {
            return [classes.icon, classes.active].join(' ')
        }
        return classes.icon;
    }
    return <div className={classes.headerContainer}>
        <div className={checkIfActive('/')}>
            <NavLink to="/" className={classes.link}>
                <HomeOutlinedIcon />
            </NavLink>
        </div>
        <div className={checkIfActive('/newpost')}>
            <NavLink to="/newpost" className={classes.link}>
                <AddOutlinedIcon />
            </NavLink>
        </div>
    </div>
}