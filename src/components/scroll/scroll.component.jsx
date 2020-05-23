import React from "react";
import './scroll.styles.css';
export const Scroll = (props) => {
    return (
        <div className="scroll">
            {props.children}
        </div>
    );
}