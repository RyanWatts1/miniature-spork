import React from "react";
import styles from '../cssModules/NavBar.module.css';

class NavBar extends React.Component {
    render() {
        return (
            <div className={ styles.navbar }>
                <p>some text</p>
                <button>Button1</button>
                <button>Button2</button>
                <button>Button3</button>
            </div>
        );
    }
}

export default NavBar;
