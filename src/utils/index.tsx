import {dialogsProps, userTypes} from "../interfaces";

export const services = {
  registrationUser: (data: userTypes) => {

    if(!data.file){
      data.background = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
      data.online = true
    }
    localStorage.setItem(data.name as string, JSON.stringify(data))
    localStorage.setItem(
      'users',
      JSON.stringify([ ...(localStorage.getItem('users') && JSON.parse(localStorage.getItem('users') || ''))|| [], data.name ])
    )
    return data
  },

  getUserList: (name= '') => {
    const userList = JSON.parse(localStorage.getItem('users') || '') || []
    return userList.filter((item: string) => item !== name).map((user: string) => {
      if(user !== name){
        const tempObj = JSON.parse(localStorage.getItem(user) || '') || {}
        return {
          name: tempObj.name,
          file: tempObj.file,
          description: tempObj.description,
          online: tempObj.online,
          dialogs: tempObj.dialogs,
          background: tempObj.background
        }
      }else
        return null
    })
  },

  getUser: (id:string) => {
    const data = localStorage.getItem(id)
    return data ? JSON.parse(localStorage.getItem(id) || '') : false
  },

  setProfile: (user:userTypes) => {
    const arrUsers = localStorage.getItem('users') || ''
    if(arrUsers.includes(user.name as string)){
      const profile = JSON.parse(localStorage.getItem(user.name as string)||'')
      if(profile.password === user.password){
        const profile = JSON.parse(localStorage.getItem(user.name as string)|| '')
        localStorage.setItem(user.name as string, JSON.stringify({...profile, online: true}))
        sessionStorage.setItem('currentProfile', JSON.stringify({...profile, online: true}))
        return ({...profile, online: true})
      } else {
        throw new Error('Неверный логин или пароль!')
      }
    }else{
      throw new Error('Неверный логин или пароль!')
    }
  },
  getDialog: (user1:string, user2:string) => {
    const dialogs = localStorage
      .getItem('dialogs') && JSON.parse(localStorage.getItem('dialogs') || '') || []
    const dialogId = dialogs.filter((item: string) => item?.includes(user1) && item?.includes(user2))
    if(dialogId?.length){
      return {dialogId: dialogId[0], dialogs: JSON.parse(localStorage.getItem(dialogId[0]) || '')}
    }else{
      return {dialogId: null, dialogs: null}
    }
  },
  setDialog: (id: string, message: dialogsProps) => {
    const storageDialogsList = localStorage.getItem('dialogs') && JSON.parse(localStorage.getItem('dialogs') || '')
    storageDialogsList
      ? storageDialogsList.includes(id)
          ? localStorage.setItem('dialogs',JSON.stringify(storageDialogsList))
          : localStorage.setItem('dialogs', JSON.stringify([ ...(storageDialogsList && storageDialogsList), id]))
      : localStorage.setItem('dialogs',JSON.stringify([id]))
    const dialog = JSON.parse(localStorage.getItem(id)|| '[]')
    localStorage.setItem(id, JSON.stringify([...dialog,message]))
    return {id, data:[...dialog,message]}
  },
  // setUserStatus: ( id:string, status:boolean) => {
    // const profile = JSON.parse(sessionStorage.getItem('currentProfile')||'')
    // const user = JSON.parse(localStorage.getItem(id)||'')
    //
    // if(!profile) {
    //   user.online = false
    //   localStorage.setItem(id, JSON.stringify(user))
    // }
  // },
}
