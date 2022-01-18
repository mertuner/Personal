import React from 'react'
import classes from './ui.module.css';
// import github from '../media/cat.svg';
import eye from '../media/eye.svg';

const project = props => {

    return (
        <div className={classes.ProjectContainer}>
          <img src={require(`../media/${props.img}`)} style={{...props.style}}/>
        </div>
    )
}

export default project
