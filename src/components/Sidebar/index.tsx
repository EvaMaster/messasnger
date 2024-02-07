import React, {FC, useEffect, useState} from 'react';
import {services} from "../../utils";
import SidebarRow from "./SidebarRow";
import {subscribe} from "../../utils/events";
import {sidebarProps} from "../../interfaces";

const Sidebar: FC<sidebarProps> = ({name}) => {
  const [userList, setUserList] = useState([])

  useEffect(()=>{
    const storageHandler = () => setUserList(services.getUserList(name))
    storageHandler()
    subscribe('customStorage', storageHandler);
  },[name])

  return (
    <div className="sidebar">
      {
        userList.length
          ? userList.map((item: any, index:number) => <SidebarRow key={index} data={item}/>)
          : <div className="sidebar_default-text">Пользователей нет</div>
      }
    </div>
  )
};

export default Sidebar;
