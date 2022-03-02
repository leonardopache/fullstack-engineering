function Post(props){
    return (
        <div className="col- col-sm-12 col-md-6 col-lg-3 col-xl-2 d-block">
            <div className="row instagram-card">
                <div>
                    <img src={`${props.image}`} className="instagram-card-user-image" alt="..." />
                </div>

                <div className="instagram-card-content">
                    <div className="d-inline-flex">
                        <div className="instagram-card-time">{props.age} ago</div>
                        <div className="instagram-card-like">
                            <button className="btn btn-danger" type="button">
                                <i className="fas fa-heart"> {props.likes} </i>
                            </button>
                        </div>
                    </div>
                    <div className="pt-4">
                        <p className="small fw-bold">{props.author}</p>
                        <p>{props.legend}</p>
                        <i className="far fa-comment p-2"> Comments (48)</i>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Post;