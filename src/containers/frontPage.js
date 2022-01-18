import React from 'react';
import Button from '../components/button';
import Particles from 'react-particles-js';
import classes from './containers.module.css';


const frontPage = React.forwardRef((props, ref) => (
    <section ref={ref} className={classes.Container}>
        <div className={classes.MasterContainer}>
            <h1 className={classes.HeroText}>Hello. I'm Mert.</h1>
            <h1 className={classes.JobText}>I'm a Software Engineer. React Enthusiast.</h1>
            <div className={classes.ButtonContainer}>
                <Button external href='https://github.com/mertuner' target="_blank" rel="noopener noreferrer" >Github</Button>
                <Button external href='https://medium.com/@mertuner' target="_blank" rel="noopener noreferrer" >Blog</Button>
            </div>
            <a className={classes.Email} rel="noopener noreferrer"  href="mailto:uner_mert@yahoo.com" target="_blank">E-mail: {'uner_mert@yahoo.com'}</a>
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
