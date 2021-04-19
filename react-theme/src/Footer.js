import React from "react";
import {ThemeContextConsumer} from "./themeContext";

function Footer(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <div className={`${context.theme}Theme`} id="footer">
                    <h3>Multiple Themes</h3>
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default Footer;