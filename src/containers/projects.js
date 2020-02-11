import React from 'react';
import classes from './containers.module.css';
import Project from '../components/project';

const projects = React.forwardRef((props, ref) => (
    <section className={classes.ProjectsContainer} ref={ref}>
        <div style={{marginTop: '25px', width: '85%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
        <h3>My Projects</h3>
        <div style={{width: '2px', height: '30px', marginLeft: '10px', backgroundColor: 'black'}}>

        </div>
        </div>
        <div style={{width: '85%', height: '1px', backgroundColor: '#cccccc', margin: '20px 0 20px 0'}}></div>
        <div className={classes.ProjectsInnerContainer}>
            <Project img='cm' vLink={'https://personal-musical-therapy.firebaseapp.com/'} gLink={'https://github.com/mertuner/Personal-Musical-Affirmations'}/>
            <Project img='pq' vLink={'https://www.projectquality.app/'} gLink={'https://github.com/mertuner/project-quality'}/>
            <Project img='rlx' vLink={'https://mertuner.github.io/RelaxeStatic/'} gLink={''}/>
            {/* <Project img='mov' vLink={'https://moviedb-8a20c.web.app/'} gLink={'https://github.com/mertuner/movie-city-db'}/> */}
            <Project img='prt' vLink={'https://www.mertuner.com'} gLink={'https://github.com/mertuner/RelaxeStatic'}/>
        </div>
    </section>
))

export default projects;
