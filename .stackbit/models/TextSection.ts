import { Model } from '@stackbit/types';

export const TextSection: Model =  {
    type: 'object',
    name: 'TextSection',
    label: 'Text Group',
    labelField: 'name',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    groups: ['sectionComponent'],
    fieldGroups: [{ name: 'styles', label: 'Styles' }],
    fields: [
        {
            type: 'string',
            name: 'name',
            label: 'Internal Name',
            default: 'TextSection'
        },
        {
            type: 'list',
            name: 'items',
            label: 'Items',
            items: { type: 'model', models: ['Text'] },
            default: [
                {
                    type: 'Text',
                    title: 'Item Title',
                    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.\n',
                }
            ]
        },
        {
            type: 'enum',
            controlType: 'button-group',
            group: 'styles',
            name: 'layout',
            label: 'Layout',
            options: [
                { value: 'horizontal', label: 'Horizontal' },
                { value: 'stacked', label: 'Stacked' },
            ],
            default: 'stacked'
        },
        {
            type: 'enum',
            controlType: 'button-group',
            group: 'styles',
            name: 'textAlign',
            label: 'Text Align',
            options: [
                { value: 'left', label: 'Left' },
                { value: 'center', label: 'Center' },
                { value: 'right', label: 'Right' },
            ]
        },
        {
            type: 'enum',
            controlType: 'button-group',
            group: 'styles',
            name: 'width',
            label: 'Width',
            options: [
                { value: 'full', label: 'Full' },
                { value: 'inset', label: 'Inset' },
            ]
        },
        {
            type: 'enum',
            controlType: 'button-group',
            group: 'styles',
            name: 'backgroundColor',
            label: 'Background Color',
            options: [
                { value: 'primary', label: 'Primary Color' },
                { value: 'secondary', label: 'Secondary Color' },
                { value: 'tertiary', label: 'Tertiary Color' },
            ]
        },
    ]
};

