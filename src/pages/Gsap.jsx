import React, {useState, useEffect} from 'react'
import Main from '../components/section/Main'

import { gsapText } from '../data/gsap'
import VideoCard from '../components/videos/VideoCard'

const Gsap = () => {
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 300)
    }, []);

    const gsapPageClass = loading ? 'isLoading' : 'isLoaded';
    return (
        <Main 
            title = "GSAP 사이트"
            description="GSAP 사이트 튜토리얼 강의입니다.">
            <section id='gsapPage' className={gsapPageClass}>
                <h2>GSAP 패럴랙스 효과를 하고 싶다면!</h2>
                <div className='video__inner'>
                    <VideoCard videos={gsapText}/>
                    {/* {gsapText.map((video, key)=> (
                    <div className='video' key={key}>
                        <div className='video__thumb play__icon'>
                            <Link to={`/video/${video.videoId}`}>
                                <img src={video.img} alt={video.title} />
                            </Link>
                        </div>
                        <div className='video__info'>
                            <Link to={`/channel/${video.channelId}`}>
                                {video.name}
                            </Link>
                        </div>
                    </div>
                    )) */}
                </div>
            </section>
        </Main>
    )
}

export default Gsap