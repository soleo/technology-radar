import * as React from 'react';
import type * as types from 'types';

import MuiBox from '@mui/material/Box';

export type Props = types.SpacerSection & types.StackbitFieldPath;

const sizeMap: Map<string, number> = new Map();
sizeMap.set('S', 2);
sizeMap.set('M', 4);
sizeMap.set('L', 8);
sizeMap.set('XL', 16);
sizeMap.set('XXL', 32);

export const SpacerSection: React.FC<Props> = (props) => {
    const { size = 'M', backgroundColor, 'data-sb-field-path': fieldPath } = props;

    const sizeValue = sizeMap.has(size) ? sizeMap.get(size) : 4;
    const backgroundColorValue = `background.${backgroundColor}`;
    return <MuiBox sx={{ py: sizeValue, backgroundColor: backgroundColorValue }} data-sb-field-path={fieldPath} />;
};
