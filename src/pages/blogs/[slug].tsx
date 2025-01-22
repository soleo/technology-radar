import * as React from 'react';
import Head from 'next/head';
import type * as types from 'types';
import { DynamicComponent } from '@/components/DynamicComponent';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { siteConfig, urlToContent } from '@/utils/content';

import MuiBox from '@mui/material/Box';
import MuiContainer from '@mui/material/Container';

export type Props = { page: types.Page; siteConfig: types.Config };

const BlogPage: React.FC<Props> = ({ page, siteConfig }) => {
    return (
        <MuiBox sx={{ px: 3 }} data-sb-object-id={page.__id}>
            <MuiContainer maxWidth="lg" disableGutters={true}>
                <Head>
                    <title>{page.title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    {siteConfig.favicon && <link rel="icon" href={siteConfig.favicon} />}
                </Head>
                {siteConfig.header && <Header {...siteConfig.header} data-sb-object-id={siteConfig.__id} />}
                {(page.sections ?? []).length > 0 && (
                    <MuiBox component="article" data-sb-field-path="sections">
                        {(page.sections ?? []).map((section, index) => (
                            <DynamicComponent key={index} {...section} data-sb-field-path={`.${index}`} />
                        ))}
                    </MuiBox>
                )}
                {siteConfig.footer && <Footer {...siteConfig.footer} data-sb-object-id={siteConfig.__id} />}
            </MuiContainer>
        </MuiBox>
    );
};

export default BlogPage;

interface IBlogParams {
    params: {
        slug: string[];
    };
}

export const getServerSideProps = ({ params } : IBlogParams) => {
    const url = '/' + (params.slug || []).join('/');
    const page = urlToContent(url) as types.Page;
    return { props: { page, siteConfig: siteConfig() } };
};
