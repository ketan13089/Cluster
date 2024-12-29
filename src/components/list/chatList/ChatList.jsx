import React, { useEffect, useState } from 'react';
import './chatList.css';
import AddUser from './addUser/AddUser';
import useUserStore from '../../../lib/userStore';
import { doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import useChatStore from '../../../lib/chatStore';

export default function ChatList() {

    const [addMode, setAddMode] = useState(false);
    const [chats, setChats] = useState([]);
    
    const { currentUser } = useUserStore();
    const { chatId, changeChat } = useChatStore();

    useEffect(() => {
        const unSub = onSnapshot(
          doc(db, "userchats", currentUser.id),
          async (res) => {
            const items = res.data().chats;
    
            const promises = items.map(async (item) => {
              const userDocRef = doc(db, "users", item.receiverId);
              const userDocSnap = await getDoc(userDocRef);
    
              const user = userDocSnap.data();
    
              return { ...item, user };
            });
    
            const chatData = await Promise.all(promises);
            console.log(chatData); // Check if lastMessage exists
            setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
          }
        );
    
        return () => {
          unSub();
        };
      }, [currentUser.id]);

      const handleSelect = async (chat) => {
        if (!chat || !chat.chatId || !chat.user) {
          console.error("Error: Invalid chat or user data.");
          return;
        }

        // Clone chats and update the selected chat's 'isSeen' status
        const updatedChats = chats.map((item) => {
            if (item.chatId === chat.chatId) {
                return { ...item, isSeen: true }; // Set 'isSeen' to true for the selected chat
            }
            return item;
        });

        // Update the chats in Firestore
        const userChatsRef = doc(db, "userchats", currentUser.id);
        try {
            await updateDoc(userChatsRef, {
                chats: updatedChats,
            });
            changeChat(chat.chatId, chat.user);
        } catch (err) {
            console.log(err);
        }
      };

  return (
    <div className='chatList'>
        <div className="search">
            <div className="searchBar">
                <img src="./search.png" alt="" />
                <input type="text" placeholder='Search' />
            </div>
            <img src={addMode ? "./minus.png" : "./plus.png"} 
            className='add' 
            alt="" 
            onClick={() => setAddMode((prev) => !prev)} 
            />
        </div>
        {chats.map((chat) => (
            <div 
                className="item" 
                key={chat.chatId || chat.id} 
                onClick={() => handleSelect(chat)}
                style={{
                    backgroundColor: chat?.isSeen ? "transparent" : "#338fff", // Highlight unseen chats
                }}
            >
                <img src={chat.user?.avatar || "./avatar.png"} alt="" />
                <div className="texts">
                    <span>{chat.user?.username}</span>
                    <p>{chat.lastMessage || "No messages yet"}</p>  {/* Fallback if no last message */}
                </div>
            </div>
        ))}
        
        {addMode && <AddUser />}
    </div>
  );
}
