import React from "react";
import "./style.css";

export default()=>{
    return <footer>
        <span
            className ="footer__copy">
                &copy;{new Date().getFullYear()}
        </span>
        <span>
            Made by&nbsp;
            <a href="https://github.com/AntoshkaI" className ="footer__autor" target="_blank">
                Toshka</a>

        </span>
    </footer>
}

