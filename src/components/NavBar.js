import React from "react";
import styles from '../cssModules/NavBar.module.css';

class NavBar extends React.Component {
    render() {
        return (
            <div className={ styles.navbar }>
                <p className={ styles.brand }>Coding News</p>
                <span className={ styles.navbtn }> Home </span>
                <span className={ styles.navbtn }> Latest News </span>
                <span className={ styles.navbtn }> About us </span>
            </div>
        );
    }
}

export default NavBar;
