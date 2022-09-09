import React, {useEffect, useState} from 'react';
import "./vebsite.scss"

function VebsiteCom(props) {


    const firsImageNone = () =>{
       const firstImg =  document.getElementById("firstImg");
       const watsApp =  document.getElementById("watsApp");
        firstImg.style.display = "none";
        watsApp.style.display = "block"
    };
    const secondImgNone = () =>{
        const secondImg =  document.getElementById("secondImg");
        const facebook =  document.getElementById("facebook");
        secondImg.style.display = "none";
        facebook.style.display = "block"
    };
    const thirdImageNone = () =>{
        const thirdImg =  document.getElementById("thirdImg");
        const instagram =  document.getElementById("instagram");
        thirdImg.style.display = "none";
        instagram.style.display = "block"
    };
    const fourImageNone = () =>{
        const fourImg =  document.getElementById("fourImg");
        const telegram =  document.getElementById("telegram");
        fourImg.style.display = "none";
        telegram.style.display = "block"
    };
    const fiveImageNone = () =>{
        const fiveImg =  document.getElementById("fiveImg");
        const gitHub =  document.getElementById("gitHub");
        fiveImg.style.display = "none";
        gitHub.style.display = "block"
    };



    const sixImageNone = () =>{
        const sixImg =  document.getElementById("sixImg");
        const twitter =  document.getElementById("twitter");
        sixImg.style.display = "none";
        twitter.style.display = "block"
    };


    const [website, setWebsite] = useState("");
    const [watsapp, setWatsapp] = useState("");
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("");
    const [telegram, setTelegram] = useState("");
    const [github, setGithub] = useState("");
    const [twitter, setTwitter] = useState("");

    const [allDatalist1, setAllDatalist1] = useState([]);


    const xImg = () =>{
        setWatsapp("");
        const firstImg =  document.getElementById("firstImg");
        const watsApp =  document.getElementById("watsApp");
        firstImg.style.display = "block";
        watsApp.style.display = "none";

    };
    const xImg2 = () =>{
        setFacebook("");
        const secondImg =  document.getElementById("secondImg");
        const facebook =  document.getElementById("facebook");
        secondImg.style.display = "block";
        facebook.style.display = "none";

    };
    const xImg3 = () =>{
        setInstagram("");
        const thirdImg =  document.getElementById("thirdImg");
        const instagram =  document.getElementById("instagram");
        thirdImg.style.display = "block";
        instagram.style.display = "none";

    };
    const xImg4 = () =>{
        setTelegram("");
        const fourImg =  document.getElementById("fourImg");
        const telegram =  document.getElementById("telegram");
        fourImg.style.display = "block";
        telegram.style.display = "none";
    };
    const xImg5 = () =>{
        setGithub("");
        const fiveImg =  document.getElementById("fiveImg");
        const gitHub =  document.getElementById("gitHub");
        fiveImg.style.display = "block";
        gitHub.style.display = "none";
    };



    const xImg6 = () =>{
        setTwitter("");
        const sixImg = document.getElementById("sixImg");
        const twitter =  document.getElementById("twitter");
        sixImg.style.display = "block";
        twitter.style.display = "none";
    };



    return (
        <>
            <p className="write-about">Contacts</p>
           <div>
               <label className="img-label" htmlFor=""><img src="image/Group.png" alt=""/></label>
               <input onChange={(e)=>setWebsite( e.target.value)} type="text" className="form-control inputs-all1 websiteInput mt-4" placeholder="Provide a link to your website "/>
           </div>
            <div className="watsApp" id="watsApp">
                <label className="img-label1" htmlFor=""><img src="image/watsApp.png" alt=""/></label>
                <input onChange={(e)=>setWatsapp(e.target.value)} value={watsapp} type="text" className="form-control inputs-all1 all-inputs-class mt-4" placeholder="Provide a link to your wats app account "/>
                <div onClick={xImg} className="x-img" id="xImg"><img src="image/Vector 2.png" alt=""/></div>
            </div>
            <div className="facebook" id="facebook">
                <label className="img-label1" htmlFor=""><img src="image/facebook.png" alt=""/></label>
                <input onChange={(e)=>setFacebook( e.target.value)} value={facebook} type="text" className="form-control inputs-all1 all-inputs-class mt-4" placeholder="Provide a link to your facebook account "/>
                <div onClick={xImg2} className="x-img2" id="xImg2"><img src="image/Vector 2.png" alt=""/></div>
            </div>
            <div className="instagram" id="instagram">
                <label className="img-label1" htmlFor=""><img src="image/instagram.png" alt=""/></label>
                <input onChange={(e)=>setInstagram( e.target.value)} value={instagram} type="text" className="form-control inputs-all1 all-inputs-class mt-4" placeholder="Provide a link to your instagram account "/>
                <div onClick={xImg3} className="x-img2" id="xImg2"><img src="image/Vector 2.png" alt=""/></div>
            </div>
            <div className="telegram" id="telegram">
                <label className="img-label1" htmlFor=""><img src="image/telegram.png" alt=""/></label>
                <input onChange={(e)=>setTelegram( e.target.value)} value={telegram} type="text" className="form-control inputs-all1 all-inputs-class mt-4" placeholder="Provide a link to your telegram account "/>
                <div onClick={xImg4} className="x-img2" id="xImg2"><img src="image/Vector 2.png" alt=""/></div>
            </div>
            <div className="gitHub" id="gitHub">
                <label className="img-label1" htmlFor=""><img src="image/gitHub.png" alt=""/></label>
                <input onChange={(e)=>setGithub(e.target.value)} value={github} type="text" className="form-control inputs-all1 all-inputs-class mt-4" placeholder="Provide a link to your github account "/>
                <div onClick={xImg5} className="x-img2" id="xImg2"><img src="image/Vector 2.png" alt=""/></div>
            </div>
            <div className="twitter" id="twitter">
                <label className="img-label1" htmlFor=""><img src="image/twitter.png" alt=""/></label>
                <input onChange={(e)=>setTwitter( e.target.value)} value={twitter} type="text" className="form-control inputs-all1 all-inputs-class mt-4" placeholder="Provide a link to your twitter account "/>
                <div onClick={xImg6} className="x-img2" id="xImg2"><img src="image/Vector 2.png" alt=""/></div>
            </div>
            <p className="complete-your mt-3">Choose in which of these social networks you have an account</p>
            <div className="firstLine-img mt-4">
                <img onClick={firsImageNone} id="firstImg" src="image/Frame 42126.png" alt=""/>
                <img onClick={secondImgNone} id="secondImg" src="image/Frame 42127.png" alt=""/>
                <img onClick={thirdImageNone} id="thirdImg" src="image/Frame 42128.png" alt=""/>
                <img onClick={fourImageNone} id="fourImg" src="image/Frame 42129.png" alt=""/>
                <img onClick={fiveImageNone} id="fiveImg" src="image/Frame 42130.png" alt=""/>
                <img onClick={sixImageNone} id="sixImg" src="image/Frame 42131.png" alt=""/>
            </div>
        </>
    );
}

export default VebsiteCom;

