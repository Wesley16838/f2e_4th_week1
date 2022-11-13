
import titleImg from "~/assets/images/section_two_title.png";
import btnJoin from "~/assets/images/btn_join.png";
import { useEffect, useState } from "react";
const SectionTwo = () => {
    const [title, setTitle] = useState({
        opacity: "0",
    })

    const [buttons, setButtons] = useState({
        opacity: "0",
        bottom: "-10%"
    })

    const handleOnTitleScroll = (e:Event) => {
        const window = e.currentTarget as Window;
        const currentPosition = window.scrollY;
        if(currentPosition < 1885) {
            setTitle({
                opacity: "0"
            })
        } else if (1885 <= currentPosition && currentPosition < 2356) {
            setTitle({
                opacity: "1"
            })
        } else {
            setTitle({
                opacity: "0"
            })
        }
      }
    
      useEffect(()=> {
        window.addEventListener("scroll", handleOnTitleScroll);
        return () => window.removeEventListener("scroll", handleOnTitleScroll);
    }, [])

    const handleOnButtonsScroll = (e:Event) => {
        const window = e.currentTarget as Window;
        const currentPosition = window.scrollY;
        if(currentPosition < 2042) {
            setButtons({
                opacity: "0",
                bottom: "-10%"
            })
        } else if (2042 <= currentPosition && currentPosition < 2356) {
            setButtons({
                opacity: "1",
                bottom: "0%"
            })
        } else {
            setButtons({
                opacity: "0",
                bottom: "-10%"
            })
        }
      }
    
      useEffect(()=> {
        window.addEventListener("scroll", handleOnButtonsScroll);
        return () => window.removeEventListener("scroll", handleOnButtonsScroll);
    }, [])
    
    return (
        <div>
            <img src={titleImg} className="section-title" style={title}/>
            <h5 className="section-subtitle" style={title}>以下兩個角色進行攜手合作</h5>
            <div className="buttons-wrapper">
                <img src={btnJoin} style={buttons} className="buttons"/>
                <img src={btnJoin} style={buttons} className="buttons"/>
                <img src={btnJoin} style={buttons} className="buttons"/>
            </div>
        </div>  
    )
}

export default SectionTwo;