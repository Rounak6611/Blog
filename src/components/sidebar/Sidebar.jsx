import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="./Assets/png.jpg" alt="OK" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae qui vitae autem sapiente aut dolore, adipisci maxime veniam, architecto amet, recusandae consequatur in? Asperiores dignissimos dicta dolorum quibusdam quis!</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Cinema</li>
                    <li className="sidebarListItem">Tech</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                    <i className="sidebarIcon fab fa-discord"></i>
                </div>
            </div>
        </div>
    )
}
