import { useEffect, useState } from "react"
import { postAPI } from "../services/PostService"
import PostItem from "./PostItem"

const PostContainer = () => {
  const [limit, setLimit] = useState(10)
  const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit, {
    // pollingInterval: 1000
  })
  // Проверка RTK Query, меняем параметр запроса. Для PostContainer данные меняются, для PostContainer2 нет
  useEffect(() => {
    setTimeout(() => {
      setLimit(3)
    }, 2000)
  }, [])
  return (
    <div>
      <div className="post__list">
        <button onClick={() => refetch()}>REFETCH</button>
        {isLoading && <h1>Loading....</h1>}
        {error && <h2>Произошла ошибка при загрузке</h2>}

        {posts?.map(post => <PostItem key={post.id} post={post} />)}

      </div>
    </div>
  )
}

export default PostContainer