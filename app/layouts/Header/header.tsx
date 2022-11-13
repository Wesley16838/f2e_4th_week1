import { useCallback, useEffect, useState } from "react";
import logotext from "~/assets/images/logo_text.png";
import users from "~/assets/images/users.png";
import start from "~/assets/images/start.png";
import state_ready from "~/assets/images/state_ready.png";
import state_1 from "~/assets/images/state_1.png";
import state_2 from "~/assets/images/state_2.png";
import state_3 from "~/assets/images/state_3.png";
import left_cloud from "~/assets/images/left_cloud.png";
import right_cloud from "~/assets/images/right_cloud.png";

const Header = () => {
    const [logo, setLogo] = useState({
        opacity: "1"
    })
    const [title, setTitle] = useState({
        opacity: "1"
    })
    const [category, setCategory] = useState({
        opacity: "1"
    })
    const [startImg, setStartImg] = useState<any>({
        opacity: "1"
    })
    const [lightsrc, setLightSrc] = useState<any>({
        url:state_ready,
        opacity: "1"
    });
    const [leftcloud, setLeftCloud] = useState<any>({
        left: "10%",
        transform: "translateY(-50%) scale(1)",
        opacity: "1"
    });
    const [rightcloud, setRightCloud] = useState<any>({
        right: "10%",
        transform: "translateY(-50%) scale(1)",
        opacity: "1"
    });

    const handleOnScroll = useCallback((e:Event) => {
        const window = e.currentTarget as Window;
        const currentPosition = window.scrollY;
        if(currentPosition < 943) {
            setLogo({ opacity:"1" })
            setTitle({ opacity:"1" })
            setStartImg({ opacity:"1" })
        } else {
            setLogo({ opacity:"0" })
            setTitle({ opacity:"0" })
            setStartImg({ opacity:"0" })
        }

        if(currentPosition < 628) {
            setCategory({ opacity:"1" })
        } else {
            setCategory({ opacity:"0" })
        }
    }, [])
            
    useEffect(()=> {
        window.addEventListener("scroll", handleOnScroll);
        return () => window.removeEventListener("scroll", handleOnScroll);
    }, [])

    const handleOnLightScroll = useCallback((e:Event) => {
        const window = e.currentTarget as Window;
        const currentPosition = window.scrollY;
        if (0 <= currentPosition && currentPosition <= 120 && lightsrc.url !== state_ready) {
            setLightSrc({...lightsrc, url: state_ready})
        } else if (120 < currentPosition && currentPosition <= 240 && lightsrc.url !== state_3) {
            setLightSrc({...lightsrc, url: state_3})
        } else if (240 < currentPosition && currentPosition <= 360 && lightsrc.url !== state_2) {
            setLightSrc({...lightsrc, url: state_2})
        } else if (360 < currentPosition && currentPosition <= 480 && lightsrc.url !== state_1) {
            setLightSrc({...lightsrc, url: state_1})
        } else if (currentPosition < 628){
            setLightSrc({...lightsrc, opacity: "1"})
        } else {
            setLightSrc({...lightsrc, opacity: "0"})
        }
    }, [lightsrc]);

    useEffect(()=> {
        window.addEventListener("scroll", handleOnLightScroll);
        return () => window.removeEventListener("scroll", handleOnLightScroll);
    }, [lightsrc])

    const handleOnCloudScroll = useCallback((e:Event) => {
        const window = e.currentTarget as Window;
        const currentPosition = window.scrollY;
        if(currentPosition <= 360) {
            setLeftCloud({left: `${10 + currentPosition/24}%`, transform: `translateY(-50%) scale(${1 - currentPosition/360})`});
            setRightCloud({right: `${10 + currentPosition/24}%`, transform: `translateY(-50%) scale(${1 - currentPosition/360})`})
        }
    }, [])

    useEffect(()=> {
        window.addEventListener("scroll", handleOnCloudScroll);
        return () => window.removeEventListener("scroll", handleOnCloudScroll);
    }, [lightsrc])

    return (
        <div className="header">
            <img src={left_cloud} className="left-cloud" style={leftcloud}/>
            <img src={right_cloud} className="right-cloud" style={rightcloud}/>
            <img src={start} className="start-image" style={startImg}/>
            <img src={lightsrc.url} className="state-light" style={{opacity: lightsrc.opacity}}/>
            <img src={logotext} className="logotext" style={logo}/>
            <img src={start} className="start-image" style={startImg}/>
            <div className="header-title" style={title}>
                <h1>
                    互動式網頁設計
                </h1>
            </div>
            <div className="category-wrapper">
                <div className="category-container" style={category}>
                    <h5 className="category-title">前端工程師</h5>
                    <div className="category-group">
                    <img src={users} width={22}/>
                    <h5 className="category-subtitle">920</h5>
                    </div>
                </div>
                <div className="category-container" style={category}>
                    <h5 className="category-title">UI設計師</h5>
                    <div className="category-group">
                    <img src={users} width={22}/>
                    <h5 className="category-subtitle">110</h5>
                    </div>
                </div>
                <div className="category-container" style={category}>
                    <h5 className="category-title">團體組</h5>
                    <div className="category-group">
                    <img src={users} width={22}/>
                    <h5 className="category-subtitle">41</h5>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Header