import { Model } from '@stackbit/types';

export const ThemeStyle: Model =  {
    type: 'data',
    name: 'ThemeStyle',
    label: 'Theme Style',
    singleInstance: true,
    filePath: 'content/data/style.json',
    canDelete: false,
    fields: [
        {
            type: 'enum',
            name: 'mode',
            label: 'Mode',
            controlType: 'button-group',
            options: [
                { label: 'Light', value: 'light' },
                { label: 'Dark', value: 'dark' }
            ],
            default: 'light'
        },
        { type: 'color', name: 'primaryColor', label: 'Primary color' },
        {
            type: 'color',
            name: 'secondaryColor',
            label: 'Secondary color'
        },
        {
            type: 'color',
            name: 'textPrimaryColor',
            label: 'Text primary color'
        },
        {
            type: 'color',
            name: 'textSecondaryColor',
            label: 'Text secondary color'
        },
        {
            type: 'color',
            name: 'backgroundColor',
            label: 'Background color'
        }
    ]
};

