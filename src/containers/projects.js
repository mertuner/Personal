import React from 'react';
import classes from './containers.module.css';
import Project from '../components/project';

const projects = React.forwardRef((props, ref) => (
    <section className={classes.ProjectsContainer} ref={ref}>
        <div style={{width: '85%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <h3>My Projects</h3>
            <div style={{ width: '2px', height: '30px', marginLeft: '10px', backgroundColor: 'black' }}>
            </div>
        </div>
        <div className={classes.ProjectsInnerContainer}>
        <Project img={'rbs.jpeg'} style={{width: '210px', height:'440px'}} vLink={'https://www.projectquality.app/'} gLink={'https://github.com/mertuner/project-quality'}/>

        </div>

    </section>
))

export default projects;
