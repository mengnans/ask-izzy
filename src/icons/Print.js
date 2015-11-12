/* @flow */
/* Generated by ./script/iconify */
/* eslint-disable max-len */


import React from "react";
import classnames from "classnames";

export default class SvgIconPrint extends React.Component {
    render(): ReactElement {
        const {className, ...rest} = this.props;
        const classes = classnames(
            "PrintIcon",
            "allow-override-color",
            "Icon",
            "SvgIcon",
            className
        );

        return (
            <span
                {...rest}
                dangerouslySetInnerHTML={{__html: `
                    <svg class='${classes}' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"  xml:space="preserve"><g id="print"><g id="XMLID_646_"><path id="XMLID_649_" fill="#231F20"  d="M45.505,32.924h-2.9v-13.9c0-0.607-0.492-1.1-1.1-1.1H18.753 c-0.607,0-1.1,0.492-1.1,1.1v13.9h-2.9c-0.607,0-1.1,0.492-1.1,1.1v7.79c0,2.24,1.821,4.062,4.062,4.062h24.828 c2.24,0,4.062-1.821,4.062-4.062v-7.79C46.605,33.417,46.113,32.924,45.505,32.924z M19.853,20.124h20.553v12.801H19.853V20.124z M44.405,41.814c0,1.026-0.836,1.862-1.862,1.862H17.715c-1.026,0-1.862-0.836-1.862-1.862v-6.69h28.553V41.814z"></path><path id="XMLID_648_" fill="#231F20"  d="M37.342,40.375h3c0.607,0,1.1-0.492,1.1-1.1s-0.492-1.1-1.1-1.1h-3 c-0.607,0-1.1,0.492-1.1,1.1S36.735,40.375,37.342,40.375z"></path></g></g><g id="Layer_1"></g></svg>
                `}}
            />
        );
    }
}
