import React, {useState, useEffect} from 'react'
import Main from '../components/section/Main'
import { youtubeText } from '../data/youtube'
import VideoCard from '../components/videos/VideoCard'

const Youtube = () => {
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 300)
    }, []);

    const youtubePageClass = loading ? 'isLoading' : 'isLoaded';
    return (
        <Main 
            title = "유튜브 사이트"
            description="유튜브 사이트 튜토리얼 강의입니다.">
            <section id='youtube' className={youtubePageClass}>
                <h2>유튜브!</h2>
                <div className='video__inner'>
                    <VideoCard videos={youtubeText}/>
                    {/* {youtubeText.map((video, key)=> (
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
                    ))} */}
                </div>
            </section>
        </Main>
    )
}

export default Youtube