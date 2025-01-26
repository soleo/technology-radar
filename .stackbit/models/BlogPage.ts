import { Model } from '@stackbit/types';

export const BlogPage: Model = {
    type: 'page',
    name: 'BlogPage',
    label: 'Blog Page',
    urlPath: '/blogs/{slug}/',
    filePath: 'content/blogs/{slug}.md',
    hideContent: true,
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    fields: [
        { type: 'string', name: 'title', label: 'Title', default: 'This Is a New Page', required: true },
        {
            type: 'list',
            name: 'sections',
            label: 'Sections',
            items: { type: 'model', models: [], groups: ['sectionComponent'] },
            default: [
                {
                    type: 'HeroSection',
                    title: 'This Is A Big Hero Headline',
                    text: 'Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl. Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat itae interdum. Ut nec massa eget lorem blandit condimentum et at risus.\n',
                    image: { type: 'Image', url: 'https://assets.stackbit.com/components/images/default/hero.png', altText: 'Hero section image' }
                },
                {
                    type: 'TextSection',
                    text: 'Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl. Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat itae interdum. Ut nec massa eget lorem blandit condimentum et at risus.\n'
                }
            ]
        }
    ]
};
