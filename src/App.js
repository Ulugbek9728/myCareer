import React, {useState} from 'react';
import Login from "./components/Login";
import {connect, useDispatch} from "react-redux";
import PostJop from "./components/postJop/postJop";
import PostJop1 from "./components/postJop/postJop1";
import Personalization from "./components/Personalization";
import Home from "./components/Home";
import {Routes, Route} from "react-router-dom";
import RoutesPath from "./routes/routes";
import AboutUs from "./components/AboutUs";
import {displayCircle} from "./actions/careerAction";
import PostJop2 from "./components/postJop/postJop2";
import PostJop3 from "./components/postJop/postJop3";
import ProfileCompany from "./components/profile-company";
import BestMatches from "./components/postJop/BestMatches";
import NewJops from "./components/postJop/NewJops";
import SavedJops from "./components/postJop/SavedJops";
import {ToastContainer} from "react-toastify";
import NotFound from "./components/NotFound";
import MyCv from "./components/my-cv";
import EditPassword from "./components/edit-password";
import ChatForFreelancer from "./components/chat-for-freelancer";
import ChatForCompany from "./components/chat-for-company";
import Talants from "./components/talants/talants";
import BestMatchesTalants from "./components/talants/bestMatches";
import NewTalants from "./components/talants/NewTalants";
import Saved from "./components/talants/Saved";
import SignUpPage from "./components/sign-up-page";
import SignUp from "./components/signUP";
import CompleteForm from "./components/completeForm/CompleteForm";
import CompleteCompany from "./components/completeCampany/CompleteCompany";
import ContactUs from "./components/ContactUs";
import ContactUsPage from "./components/ContactUsPage";
import NewJobs from "./components/postJop/NewJobs";
import JobModalPageView from './components/job-modal-page-view/job-modal-page-view';

const enhancer = connect(
    ({resumes: {doneResumes}}) =>
        ({doneResumes}), null);

const App = props => {
    const dispatch = useDispatch();
    const [topSpace, setTopSpace] = useState(0);


    return (
        <div className="app-wrapper">
            {/*<PostJop1/>*/}
            {/*<PostJop2/>*/}
            {/*<PostJop3/>*/}
            {/*<BestMatches/>*/}
            <Routes>
                <Route path={RoutesPath.home} element={<Home/>}/>
                <Route path={RoutesPath.login} element={<Login/>}/>
                <Route path={RoutesPath.signUp} element={<SignUp/>}/>
                <Route path={RoutesPath.templates} element={<Personalization/>}/>
                <Route path={RoutesPath.complete} element={<CompleteForm/>}/>
                <Route path={RoutesPath.companyCom} element={<CompleteCompany/>}/>
                <Route path={RoutesPath.postJop} element={<PostJop/>}/>
                <Route path={RoutesPath.postJop2} element={<PostJop2/>}/>
                <Route path={RoutesPath.postJop3} element={<PostJop3/>}/>
                <Route path={RoutesPath.jop} element={<BestMatches/>}/>
                <Route path={RoutesPath.newJops} element={<NewJops/>}/>
                <Route path={RoutesPath.savedJops} element={<SavedJops/>}/>
                <Route onClick={()=>{ dispatch(displayCircle()) }} path={RoutesPath.postJop1} element={<PostJop1/>}/>
                <Route path={RoutesPath.aboutUs} element={<AboutUs/>}/>
                <Route path={RoutesPath.contactUspage} element={<ContactUsPage/>}/>
                <Route path={RoutesPath.profileCompany} element={<ProfileCompany/>}/>
                <Route element={<NotFound/>}/>
                <Route path={RoutesPath.myCv} element={<MyCv/>}/>
                <Route path={RoutesPath.editPassword} element={<EditPassword/>}/>
                <Route path={RoutesPath.chatForFreelancer} element={<ChatForFreelancer/>}/>
                <Route path={RoutesPath.chatForCompany} element={<ChatForCompany/>}/>
                <Route path={RoutesPath.talants} element={<Talants/>}/>
                <Route path={RoutesPath.bestMatches} element={<BestMatchesTalants/>}/>
                <Route path={RoutesPath.NewTalants} element={<NewTalants/>}/>
                <Route path={RoutesPath.Saved} element={<Saved/>}/>
                <Route path={RoutesPath.signUpPage} element={<SignUpPage/>}/>
                <Route path={RoutesPath.jobModalPageView} element={<JobModalPageView/>}/>
            </Routes>
            <ToastContainer/>
        </div>
    );
};

export default enhancer(App);