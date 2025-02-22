import React from 'react';
import Jops from "./Jops";
import RoutesPath from "../../routes/routes";
import {useLocation, useNavigate} from "react-router-dom";
import {connect} from "react-redux";

const BestMatches = (props) => {

    const history = useLocation();
    // console.log(history);
    console.log("props");
    console.log(props);
    console.log(props.skill);

    return (
        <Jops history={history.pathname}>
            <div className="bestMatches">
                <div className="d-flex justify-content-between align-items-center">
                    <h5>{props.search}</h5>
                    <div className="circle_jop">
                        <img src="/images/yurak.png" alt="Error"/>
                    </div>
                </div>
                <p>
                    {props.description}
                </p>
                <div className="d-flex">
                    {props.skill.map((item, index) => {
                        return (
                            <div key={item.index} className="rectangle">
                                {item.label}
                            </div>
                        )
                    })}
                </div>
                <div className="d-flex mt-5">
                    <div><img src="/images/location_jop.png" alt="Error"/></div>
                    <p className="mb-0 ms-3">{props.location}</p>
                </div>
            </div>
        </Jops>
    );
};

const mapStateToProps = (state) => {
    return {
        search: state.job.search,
        location: state.job.location,
        description: state.job.description,
        price: state.job.price,
        skill: state.job.skill
    }
};

export default connect(mapStateToProps, null)(BestMatches);