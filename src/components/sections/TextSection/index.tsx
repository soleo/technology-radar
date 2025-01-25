import * as React from 'react';
import type * as types from 'types';
import { Markdown } from '../../atoms/Markdown';

import MuiBox from '@mui/material/Box';
import MuiGrid from '@mui/material/Grid';
import MuiTypography from '@mui/material/Typography';

export type AdditionalProps = { itemSize?: number; layout?: string };

export type Props = types.TextSection & types.StackbitFieldPath;

const TextSectionItem: React.FC<types.Text & types.StackbitFieldPath & AdditionalProps> = (props) => {
    const { eyebrow, title, subtitle, text, disclaimer, layout, itemSize, 'data-sb-field-path': fieldPath } = props;
    return (
        <MuiGrid item xs={12} sm={layout !== 'stacked' ? itemSize : 12} data-sb-field-path={fieldPath}>
            {eyebrow && (
                <MuiTypography component="p" variant="overline" color="text.secondary" data-sb-field-path=".eyebrow">
                    {eyebrow}
                </MuiTypography>
            )}
            {title && (
                <MuiTypography component="h1" variant="h2" color="text.primary" data-sb-field-path=".title">
                    {title}
                </MuiTypography>
            )}
            {subtitle && (
                <MuiTypography component="p" variant="h5" color="text.primary" sx={{ ...(!!title && { mt: 1 }) }} data-sb-field-path=".subtitle">
                    {subtitle}
                </MuiTypography>
            )}
            {text && (
                <MuiTypography component="div" color="text.secondary" maxWidth="lg">
                    <Markdown text={text} data-sb-field-path=".text" />
                </MuiTypography>
            )}
            {disclaimer && (
                <MuiTypography variant="caption" component="div" color="text.secondary" maxWidth="lg">
                    <Markdown text={disclaimer} data-sb-field-path=".disclaimer" />
                </MuiTypography>
            )}
        </MuiGrid>
    );
};
const getTextContainerStyles = (alignment: string) => {
    return {
        textAlign: alignment,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: alignment === 'center' ? 'center' : 'flex-start',
        py: { xs: 6, sm: 3 }
    };
};
export const TextSection: React.FC<Props> = (props) => {
    const { items = [], textAlign = 'left', layout = 'stacked', 'data-sb-field-path': fieldPath } = props;
    const itemsLength = items.length;
    const itemSize = 12 / Math.min(itemsLength, 12);
    return (
        <MuiBox sx={getTextContainerStyles(textAlign)} data-sb-field-path={fieldPath}>
            <MuiGrid container spacing={4} flexDirection={layout !== 'stacked' ? 'row' : 'column'} data-sb-field-path=".items">
                {items.map((item, index) => (
                    <TextSectionItem key={index} {...item} data-sb-field-path={`.${index}`} itemSize={itemSize} layout={layout} />
                ))}
            </MuiGrid>
        </MuiBox>
    );
};
