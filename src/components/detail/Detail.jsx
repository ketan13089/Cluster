import React from "react";
import "./detail.css";
import { auth, db } from "../../lib/firebase";
import useChatStore from "../../lib/chatStore";
import useUserStore from "../../lib/userStore";
import { doc, updateDoc, arrayRemove, arrayUnion } from "firebase/firestore"; // Import arrayRemove and arrayUnion

export default function Detail() {
  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock } =
    useChatStore();
  const { currentUser } = useUserStore(); // Ensure you're calling useUserStore() here

  const handleBlock = async () => {
    if (!user) return;

    const userDocRef = doc(db, "user", currentUser.id); // Correct collection reference

    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });

      changeBlock(); 

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>{user?.username}</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Setting</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowUp.png" alt="" />
          </div>
          <div className="photos">
            {/* Repeat this for each photo item */}
            {[1, 2, 3, 4].map((index) => (
              <div className="photoItem" key={index}>
                <div className="photoDetail">
                  <img
                    src="https://images.pexels.com/photos/16229189/pexels-photo-16229189/free-photo-of-ave.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                  <span>Photo{2024 + index}</span>
                </div>
                <img src="./download.png" alt="" className="icon" />
              </div>
            ))}
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button onClick={handleBlock}>
          {isCurrentUserBlocked
            ? "You're Blocked"
            : isReceiverBlocked
            ? "User Blocked"
            : "Block User"}
        </button>
        <button className="logout" onClick={() => auth.signOut()}>
          LogOut
        </button>
      </div>
    </div>
  );
}
