import * as React from 'react';
import Head from 'next/head';
import type * as types from 'types';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import config from "../../../content/data/config.json";
import MuiBox from '@mui/material/Box';
import MuiContainer from '@mui/material/Container';
import {
    dehydrate,
    DehydratedState,
    HydrationBoundary,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { fetchBlogById } from '@/hooks/usePosts';
import { Blog } from '@/components/snowflakes/Blog';

export type Props = {
    siteConfig: types.Config;
    dehydratedState: DehydratedState;
    blogId: string;
};

const BlogPage: React.FC<Props> = ({ dehydratedState, blogId, siteConfig}) => {
    const [queryClient] = React.useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={dehydratedState}>
                <MuiBox sx={{ px: 3 }}>
                    <MuiContainer maxWidth="lg" disableGutters={true}>
                        <Head>
                            <title>Blog Detail Page Page</title>
                            <meta name="viewport" content="width=device-width, initial-scale=1" />
                            {siteConfig.favicon && <link rel="icon" href={siteConfig.favicon} />}
                        </Head>
                        {siteConfig.header && <Header {...siteConfig.header} data-sb-object-id={siteConfig.__id} />}
                        {blogId && <Blog blogId={blogId} />}
                        {siteConfig.footer && <Footer {...siteConfig.footer} data-sb-object-id={siteConfig.__id} />}
                    </MuiContainer>
                </MuiBox>
                <ReactQueryDevtools initialIsOpen={false} />
            </HydrationBoundary>
        </QueryClientProvider>
    );
};

export default BlogPage;

export async function getServerSideProps({ params } : { params: { slug: string } }) {
    if (!params) {
        return {
            notFound: true,
        }
    }

    const slug = params.slug

    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
      queryKey: ['blog', slug],
      queryFn: () => fetchBlogById(slug),
    });

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        blogId: slug,
        siteConfig: config
      },
    }
};
