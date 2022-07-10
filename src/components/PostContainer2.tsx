import { postAPI } from "../services/PostService"
import PostItem from "./PostItem"

const PostContainer2 = () => {
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(5)
  return (
    <div>
      {/* <div className="post__list">
        {isLoading && <h1>Loading....</h1>}
        {error && <h2>Произошла ошибка при загрузке</h2>}

        {posts?.map(post => <PostItem key={post.id} post={post} />)}

      </div> */}
    </div>
  )
}

export default PostContainer2