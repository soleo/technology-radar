import { ObjectModel } from '@stackbit/types';

export const HeroSection: ObjectModel =  {
    type: 'object',
    name: 'HeroSection',
    label: 'Hero',
    labelField: 'internalName',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    groups: ['sectionComponent'],
    fieldGroups: [{ name: 'styles', label: 'Styles' }],
    fields: [
        { type: 'string', name: 'internalName', label: 'Internal Name', default: '' },
        { type: 'string', name: 'title', label: 'Title', default: 'This Is A Big Hero Headline' },
        { type: 'string', name: 'subtitle', label: 'Subtitle', default: 'The section subtitle' },
        {
            type: 'markdown',
            name: 'text',
            label: 'Text',
            default:
                'Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl. Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat vitae interdum. Ut nec massa eget lorem blandit condimentum et at risus.\n'
        },
        {
            type: 'list',
            name: 'actions',
            label: 'Actions',
            items: { type: 'model', models: ['Button'] },
            default: [
                { type: 'Button', label: 'Get Started', url: '/', size: 'large', variant: 'contained' },
                { type: 'Button', label: 'Learn more', url: '/', size: 'large', variant: 'outlined' }
            ]
        },
        {
            type: 'model',
            name: 'image',
            label: 'Image',
            models: ['Image', 'Video'],
            default: {
                type: 'Image',
                url: 'https://assets.stackbit.com/components/images/default/hero.png',
                altText: 'Hero section image'
            }
        },
        {
            type: 'model',
            name: 'video',
            label: 'Video',
            models: ['Video'],
            default: {}
        },
        {
            type: 'boolean',
            name: 'mediaAsBackground',
            label: 'Media as Background',
            group: 'styles',
            controlType: 'button-group',
            default: false
        },
        {
            type: 'enum',
            name: 'backgroundColor',
            label: 'Background Color',
            group: 'styles',
            options: [
                { value: 'primary', label: 'Primary Color' },
                { value: 'secondary', label: 'Secondary Color' },
                { value: 'tertiary', label: 'Tertiary Color' },
            ],
        },
        {
            type: 'enum',
            name: 'textAlign',
            label: 'Text Align',
            group: 'styles',
            options: [
                { value: 'left', label: 'Left' },
                { value: 'center', label: 'Center' },
                { value: 'right', label: 'Right' },
            ],
            default: 'center'
        },
        {
            type: 'enum',
            name: 'width',
            label: 'Width',
            group: 'styles',
            options: [
                { value: 'full', label: 'Full Width' },
                { value: 'inset', label: 'Inset' },
            ],
            default: 'full'
        }
    ]
};

