import React from "react";
import styles from '../cssModules/NavBar.module.css';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <div className={ styles.spacer }>
            <div className={ styles.navbar }>
                <p className={ styles.brand }>Coding News</p>
                <Link to="/"><span className={ styles.navbtn }> Home </span></Link>
                <Link to="/LatestNews"><span className={ styles.navbtn }> Latest News </span></Link>
                <Link to="/About"><span className={ styles.navbtn }> About us </span></Link>
            </div>
            </div>
        );
    }
}

export default NavBar;
