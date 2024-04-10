import React from 'react'
import './SearchPage.css'
import Navbar from '../../components/navbar/Navbar.jsx'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AllEvents from '../../components/allEvents/AllEvents.jsx'
import MusicEvents from '../../components/musicEvents/MusicEvents.jsx'
import SportsEvents from '../../components/sportsEvents/SportsEvents.jsx'
import ShowsEvents from '../../components/showsEvents/ShowsEvents.jsx'

function SearchPage() {
  return (
    <div className='searchPage'>
    <Navbar show="show"/>
      <Tabs className='searchScreen'>
            <TabList className='filterOptions'>
              <Tab>
                <div className='filtersBtn'>
                  <div className='filterIcon' id='allEventsIconSearch'></div>
                  <p className='filtersTitle'>All events</p>
                </div>
              </Tab>
              <Tab>
                <div className='filtersBtn' >
                  <div className='filterIcon' id='musicIconSearch'></div>
                  <p className='filtersTitle'>Music</p>
                </div>
              </Tab>
              <Tab>
                <div className='filtersBtn'>
                  <div className='filterIcon' id='sportsIconSearch'></div>
                  <p className='filtersTitle'>Sports</p>
                </div>
              </Tab>
              <Tab>
                <div className='filtersBtn'>
                  <div className='filterIcon' id='showsIconSearch'></div>
                  <p className='filtersTitle'>Shows</p>
                </div>
              </Tab>
            </TabList>
            <div className='eventsDisplay'>
            <TabPanel>
              <div>
                <AllEvents />
              </ div>
            </TabPanel>
            <TabPanel>
              <div>
                <MusicEvents />
              </ div>
            </TabPanel>
            <TabPanel >
              <div>
                <SportsEvents />
              </ div>
            </TabPanel>
            <TabPanel>
              <div>
                <ShowsEvents />
              </ div>
            </TabPanel>
            </div>
          </Tabs>
  </div>
  )
}

export default SearchPage