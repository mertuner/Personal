import React from 'react'
import classes from './ui.module.css'
import MaterialIcon from 'material-icons-react';

const button = props => {
    return (
        <a href={props.href} target={props.target} rel={props.rel} onClick={!props.external?props.clicked:null} className={classes.Button} style={cBtn}>
            {props.children}
            <div className={classes.RightArrow}>
                <MaterialIcon icon={'arrow_forward'} color={'#FCFCFC'} size={22} />
            </div>
        </a>
    )
}





let cBtn = {
    border: '1px solid white',
    backgroundColor: 'black'
}

export default button
