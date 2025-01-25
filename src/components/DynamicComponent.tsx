import dynamic from 'next/dynamic';
import type { ComponentType, FC } from 'react';
import type { Props as CardsSectionProps } from './sections/CardsSection';
import type { Props as HeroSectionProps } from './sections/HeroSection';
import type { Props as TextSectionProps } from './sections/TextSection';
import type { Props as SpacerSectionProps } from './sections/SpacerSection';

export type Props = CardsSectionProps | HeroSectionProps | TextSectionProps | SpacerSectionProps;

export type SnowflakeProps = HeroSectionProps;

type ComponentsMap = {
    [P in Props as P['type']]: ComponentType<P>;
};

type SnowflakesMap = Pick<ComponentsMap, 'HeroSection'>;

const componentsMap: ComponentsMap = {
    // sections
    CardsSection: dynamic(() => namedComponent(import('./sections/CardsSection'), 'CardsSection')),
    HeroSection: dynamic(() => namedComponent(import('./sections/HeroSection'), 'HeroSection')),
    TextSection: dynamic(() => namedComponent(import('./sections/TextSection'), 'TextSection')),
    SpacerSection: dynamic(() => namedComponent(import('./sections/SpacerSection'), 'SpacerSection'))
};

const snowflakesMap: SnowflakesMap = {
    // custom sections for the same component
    HeroSection: dynamic(() => namedComponent(import('./snowflakes/HeroSection'), 'HeroSection'))
};

export const DynamicComponent: FC<Props> = (props) => {
    if (!props.type) {
        throw new Error(`Object does not have the 'type' property required to select a component: ${JSON.stringify(props, null, 2)}`);
    }
    // Switch to snowflakesMap if we have Components in Snowflakes
    const Component = componentsMap[props.type] as ComponentType<Props>;
    if (!Component) {
        throw new Error(
            `No component match object with type: '${props.type}'\nMake sure DynamicComponent.tsx file has an entry for '${props.type}' in 'componentsMap'`
        );
    }
    return <Component {...props} />;
};

const namedComponent = async <T, N extends keyof T>(modPromise: Promise<T>, exportName: N) => {
    const mod = await modPromise;
    return mod[exportName];
};
