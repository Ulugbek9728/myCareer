import React, {useEffect, useState} from 'react';
import "./vebsite.scss"

function VebsiteCom(props) {



    const [addInput, setAddInput] = useState(
        <></>
    );


    // const addInputList = () =>{
    //     const newAddInput = addInput
    //     newAddInput(<><input className="form-control inputs-all" type="text"/></>)
    //     newAddInput.push()
    // };

    return (
        <>
            <p className="write-about">Contacts</p>
            <div>
                <input type="text" className="form-control inputs-all1 mt-4" placeholder="Provide a link to your website "/>
            </div>
            <p className="complete-your mt-3">Choose in which of these social networks you have an account</p>
            <div className="firstLine-img mt-4">
                <img src="image/Frame 42126.png" alt=""/>
                <img src="image/Frame 42127.png" alt=""/>
                <img src="image/Frame 42128.png" alt=""/>
            </div>
            <div className="firstLine-img mt-4">
                <img src="image/Frame 42129.png" alt=""/>
                <img src="image/Frame 42130.png" alt=""/>
                <img src="image/Frame 42131.png" alt=""/>
            </div>
        </>
    );
}

export default VebsiteCom;

