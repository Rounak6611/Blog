import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React and node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImage" src="./Assets/Sample.jpg" alt="Image" />
        </div>
    )
}
