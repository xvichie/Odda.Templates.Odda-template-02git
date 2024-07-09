import React from 'react'
import MainLanding from '../../components/Sections/MainLanding/MainLanding'
import MainLandingBookNow from '../../components/Sections/MainLandingBookNow/MainLandingBookNow'
import MainLandingAboutUs from '../../components/Sections/MainLandingAboutUs/MainLandingAboutUs'
import MainLandingPerks from '../../components/Sections/MainLandingPerks/MainLandingPerks'
import MainLandingActivities from '../../components/Sections/MainLandingActivities/MainLandingActivities'

function Home() {
  return (
    <div>
        <MainLanding />
        <MainLandingBookNow />
        <MainLandingAboutUs />
        <MainLandingPerks />
        <MainLandingActivities />
    </div>
  )
}

export default Home