import {useEffect} from 'react'
import ChatList from './ChatList'
import ChatForm from './ChatForm'
import {init , subscribeChat, subscribeInitialMessages} from '../socketApi'
import {useChat} from '../context/ChatContext'
import styles from '../App.css'


function Container() {

  const {setMessages} = useChat()

  useEffect(() => {
    init()

    subscribeInitialMessages((messages) => {
     setMessages(messages)
    })

    subscribeChat((message) => {      // 2. ekranda mesajları göstermek için
      setMessages((prevState) => [...prevState, {message}])
    })
  }, [])

  return (
    <div className='App'>
      <h1 className={styles.h1}> Chat App</h1>
      <ChatList/>
      <ChatForm/>
    </div>
  )
}

export default Container
