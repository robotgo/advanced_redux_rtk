import { useEffect, useState } from "react"
import { IPost } from "../models/IPost"
import { postAPI } from "../services/PostService"
import PostItem from "./PostItem"

const PostContainer = () => {
  const [limit, setLimit] = useState(100)
  const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit, {
    // pollingInterval: 1000
  })
  const [createPost, {error: createError, isLoading: createIsLoading}] = postAPI.useCreatePostMutation()
  const [deletePost, {error: deleteError, isLoading: deleteIsLoading}] = postAPI.useDeletePostMutation()
  const [updatePost, {error: updateError, isLoading: updateIsLoading}] = postAPI.useUpdatePostMutation()
  
  
  
  // Проверка RTK Query, меняем параметр запроса. Для PostContainer данные меняются, для PostContainer2 нет
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLimit(3)
  //   }, 2000)
  // }, [])

  const handleCreate = async () => {
    const title = prompt() || 'Title'
    await createPost({title, body: title} as IPost)
  }


  return (
    <div>
      <div className="post__list">
        <button onClick={handleCreate}>Add new post</button>
        {isLoading && <h1>Loading....</h1>}
        {error && <h2>Произошла ошибка при загрузке</h2>}

        {posts?.map(post => <PostItem
        update={updatePost}
        remove={deletePost} key={post.id} post={post} />)}

      </div>
    </div>
  )
}

export default PostContainer