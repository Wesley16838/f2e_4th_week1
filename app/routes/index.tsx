import { useCallback, useEffect, useState } from "react";
import Header from "~/layouts/Header";
import road from "~/assets/images/road.png";
import dog from "~/assets/images/dog.gif";
import cat from "~/assets/images/cat.gif";
import pig from "~/assets/images/pig.gif";
import btn_join from "~/assets/images/btn_join.png";
import btn_join_hand from "~/assets/images/btn_join_hand.png";
import map from "~/assets/images/map.svg";
import map_now from "~/assets/images/map_now.gif";
import logo from "~/assets/images/logo.png";

export default function Index() {
  const [logoImg, setLogoImg] = useState<any>({
    opacity: "0"
  })

  const handleOnScroll = useCallback((e:Event) => {
    const window = e.currentTarget as Window;
    const currentPosition = window.scrollY;
    if(currentPosition < 943) {
      setLogoImg({opacity : "0"})
    } else {
      setLogoImg({opacity : "1"})
    }
  }, [])
        
  useEffect(()=> {
      window.addEventListener("scroll", handleOnScroll);
      return () => window.removeEventListener("scroll", handleOnScroll);
  }, [])

  return (
    <div className="main">
      <img src={logo} className="logo" style={logoImg}/>
      <div className="join-btn-wrapper">
        <h5 className="primiary-tx-color">JOIN</h5>
        <img src={btn_join_hand} className="join-hand-btn"/>
        <a href="https://2022.thef2e.com/signup" className="join-btn">
            <img src={btn_join} width={103}/>
        </a>
      </div>
      <div className="map-wrapper">
        <img src={map} className="map"/>
        <img src={map_now} className="map-now"/>
      </div>
      <Header />
      <div className="animation-wrapper">
        <img src={dog} className="animation-image"/>
        <img src={cat} className="animation-image"/>
        <img src={pig} className="animation-image"/>
      </div>
      <img src={road} className="road-image"/>
    </div>
  );
}
