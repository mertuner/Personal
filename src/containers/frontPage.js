import React from 'react';
import Button from '../components/button';
import Particles from 'react-particles-js';
import classes from './containers.module.css';


const frontPage = React.forwardRef((props, ref) => (
    <section ref={ref} className={classes.Container}>
        <div className={classes.MasterContainer}>
            <p className={classes.HeroText}>Hello. I'm Mert.</p>
            <p className={classes.JobText}>I'm a Front End Engineer. React Enthusiast.</p>
            <div className={classes.ButtonContainer}>
                <Button clicked={props.clicked}>My Projects</Button>
                <Button><a target="_blank" style={{color: 'white', textDecoration: 'none'}} href = {'https://github.com/mertuner'}>Github</a></Button>
            </div>
            <p>E-mail: {'   uner_mert@yahoo.com'}</p>
        </div>
        <Particles
            width={'100%'}
            height={'100%'}
            color={'#6DECB9'}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
            }}
        />
    </section>
)
)


export default frontPage
