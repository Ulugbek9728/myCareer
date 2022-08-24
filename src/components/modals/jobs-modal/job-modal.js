import likeIcon from "../../../img/like.svg";
import closeIcon from "../../images/close-icon.svg";
import bgImage from "../../images/portfolios-image.jpg";
import fileIcon from "../../images/file-icon.svg";
import addPageIcon from "../../images/add-page-icon.svg";
import "./job-modal.scss";
import { Link } from "react-router-dom";

function JobModal(props) {
  const { isModalOpened, closeModal } = props;
  return (
    <div className="job-modal">
      <button
        className="job-modal__close-btn"
        onClick={() => closeModal(!isModalOpened)}
      >
        <span className="job-modal__close-icon">
          <img src={closeIcon} width="21" height="21" alt="close icon" />
        </span>
      </button>

      {/* Main Page */}
      <div className="job-modal__page">
        <div className="job-modal__head">
          <h2 className="job-modal__title">Business Card Design</h2>
          <p className="job-modal__price">5$</p>
          <span className="job-modal__like-icon">
            <img src={likeIcon} alt="like icon" width={"30"} height={"27"} />
          </span>
        </div>
        <p className="job-modal__text">
          Sit lacinia feugiat commodo hac tristique. Non lobortis in eu a,
          mattis ullamcorper nullam. Facilisi ipsum mattis hac urna scelerisque
          nunc id. Aliquam nullam turpis magna placerat. Amet aliquam eget
          dignissim odio leo, in adipiscing. Aliquet mattis in tortor, eros.
        </p>
        <img src={bgImage} width="830" height="464" alt="background image" />
        <form action="get" className="job-modal__form">
          <label className="job-modal__form-price" for="price">
            <input className="input" id="price" placeholder="Price" />
            <span className="span">USD</span>
          </label>
          <label className="job-modal__form-terms" for="terms">
            <input className="input" id="terms" placeholder="Terms" />
            <span className="span">Days</span>
          </label>
          <textarea
            className="job-modal__form-covering--letter"
            placeholder="Covering Letter"
          />
          <label className="job-modal__form-file" for="file">
            <input id="file" className="input" type="file" />
            <span className="span">
              <img src={fileIcon} width="24" height="24" alt="file img" />
            </span>
          </label>
          <button className="job-modal__form-button" type="submit">
            Apply
          </button>
        </form>
      </div>

      <div className="job-modal__sidebar">
        <div className="job-modal__sidebar-link--wrapper">
          <img src={addPageIcon} width="30" height="30" alt="add page icon" />
          <a className="job-modal__sidebar-link" href="/" target="_blanked">
            Open In New Window
          </a>
        </div>
        <div className="job-modal__sidebar-user">
          <div className="user__job-history">
            <div className="user__job-history--wrapper stripe">
              <p className="user__job-payment--number">$5936</p>
              <p className="user__job-payment--text">Totally paid</p>
            </div>
            <div className="user__job-history--wrapper">
              <p className="user__job-payment--number">324</p>
              <p className="user__job-payment--text">Posted jobs</p>
            </div>
          </div>
          <div className="user__info">
            <div className="user__image-wrapper">
              <img width="90" height="90" alt="user image" />
              <img width="24" height="24" alt="user verificated" />
            </div>
            <div className="user__text-wrapper">
              <h2 className="user__name">
                Umid
                <br /> Abdusattorov
              </h2>
              <p className="user__job">CEO</p>
              <a className="user__company-link" href="/" target="_blank">
                Napa Automotive
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobModal;
