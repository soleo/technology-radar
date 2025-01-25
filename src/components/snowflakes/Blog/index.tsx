import React from 'react'
import { useFetchBlogById } from '@/hooks/usePosts'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Markdown from 'markdown-to-jsx';

export interface IBlogProps {
    blogId: string;
}

export const Blog = ({ blogId }: IBlogProps) => {
  const { data, isPending, isFetching } = useFetchBlogById(blogId)

  if (isPending || isFetching) return <div>Loading</div>

  return (
    <Grid container spacing={3} component={'article'}>
        <Grid item xs={12}>
            <Typography variant="h4" component="h1" gutterBottom>{data.title ?? ''} </Typography>
        </Grid>
        <Grid item xs={12}>
            <Markdown options={{ forceBlock: true }}>{data.body ?? ''}</Markdown>
        </Grid>
    </Grid>
  )
}
