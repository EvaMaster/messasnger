import React, {FC, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import UserInfoBlock from "../../UserInfoBlock";
import {sidebarRowProps} from "../../../interfaces";

const SidebarRow: FC<sidebarRowProps> = ({data}) => {
  const [visible, setVisible ] = useState(false)
  const { hash = '' } = useLocation();
  let timer: NodeJS.Timeout | string = ''

  const setVisibleTooltip = (value: boolean) => {
    if (value){
      timer = setTimeout(()=> setVisible(true), 5000)
    } else {
      setVisible(false)
      clearTimeout(timer)
      timer = ''
    }
  }
  const navigate = useNavigate()
  return (
    <div
      onClick={()=> {
        navigate(`./#${data.name}`)
        setVisibleTooltip(false)
      }}
      className={`${hash === `#${data.name}` ? 'active ' : ''}row`}
      onMouseEnter={() => setVisibleTooltip(true)}
      onMouseLeave={() => setVisibleTooltip(false)}
    >
      <div className={`${visible ? 'block' : ''} sidebar_tooltip`}>
        <div>
          <span>Имя:</span>
          <span>{data.name}</span>
        </div>
        <div>
          <span>Информация:</span>
          <span>{data.description}</span>
        </div>
      </div>
      <UserInfoBlock data={data}/>
    </div>
  );
};

export default SidebarRow;
