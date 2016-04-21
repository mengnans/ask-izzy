/* @flow */
/* Generated by ./script/iconify */
/* eslint-disable max-len */

import React from "react";
import classnames from "classnames";

export default class SvgIconChevronBack extends React.Component {
    props: Object;
    state: Object;
    static propTypes = {
        className: React.PropTypes.string,
    };

    render() {
        const {className, ...rest} = this.props;
        const classes = classnames(
            "ChevronBackIcon",
            "allow-override-color",
            "Icon",
            "SvgIcon",
            className
        );

        return (
            <span
                {...rest}
                dangerouslySetInnerHTML={{__html: `
                    <svg class='${classes}' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"  xml:space="preserve"><g id="chevron-back"><g id="XMLID_1_"><path fill="#231F20"  d="M37.929,19.043c0.281,0,0.563,0.107,0.777,0.322c0.43,0.429,0.43,1.126,0,1.555l-11.08,11.081 l11.08,11.079c0.43,0.43,0.43,1.127,0.001,1.556c-0.43,0.43-1.126,0.429-1.556,0.001L25.293,32.779 c-0.207-0.207-0.322-0.486-0.322-0.778s0.115-0.571,0.322-0.777l11.858-11.858C37.366,19.15,37.648,19.043,37.929,19.043z"></path></g></g><g id="Layer_1"></g></svg>
                `}}
            />
        );
    }
}
