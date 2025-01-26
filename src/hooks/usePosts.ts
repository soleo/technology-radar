import { useQuery } from '@tanstack/react-query'

export type Post = {
  id: number
  title: string
  body: string
}

const fetchPosts = async (limit = 10): Promise<Array<Post>> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  return data.filter((x: Post) => x.id <= limit)
}

const usePosts = (limit: number) => {
  return useQuery({
    queryKey: ['posts', limit],
    queryFn: () => fetchPosts(limit),
  })
}

const fetchBlogById = async (id: string): Promise<Post> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return response.json()
}

const useFetchBlogById = (id: string) => {
    return useQuery({
        queryKey: ['blog', id],
        queryFn: () => fetchBlogById(id),
    })
}

export { usePosts, fetchPosts, fetchBlogById, useFetchBlogById }