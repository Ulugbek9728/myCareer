import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Collapse} from "antd";

const {Panel} = Collapse;

function InProgress(props) {
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
            naviget("/ProfilPage/")
        }, 900)
    }

    return (
        <div className="inProgress">
            <span onClick={() => {
                WorkStetComplet();
                time()
            }} className="WorkHistoryButton">
                Completed (<span>324</span>)
            </span>
            <span onClick={WorkStetProgress} className="WorkHistoryButton">
                In Progres (<span>3</span>)
            </span>
            <div className="lineWork"><span id="spanLineBlue"></span></div>
            <div className="Progress">
                <div className="titleBox">
                    <div className="leftTitle">
                        Business Card Design
                    </div>
                    <div className="title">10$</div>
                    <div className="title">3 days</div>
                    <div className="righteTitle">
                        <span>Required level: </span>
                        <span>Middle</span>
                    </div>
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
                    <img className='avatarCampny' src="/images/avatar5.png" alt=""/>
                    <div>
                        <h3>Napa Automotive</h3>
                        <div className='verifiBox'>
                            <img className='verifi' src="/images/verification.svg" alt=""/>
                            Verified
                        </div>
                    </div>
                </div>
                <div className="footerBotom">
                    <div className="d-flex">
                        <span>Figma</span>
                        <span>Adobe PhotoShop</span>
                        <span>Adobe Illustrator</span>
                    </div>
                    <div className="d-flex">
                        <span>Started 1 day ago</span>
                    </div>
                </div>
            </div>
            <div className="Progress">
                <div className="titleBox">
                    <div className="leftTitle">
                        Business Card Design
                    </div>
                    <div className="title">10$</div>
                    <div className="title">3 days</div>
                    <div className="righteTitle">
                        <span>Required level: </span>
                        <span>Middle</span>
                    </div>
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
                    <img className='avatarCampny' src="/images/avatar5.png" alt=""/>
                    <div>
                        <h3>Napa Automotive</h3>
                        <div className='verifiBox'>
                            <img className='verifi' src="/images/verification.svg" alt=""/>
                            Verified
                        </div>
                    </div>
                </div>
                <div className="footerBotom">
                    <div className="d-flex">
                        <span>Figma</span>
                        <span>Adobe PhotoShop</span>
                        <span>Adobe Illustrator</span>
                    </div>
                    <div className="d-flex">
                        <span>Started 1 day ago</span>
                    </div>
                </div>
            </div>
            <div className="Progress">
                <div className="titleBox">
                    <div className="leftTitle">
                        Business Card Design
                    </div>
                    <div className="title">10$</div>
                    <div className="title">3 days</div>
                    <div className="righteTitle">
                        <span>Required level: </span>
                        <span>Middle</span>
                    </div>
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
                    <img className='avatarCampny' src="/images/avatar5.png" alt=""/>
                    <div>
                        <h3>Napa Automotive</h3>
                        <div className='verifiBox'>
                            <img className='verifi' src="/images/verification.svg" alt=""/>
                            Verified
                        </div>
                    </div>
                </div>
                <div className="footerBotom">
                    <div className="d-flex">
                        <span>Figma</span>
                        <span>Adobe PhotoShop</span>
                        <span>Adobe Illustrator</span>
                    </div>
                    <div className="d-flex">
                        <span>Started 1 day ago</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default InProgress;