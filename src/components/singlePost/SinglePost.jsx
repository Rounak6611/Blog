import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="./Assets/PP.jfif  " alt="" className="singlePostimg" />
                <h1 className="singlePostTitle">Lorem ipsum.
                    <div className="singlePostEdit">
                        <i class="sinflePostIcon fas fa-edit"></i>
                        <i class="singlePostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author : <b>Roni</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Reiciendis omnis assumenda quo! Illum eum incidunt maxime, 
                    officia doloremque quae possimus inventore nobis nostrum quis 
                    labore earum, minus non id soluta.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Reiciendis omnis assumenda quo! Illum eum incidunt maxime, 
                    officia doloremque quae possimus inventore nobis nostrum quis 
                    labore earum, minus non id soluta.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Reiciendis omnis assumenda quo! Illum eum incidunt maxime, 
                    officia doloremque quae possimus inventore nobis nostrum quis 
                    labore earum, minus non id soluta.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Reiciendis omnis assumenda quo! Illum eum incidunt maxime, 
                    officia doloremque quae possimus inventore nobis nostrum quis 
                    labore earum, minus non id soluta.</p>
            </div>

        </div>
    )
}
