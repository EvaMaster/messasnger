import React, {FC, Fragment, useEffect} from 'react';
import {services} from "../../utils";
import UserInfoBlock from "../UserInfoBlock";
import {useNavigate} from "react-router-dom";
import {dialogsProps, screenProps, stateProps} from "../../interfaces";
import {getTime} from "../../utils/getTime";
import {useDispatch, useSelector} from "react-redux";
import {getDialogs} from "../../store/dialog/middleware";
import {subscribe} from "../../utils/events";

const Screen: FC<screenProps> = ({id, hash}) => {
  const dialog = useSelector((state: stateProps) => state.dialog)
  const dispatch = useDispatch()
  const { data=[] } = dialog

  const user = services.getUser(hash.replace('#', ''))

  useEffect(() => {
    dispatch(getDialogs(id, hash.replace('#', '')))
    subscribe('customStorage', dispatch(getDialogs(id, hash.replace('#', ''))));

  }, [hash, dispatch])
  window.addEventListener( 'customStorage', ()=>{
    console.log('test')
    dispatch(getDialogs(id, hash.replace('#', '')))
  })
  const navigator = useNavigate()

  return (
    <Fragment>
      <div className="header">
        <div className="btn_back" onClick={() => navigator(`/dashboard/${id}`)}/>
        {user && <UserInfoBlock data={user}/>}
      </div>
      {
        data?.length
          ? <div className="screen">
            {
              data.map((message: dialogsProps) => (
                <div key={message.id} className={`${message.author === id ? 'right ' : ''}message`}>
            <span className="message_text">
              {message.text}
            </span>
                  <span className="message_date">
              {getTime(message.date)}
            </span>
                </div>
              ))
            }
          </div>
          : <div className="screen_empty">
            Сообщений нет
          </div>
      }
    </Fragment>
  );
};

export default Screen;
