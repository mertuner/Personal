import React from 'react'
import classes from './ui.module.css';
import github from '../media/cat.svg';
import eye from '../media/eye.svg';

const project = props => {

    let bg = require(`../media/${props.img}.png`)

    return (
        <div className={classes.ProjectContainer}>
            <div style={{height: '80%', width: '100%', backgroundImage: `url(${bg})` ,backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
            <div style={{width: '100%', height: '20%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                <a target="_blank" style={{fontSize: '1em', fontWeight: '500', color: 'black', textDecoration: 'none'}} href = {props.gLink}>
                    {'</>'}
                    {/* <div style={{width: '25px', height: '25px', backgroundImage: `url(${github})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}/> */}
                </a>
                <a target="_blank" style={{fontSize: '0.9em', fontWeight: '300', color: 'black', textDecoration: 'none'}} href = {props.vLink}>
                <div style={{width: '25px', height: '25px', backgroundImage: `url(${eye})`}}/>
                </a>
            </div>
        </div>
    )
}

export default project
