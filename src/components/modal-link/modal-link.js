import addPageIcon from "../images/add-page-icon.svg";
import "aos/dist/aos.css";
import {useEffect} from "react";


function ModalLink() {


  return (
    <div className="job-modal__sidebar-link--wrapper">
      <img src={addPageIcon} width="30" height="30" alt="add page icon" />
      <a
        className="job-modal__sidebar-link"
        href="/jobModalPageView"
        target="_blanked"
      >
        Open In New Window
      </a>
    </div>
  );
}

export default ModalLink;
