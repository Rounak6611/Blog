import './post.css'

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="./Assets/PP.jfif" alt="img" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>



                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet.
                </span>
                <hr />
                <span className="postDate">1hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo illum ratione enim vitae qui atque odio autem voluptate nam velit? Laborum esse quod corrupti maiores aperiam libero delectus maxime alias?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo illum ratione enim vitae qui atque odio autem voluptate nam velit? Laborum esse quod corrupti maiores aperiam libero delectus maxime alias?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo illum ratione enim vitae qui atque odio autem voluptate nam velit? Laborum esse quod corrupti maiores aperiam libero delectus maxime alias?
            </p>

        </div>
    )
}
