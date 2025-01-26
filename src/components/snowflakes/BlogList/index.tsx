import React, { useState } from 'react'
import { usePosts } from '@/hooks/usePosts'
import { Button, Grid, Stack, Typography } from '@mui/material'

export const BlogList = () => {
  const [postCount, setPostCount] = useState(10)
  const { data, isPending, isFetching } = usePosts(postCount)

  if (isPending) return <div>Loading</div>

  return (
    <>
        {data?.map((post, index) => (
            <Grid container spacing={3} component={'section'} key={post.id} paddingBottom={2}>
                <Grid item xs={12}>
                    {post?.title && (
                        <Typography variant="h4" component="h1">{index+1}. {post.title}</Typography>
                    )}
                </Grid>
            </Grid>
        ))}
            <Stack spacing={3} component={'section'}>
                {postCount <= 90 && (
                    <Button
                        onClick={() => setPostCount(postCount + 10)}
                        disabled={isFetching}
                        variant="outlined"
                    >
                    {isFetching ? 'Loading...' : 'Show More'}
                    </Button>
                )}
            </Stack>
    </>
  )
}
