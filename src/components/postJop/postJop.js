import React, { useState } from 'react';
import RoutesPath from "../../routes/routes";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import JobsView from '../jobs-view/jobs-view';
import LoggingJobs from '../logging-jobs/logging-jobs';
import LoggedJobs from '../logged-jobs/logged-jobs';

function PostJop(props) {
  const [ isLogged, setLogged ] = useState(true);

    if(isLogged === false) {
        return(
            <LoggingJobs />
        )
    } else {
        return(
            <LoggedJobs />
        )
    }
}

export default PostJop;