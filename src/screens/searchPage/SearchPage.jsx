import React from 'react'
import './SearchPage.css'
import Navbar from '../../components/navbar/Navbar.jsx'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AllEvents from '../../components/allEvents/AllEvents.jsx'
import MusicEvents from '../../components/musicEvents/MusicEvents.jsx'
import SportsEvents from '../../components/sportsEvents/SportsEvents.jsx'
import ShowsEvents from '../../components/showsEvents/ShowsEvents.jsx'

function SearchPage({userProfile, events, sportsEvents, musicEvents, showsEvents}) {
  return (
    <div className='searchPage'>
    <Navbar show="show" userProfile={userProfile}/>
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
                <AllEvents events={events}/>
              </ div>
            </TabPanel>
            <TabPanel>
              <div>
                <MusicEvents musicEvents={musicEvents} />
              </ div>
            </TabPanel>
            <TabPanel >
              <div>
                <SportsEvents sportsEvents={sportsEvents} />
              </ div>
            </TabPanel>
            <TabPanel>
              <div>
                <ShowsEvents showsEvents={showsEvents} />
              </ div>
            </TabPanel>
            </div>
          </Tabs>
  </div>
  )
}

export default SearchPage