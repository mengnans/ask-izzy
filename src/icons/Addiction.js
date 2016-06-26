/* @flow */
/* Generated by ./script/iconify */
/* eslint-disable max-len */

import React from "react";
import classnames from "classnames";

export default class SvgIconAddiction extends React.Component {
    props: {
        className?: string,
    };
    state: void;

    render() {
        const {className, ...rest} = this.props;
        const classes = classnames(
            "AddictionIcon",
            "allow-override-color",
            "Icon",
            "SvgIcon",
            className
        );

        return (
            <span
                {...rest}
            >
                <svg className={classes}>
                   <use xlinkHref="#Addiction"></use>
                </svg>
            </span>
        );
    }
}
