import React, {FC, useEffect, useState} from 'react';
import TextArea from "../TextArea";
import {panelProps, stateProps} from "../../interfaces";
import {useDispatch, useSelector} from "react-redux";
import {fetchMessageUser, getDialogs} from "../../store/dialog/middleware";
import {subscribe} from "../../utils/events";

const Panel:FC<panelProps> = ({id = '', hash = ''}) => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const dialogId = useSelector((state: stateProps) => state.dialog.id)
  useEffect(() => setText(''),[hash])

  const onHandleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (text) {
      dispatch(fetchMessageUser(dialogId, {
        id: new Date().getTime().toString(),
        text: text,
        date: new Date().toString(),
        author: id,
      }))
      setText('')
      // setData(services.getDialog(id, hash.replace('#', '')))
    }
    subscribe('customStorage', dispatch(getDialogs(id, hash.replace('#', ''))))
  }
  return (
    <form className="panel" autoComplete="false">
      <TextArea
        name="message"
        placeholder="Введите текст"
        value={text}
        title=""
        onChange={(e: string) => setText(e)}
      />
      <button disabled={!text} onClick={(e) => onHandleSubmit(e)}>Send</button>
    </form>
  )
};

export default Panel;
