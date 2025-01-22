import { Model } from '@stackbit/types';

export const Video: Model = {
    type: 'object',
    name: 'Video',
    label: 'Video',
    labelField: 'altText',
    fields:
        [{
            type: 'url',
            name: 'url',
            label: 'Video',
            description: 'The URL of the Video',
            default: 'https://videos.ctfassets.net/m8zwsu9tyucg/Hct2NIxAbROBNcHIPohBn/00a0fa5bcd2ed37ca1cec947111d3e7a/AD_dHERO_Quote_V3_Desktop-1440x840-211d0b7.webm'
        },
        {
            type: 'string',
            name: 'altText',
            label: 'Alt text',
            description: 'The alt text of the video',
            default: 'Video alt text'
        }]
};
