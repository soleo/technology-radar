import { ObjectModel } from '@stackbit/types';

export const Text: ObjectModel =  {
    type: 'object',
    name: 'Text',
    label: 'Text',
    labelField: 'title',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    groups: ['textSectionGroup'],
    fields: [
        { type: 'string', name: 'eyebrow', label: 'Eyebrow', default: 'This Is A Eyebrow' },
        { type: 'string', name: 'title', label: 'Title', default: 'This Is A Headline' },
        { type: 'string', name: 'subtitle', label: 'Subtitle', default: 'The section subtitle' },
        {
            type: 'markdown',
            name: 'text',
            label: 'Text',
            default:
                'Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl. Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat vitae interdum. Ut nec massa eget lorem blandit condimentum et at risus.\n'
        },
        {
            type: 'markdown',
            name: 'disclaimer',
            label: 'Disclaimer',
            default: 'This is a disclaimer'
        }
    ]
};

