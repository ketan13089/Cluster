import React from 'react'
import "./detail.css"

export default function Detail() {
  return (
    <div className='detail'>
        <div className="user">
            <img src="./avatar.png" alt="" />
            <h2>Jane Doe</h2>
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
                    <div className="photoItem">
                        <div className="photoDetail">
                        <img src="https://images.pexels.com/photos/16229189/pexels-photo-16229189/free-photo-of-ave.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <span>Photo2024</span>
                        </div>
                        <img src="./download.png" alt="" className='icon' />

                    </div>
                    <div className="photoItem">
                        <div className="photoDetail">
                        <img src="https://images.pexels.com/photos/16229189/pexels-photo-16229189/free-photo-of-ave.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <span>Photo2024</span>
                        </div>
                        <img src="./download.png" alt="" className='icon' />

                    </div>
                    <div className="photoItem">
                        <div className="photoDetail">
                        <img src="https://images.pexels.com/photos/16229189/pexels-photo-16229189/free-photo-of-ave.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <span>Photo2024</span>
                        </div>
                        <img src="./download.png" alt="" className='icon' />

                    </div>
                    <div className="photoItem">
                        <div className="photoDetail">
                        <img src="https://images.pexels.com/photos/16229189/pexels-photo-16229189/free-photo-of-ave.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <span>Photo2024</span>
                        </div>
                        <img src="./download.png" alt="" className='icon' />

                    </div>
                    
                    
                    
                </div>
            </div> 
            <div className="option">
                <div className="title">
                    <span>Shared Files</span>
                    <img src="./arrowUp.png" alt="" />
                </div>
            </div>
            <button>Block User</button>
            <button className='logout'>LogOut</button>
        </div>
    </div>
  )
}
