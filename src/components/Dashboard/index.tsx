import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {services} from "../../utils";
import Sidebar from "../Sidebar";
import Screen from "../Screen";
import Panel from "../Panel";
import {bc} from "../../App";

const Dashboard = () => {
  const {id = ''} = useParams();
  const {hash = ''} = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!services.getUser(id)) {
      navigate('/login', {replace: true})
    }
  }, [id, navigate])


  // window.addEventListener(
  //   'beforeunload',
  //   (e:any) => {
  //     console.log(e)
  //     e.preventDefault()
  //     services.setUserStatus(id, false)
  //   }
  // );

  const timer = () => setTimeout(()=>{
    bc.postMessage({name: id, status:'online'})
    timer()
  }, 20000)

  // timer()

  bc.addEventListener("message", ({ data }) => {
    console.log(data.name, ':',data.status)
  });

  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 768px)').matches)

  window.matchMedia('(max-width: 720px)').addEventListener('change', (event) => {
    setIsMobile(event.matches)
  })

  return (
    <div className="dashboard">
      {!(hash && isMobile) && <Sidebar name={id}/>}
      {
        hash &&
          <div className="dashboard_view">
            <Screen id={id} hash={hash}/>
            <Panel id={id} hash={hash}/>
          </div>
      }
    </div>
  )
};
export default Dashboard;
