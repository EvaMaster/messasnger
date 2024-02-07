import React, {FC} from 'react';
import {userInfoBlockProps} from "../../interfaces";

const UserInfoBlock: FC<userInfoBlockProps> = ({data}) => (
  <React.Fragment>
    <div className="user_block">
      {
        data.file
          ? <img src={data.file} alt={data.name + 'avatar'} width="80" height="80"/>
          : <div
            style={{backgroundColor: data.background}}
            className="default_img"
          >
            {data.name.substring(0, 2).toUpperCase()}
          </div>
      }
      <div className={`${data.online ? 'online' : 'offline' } user_block_status`}/>
    </div>
    <div className="content">
        <span className="name">
          {data.name}
        </span>
      {
        data.last_message &&
          <span className="last_message">
              тут будет последнее сообщение непонятной длинны
            </span>
      }
    </div>
  </React.Fragment>
);

export default UserInfoBlock;
