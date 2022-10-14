import './job-modal.scss';
import ModalCloseBtn from '../../modal-close-btn/modal-close-btn';
import JobModalPage from '../../job-modal-page/job-modal-page';
import JobModalSidebar from '../../job-modal-sidebar/job-modal-sidebar';

function JobModal(props) {
  const { isModalOpened, closeModal } = props;

  function closeFunction() {
    closeModal(!isModalOpened)
  }

  return (
    <div className='job-modal'>
      <ModalCloseBtn className="job-modal__close-btn" closeFunction={closeFunction}/>

      <JobModalPage/>
      <JobModalSidebar/>
    </div>
  );
}

export default JobModal;
