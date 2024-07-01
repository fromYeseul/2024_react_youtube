import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import VideoSlider from '../components/videos/VideoSlider'
import { webdText } from '../data/webd'
import { websiteText } from '../data/website'
import { gsapText } from '../data/gsap'
import { portfolioText } from '../data/portfolio'
import { youtubeText } from '../data/youtube'
import { developerText } from '../data/developer'
import { todayText } from '../data/today'
// import Webd from '../components/contents/Webd'
// import Website from '../components/contents/Website'
// import Gsap from '../components/contents/Gsap'
// import Portfolio from '../components/contents/Portfolio'
// import Youtube from '../components/contents/Youtube'

const Home = () => {
    return (
        <Main
            title='웹스토리보이 유튜브'
            description='웹스토리보이 유튜브에 오신것을 환영합니다.'>
            Home            
            <Today videos={todayText} id='today' />
            <Developer videos={developerText} title='추천개발자를 소개합니다.' id='developer' />
            <VideoSlider videos={webdText} title='웹디기능사 준비는 이걸로!' id='webd'/>
            <VideoSlider videos={websiteText} title='웹사이트 준비는 이걸로!' id='website'/>
            <VideoSlider videos={gsapText} title='gsap' id='gsap'/>
            <VideoSlider videos={portfolioText} title='portfolio' id='portfolio'/>
            <VideoSlider videos={youtubeText} title='youtube' id='youtube'/>
            {/* <Webd />
            <Website />
            <Gsap />
            <Portfolio />
            <Youtube /> */}
        </Main>
    )
}

export default Home