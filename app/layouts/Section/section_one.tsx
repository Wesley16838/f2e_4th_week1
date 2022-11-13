import { useEffect, useState } from "react";
import titleImg from "~/assets/images/section_one_title.png";
import leftImg from "~/assets/images/q1.png";
import centerImg from "~/assets/images/q2.png";
import rightImg from "~/assets/images/q3.png";

const SectionOne = () => {
    const initValue = {
        one: {
            left: "-10%",
            opacity: "0",
        },
        two: {
            opacity: "0",
        },
        three: {
            right: "-10%",
            opacity: "0",
        }
    }
    const [title, setTitle] = useState({
        opacity: "0",
    })
    const [questionPart, setQuestionPart] = useState(initValue)

    const handleOnTitleScroll = (e:Event) => {
        const window = e.currentTarget as Window;
        const currentPosition = window.scrollY;
        if(currentPosition < 1100) {
            setTitle({
                opacity: "0"
            })
        } else if (1100 <= currentPosition && currentPosition < 1728) {
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

    const handleOnQuestionsScroll = (e:Event) => {
        const window = e.currentTarget as Window;
        const currentPosition = window.scrollY;
        if(currentPosition < 1257) {
            setQuestionPart(initValue);
        } else if(1257 <= currentPosition && currentPosition < 1414) {
            setQuestionPart(val => {
                if(val.one.opacity === "0") {
                    return {
                        ...val,
                        one: {
                            left: "0%",
                            opacity: "1"
                        }
                    }
                } else {
                    if(val.two.opacity === "1") {
                        return {
                            ...val,
                            two: {
                                opacity: "0"
                            }
                        }
                    } else {
                        return {
                            ...val,
                            one: {
                                left: "0%",
                                opacity: "1"
                            }
                        }
                    } 
                }
            })
        } else if (1414 <= currentPosition && currentPosition < 1571) {
            setQuestionPart(val => {
                if(val.one.opacity === "0") {
                    return {
                        ...val,
                        two: {
                            opacity: "0"
                        }
                    }
                } else {
                    if(val.three.opacity === "1") {
                        return {
                            ...val,
                            three: {
                                right: "-10%",
                                opacity: "0"
                            }
                        }
                    } else {
                        return {
                            ...val,
                            two: {
                                opacity: "1"
                            }
                        }
                    }
                }
            })
        } else if (1571 <= currentPosition && currentPosition < 1728) {
            setQuestionPart(val => {
                if(val.one.opacity === "0") {
                    return {
                        one: {
                            left: "0%",
                            opacity: "1",
                        },
                        two: {
                            opacity: "1",
                        },
                        three: {
                            right: "0%",
                            opacity: "1"
                        }
                    }
                } else {
                    return {
                        ...val,
                        three: {
                            right: "0%",
                            opacity: "1"
                        }
                    }
                }
            })
        } else {
            setQuestionPart(initValue);
        }
      }
    
      useEffect(()=> {
        window.addEventListener("scroll", handleOnQuestionsScroll);
        return () => window.removeEventListener("scroll", handleOnQuestionsScroll);
    }, [])

    return (
        <div>
            <img src={titleImg} className="section-title " style={title}/>
            <div className="questions-wrapper">
                <img src={leftImg} className="question" style={questionPart.one}/>
                <img src={centerImg} className="question" style={questionPart.two}/>
                <img src={rightImg} className="question" style={questionPart.three}/>
            </div>
        </div>  
    );
}

export default SectionOne;