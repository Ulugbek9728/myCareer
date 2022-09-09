import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Rate, Collapse} from 'antd';

const {Panel} = Collapse;


function WorkCompleted(props) {
    function WorkStetComplet() {
        var spanLine = document.getElementById("spanLineBlue");
        spanLine.style.left = "0%"
    }

    function WorkStetProgress() {
        var spanLine = document.getElementById("spanLineBlue");
        spanLine.style.left = "53.5%"
    }

    const naviget = useNavigate();

    function time() {
        setTimeout(() => {
            naviget("/ProfilPage/InProgress")
        }, 900)
    }

    return (
        <div className="WorkCompleted">
            <span onClick={WorkStetComplet} className="WorkHistoryButton">
                Completed (<span>324</span>)
            </span>
            <span onClick={() => {
                WorkStetProgress();
                time()
            }} className="WorkHistoryButton">
                In Progres (<span>3</span>)
            </span>
            <div className="lineWork"><span id="spanLineBlue"></span></div>
            <div className="Completed">
                <div className="title">Odoo 13.0 Implementation Support</div>
                <div className='box'>
                    <div className="left">
                        <Rate disabled allowHalf defaultValue={3.5}/> <span className='price'>3.5</span>
                    </div>
                    <div className="righte">Aug 5, 2021 - Oct 21, 2021</div>
                </div>
                <Collapse ghost>
                    <Panel header="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dicta
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dicta
                            dolorum fuga id in maiores nisi non obcaecati perspiciatis porro praesentium quo repellat
                            sapiente sit, unde vel veniam voluptates.
                    </Panel>

                </Collapse>
                <hr/>
                <div className="footer">
                    <div className="left">
                        <img className='avatarCampny' src="/images/avatar5.png" alt=""/>
                        <div>
                            <h3>Napa Automotive</h3>
                            <div className='verifiBox'>
                                <img className='verifi' src="/images/verification.svg" alt=""/>
                                Verified
                            </div>
                        </div>
                    </div>
                    <div className="righte">
                        <div className="box">
                            <h3>5$</h3>
                            <p>Hourly</p>
                        </div>
                        <div className="box">
                            <h3>10</h3>
                            <p>Hours</p>
                        </div>
                        <div className="box">
                            <h3>50$</h3>
                            <p>Totally paid</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="Completed">
                <div className="title">Odoo 13.0 Implementation Support</div>
                <div className='box'>
                    <div className="left">
                        <Rate disabled allowHalf defaultValue={3.5}/> <span className='price'>3.5</span>
                    </div>
                    <div className="righte">Aug 5, 2021 - Oct 21, 2021</div>
                </div>
                <Collapse ghost>
                    <Panel header="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dicta
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dicta
                        dolorum fuga id in maiores nisi non obcaecati perspiciatis porro praesentium quo repellat
                        sapiente sit, unde vel veniam voluptates.
                    </Panel>
                </Collapse>
                <hr/>
                <div className="footer">
                    <div className="left">
                        <img className='avatarCampny' src="/images/avatar5.png" alt=""/>
                        <div>
                            <h3>Napa Automotive</h3>
                            <div className='verifiBox'>
                                <img className='verifi' src="/images/verification.svg" alt=""/>
                                Verified
                            </div>
                        </div>
                    </div>
                    <div className="righte">
                        <div className="box">
                            <h3>5$</h3>
                            <p>Hourly</p>
                        </div>
                        <div className="box">
                            <h3>10</h3>
                            <p>Hours</p>
                        </div>
                        <div className="box">
                            <h3>50$</h3>
                            <p>Totally paid</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Completed">
                <div className="title">Odoo 13.0 Implementation Support</div>
                <div className='box'>
                    <div className="left">
                        <Rate disabled allowHalf defaultValue={3.5}/> <span className='price'>3.5</span>
                    </div>
                    <div className="righte">Aug 5, 2021 - Oct 21, 2021</div>
                </div>
                <Collapse ghost>
                    <Panel header="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dicta
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dicta
                        dolorum fuga id in maiores nisi non obcaecati perspiciatis porro praesentium quo repellat
                        sapiente sit, unde vel veniam voluptates.
                    </Panel>
                </Collapse>
                <hr/>
                <div className="footer">
                    <div className="left">
                        <img className='avatarCampny' src="/images/avatar5.png" alt=""/>
                        <div>
                            <h3>Napa Automotive</h3>
                            <div className='verifiBox'>
                                <img className='verifi' src="/images/verification.svg" alt=""/>
                                Verified
                            </div>
                        </div>
                    </div>
                    <div className="righte">
                        <div className="box">
                            <h3>5$</h3>
                            <p>Hourly</p>
                        </div>
                        <div className="box">
                            <h3>10</h3>
                            <p>Hours</p>
                        </div>
                        <div className="box">
                            <h3>50$</h3>
                            <p>Totally paid</p>
                        </div>
                    </div>
                </div>

            </div>
            <button className='seeMore'>See more...</button>
        </div>
    );
}

export default WorkCompleted;