import * as React from 'react';
import { BlogList } from '@/components/snowflakes/BlogList';

import MuiBox from '@mui/material/Box';
import MuiContainer from '@mui/material/Container';
import config from "../../../content/data/config.json";
import type * as types from 'types';
import {
    dehydrate,
    DehydratedState,
    HydrationBoundary,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { fetchPosts } from '@/hooks/usePosts';
import { Footer } from '@/components/sections/Footer';
import Head from 'next/head';
import { Header } from '@/components/sections/Header';

export type Props = {
    dehydratedState: DehydratedState;
    siteConfig: types.Config;
};

const BlogListPage: React.FC<Props> = ({ siteConfig, dehydratedState }) => {
    const [queryClient] = React.useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={dehydratedState}>
                <MuiBox sx={{ px: 3 }}>
                    <MuiContainer maxWidth="lg" disableGutters={true}>
                        <Head>
                            <title>Blog List Page</title>
                            <meta name="viewport" content="width=device-width, initial-scale=1" />
                            {siteConfig.favicon && <link rel="icon" href={siteConfig.favicon} />}
                        </Head>
                        {siteConfig.header && <Header {...siteConfig.header} data-sb-object-id={siteConfig.__id} />}
                        <BlogList />
                        {siteConfig.footer && <Footer {...siteConfig.footer} data-sb-object-id={siteConfig.__id} />}
                    </MuiContainer>
                </MuiBox>
                <ReactQueryDevtools initialIsOpen={false} />
            </HydrationBoundary>
        </QueryClientProvider>
    );
};

export default BlogListPage;

export async function getStaticProps() {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
      queryKey: ['posts', 10],
      queryFn: () => fetchPosts(10),
    });

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        siteConfig: config
      },
    }
};
