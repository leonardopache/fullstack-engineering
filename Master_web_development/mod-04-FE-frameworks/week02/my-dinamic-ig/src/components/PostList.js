import Post from './Post';

function PostList({ posts, filterText, onChange}){

    const postsList = posts.filter(p => p.message.includes(filterText)).map((post, index)=>{
        return <Post 
                    key={index}
                    index={index}
                    author={post.author} 
                    age={post.createAt} 
                    legend={post.message} 
                    likes={post.like}  
                    image={post.image}
                    comments={post.comments}
                    hashtags={post.hashtags}
                    onChange={onChange}
                />
    }) 
    return (
    <div className="container-fluid">
        <div id="div-feed" className="row pt-3">
            {postsList}
        </div>
    </div>    
    )
}

export default PostList;