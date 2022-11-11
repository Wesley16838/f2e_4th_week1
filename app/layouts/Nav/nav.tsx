import { Link } from "@remix-run/react"
import { useState } from "react";
import user from "~/assets/images/btn_user.png";
import info from "~/assets/images/btn_menu_info.png";
import list from "~/assets/images/btn_menu_list.png";
import strategy from "~/assets/images/btn_menu_strategy.png";
import job from "~/assets/images/btn_menu_job.png";
import btn_open from "~/assets/images/btn_burger_open.png";
import btn_close from "~/assets/images/btn_burger_close.png";

const Nav = () => {
    const [open, setOpen] = useState(false);
    const handleOnTriggerNav = () => {
        console.log('handleOnTriggerNav')
        setOpen(!open);
    };
    return (
        <div className="nav-wrapper"> 
            <a href="https://2022.thef2e.com/users" className="profile-image">
                <img src={user} />
            </a>
            <nav className="side-nav" style={{
                left: open ? "0px" : "-155px",
            }}>
                <Link to='/' className="nav-item">
                    <img src={info} width={60}/>
                    關卡資訊
                </Link>
                <Link to='/' className="nav-item">
                    <img src={list} width={60}/>
                    作品列表
                </Link>
                <Link to='/' className="nav-item">
                    <img src={strategy} width={60}/>
                    攻略資源
                </Link>
                <Link to='/' className="nav-item">
                    <img src={job} width={60}/>
                    求職專區
                </Link>
            </nav>
            <button onClick={() => handleOnTriggerNav()} className="nav-btn" style={{
                left: open ? "155px" : "0px",
            }}>
                <img src={open ? btn_close : btn_open} width={60}/>
            </button>
        </div>   
    )
}

export default Nav