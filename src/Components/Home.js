import { useEffect } from "react";
import { fetchPosts } from "../redux/actions/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import { selectedPost } from '../redux/actions/selectedPostActionCreator';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const stateObj = useSelector(state => state);
    const { loading, posts, error } = stateObj.data

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    },[])


    return (
        <div>
            {/* loading */}
            {
                loading&&(
                    <div>
                        <div class="spinner"></div>
                    </div>
                )
            }
            {/* posts */}
            {
                posts && !error && (
                    <div className="posts">
                        {
                            posts.map((post) => (
                                <div id={post.id} key={post.id} className="post"
                                    onClick={() => {
                                        dispatch(selectedPost(post.id));
                                        navigate(`/item/${post.id}`)
                                    }}
                                >
                                    <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.id} />
                                    <p>User ID: {post.userId}</p>
                                    <p>Title: {post.title}</p>
                                    <p>Body:{post.body}</p>
                                    <p>READ MORE ...</p>
                                </div>
                            ))
                        }
                    </div>
                )
            }
            {/* errors */}
            {
                error&&(
                    <div>
                        <h1 style={{color:'red',textAlign:'center'}}>
                            {error}
                        </h1>
                    </div>
                )
            }
        </div>
    )
}

export default Home