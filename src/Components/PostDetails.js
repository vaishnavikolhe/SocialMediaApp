import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const PostDetails = () =>{

    const navigate = useNavigate();
    
    const {x} = useParams();

    const data = useSelector(state=>state.data.posts)

    let filteredPost = data.filter((post)=>{
        return post.id == x
    })

    useEffect(()=>{
        if(filteredPost[0]==undefined){
            navigate('/')
        }
    })
    return(
        <div className="postDetailsPage">
           {
            x&&filteredPost[0]&&(
                <div>
                     <h2 style={{color:"white" , textAlign:'center'}}>Details Page For Post With ID {x}</h2>
                     <div className="sPostDetails">
                        <img src={`https://picsum.photos/200?random=${filteredPost[0].id}`} alt="" />
                        <h2>User Id : {filteredPost[0].userId}</h2>
                        <h2> Title : {filteredPost[0].title}</h2>
                        <p>Body : {filteredPost[0].body}</p>
                     </div>
                </div>
            )
           }
        </div>
    )
}

export default PostDetails;