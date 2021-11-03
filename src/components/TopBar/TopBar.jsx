import "./topbar.css"

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook"></i>
            <i className="topIcon fab fa-instagram"></i>
            <i className="topIcon fab fa-discord"></i>
            </div>
            <div className="topCenter">
            <ul className="topList">
                <li className="listitems">HOME</li>
                <li className="listitems">ABOUT</li>
                <li className="listitems">CONTACT</li>
                <li className="listitems">WRITE</li>
                <li className="listitems">LOGOUT</li>
            </ul>
            </div>
            <div className="topRight">
                <img className="topImage" src="./Assets/PP.jfif" alt="PP" />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
            
        </div>
    )
}
