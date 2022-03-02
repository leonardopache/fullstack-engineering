import Post from './Post';

const legend = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. #lorem";

function PostList(){
    return (
    <div className="container-fluid">
        <div id="div-feed" className="row pt-3">
            <Post author="@leonardo" age="58'" legend={legend} likes="343" image="https://picsum.photos/800/600/?random=0" />
            <Post author="@leonardo" age="58'" legend={legend} likes="343" image="https://picsum.photos/800/600/?random=1" />
            <Post author="@leonardo" age="58'" legend={legend} likes="343" image="https://picsum.photos/800/600/?random=2" />
        </div>
    </div>    
    
    )
}

export default PostList;