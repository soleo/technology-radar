import { Model } from '@stackbit/types';

export const SpacerSection: Model =  {
    type: 'object',
    name: 'SpacerSection',
    label: 'Spacer',
    labelField: 'internalName',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    groups: ['sectionComponent'],
    fieldGroups: [{ name: 'styles', label: 'Styles' }],
    fields: [
        { type: 'string', name: 'internalName', label: 'Internal Name', default: '' },
        {
            type: 'enum',
            name: 'Size',
            label: 'Size',
            options: [
                { value: 'S', label: 'Small' },
                { value: 'M', label: 'Medium' },
                { value: 'L', label: 'Large' },
                { value: 'XL', label: 'Extra Large' },
                { value: 'XXL', label: 'Extra Extra Large' }
            ],
        },
        {   type: 'enum',
            controlType: 'button-group',
            group: 'styles',
            name: 'backgroundColor',
            label: 'Background Color',
            options: [
                { value: 'primary', label: 'Primary Color' },
                { value: 'secondary', label: 'Secondary Color' },
                { value: 'tertiary', label: 'Tertiary Color' },
            ]
        }
    ]
};

