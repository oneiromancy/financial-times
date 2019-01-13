import React, { Component } from 'react';
import './reset.scss';
import './App.scss';
import data from './data.json';
import Technology from './components/technology/Technology';
import LifeAndArts from './components/lifeAndArts/LifeAndArts';
import Sitemap from './components/sitemap/Sitemap';
import TopStories from './components/topStories/TopStories';
import SpecialEvent from './components/specialEvent/SpecialEvent';
import RegionalStories from './components/regionalStories/RegionalStories';
import MostRead from './components/mostRead/MostRead';
import GridRow from './components/gridRow/GridRow';

class App extends Component {
    render() {

        const {topStories, specialEvent, regionalStories, mostRead, technology, lifeAndArts} = data;

        return (
            <div className="App">

                <GridRow>
                    <TopStories headlines = {topStories}/>
                </GridRow>

                <GridRow hasBackgroundColor = {true}>
                    <SpecialEvent headlines = {specialEvent}/>
                </GridRow>

                <GridRow>
                    <RegionalStories headlines = {regionalStories}/>
                    <MostRead headlines = {mostRead}/>
                </GridRow>

                <GridRow>
                    <Technology headlines = {technology}/>
                </GridRow>

                <GridRow>
                    <LifeAndArts headlines = {lifeAndArts}/>
                </GridRow>

                <Sitemap/>

            </div>
        );
    }
}

export default App;