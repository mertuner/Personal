import React from 'react'
import classes from './ui.module.css'
import MaterialIcon from 'material-icons-react';

const button = props => {
    return (
        <div onClick={props.clicked} className={classes.Button} style={cBtn}>
            <p>{props.children}</p>
            <div className={classes.RightArrow}>
                <MaterialIcon icon={'arrow_forward'} color={'#FCFCFC'} size={22} />
            </div>
        </div>
    )
}





let cBtn = {
    border: '1px solid white',
    backgroundColor: 'black'
}

export default button
