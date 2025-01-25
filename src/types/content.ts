export type Document = Config | Page | BlogPage;
export type DocumentTypeNames = 'Config' | 'Page' | 'BlogPage';

export type Section = CardsSection | HeroSection | TextSection | SpacerSection;

export type SpacerSize = 'S' | 'M' | 'L' | 'XL' | 'XXL';
export type BackgroundColor = 'primary' | 'secondary' | 'tertiary';
/** Document types */
export type Config = {
    __id: string;
    __url: null;
    type: 'Config';
    favicon?: string;
    header?: Header;
    footer?: Footer;
};

export type Page = {
    __id: string;
    __url: string;
    type: 'Page';
    title: string;
    sections?: Section[];
    body?: string;
};

export type BlogPage = {
    __id: string;
    __url: string;
    type: 'BlogPage';
    title: string;
    sections?: Section[];
    body?: string;
};

/** Nested types */
export type Button = {
    type: 'Button';
    label: string;
    url: string;
    size?: 'small' | 'medium' | 'large';
    variant?: 'contained' | 'outlined' | 'text';
    color?: 'inherit' | 'primary' | 'secondary';
};

export type Card = {
    type: 'Card';
    title?: string;
    text?: string;
    image?: Image;
    actions?: Button[];
};

export type CardsSection = {
    type: 'CardsSection';
    title?: string;
    subtitle?: string;
    items?: Card[];
};

export type Footer = {
    type: 'Footer';
    copyrightText?: string;
    navLinks?: Link[];
};

export type Header = {
    type: 'Header';
    title?: string;
    navLinks?: Link[];
};

export type HeroSection = {
    type: 'HeroSection';
    title?: string;
    subtitle?: string;
    text?: string;
    actions?: Button[];
    image?: Image;
    video?: Video;
    mediaAsBackground?: boolean;
    textAlign?: 'left' | 'center';
    width?: 'full' | 'inset';
    backgroundColor?: BackgroundColor;
};

export type TextSection = {
    type: 'TextSection';
    items?: Text[];
    layout?: 'horizontal' | 'stacked';
    textAlign?: 'left' | 'center';
    width?: 'full' | 'inset';
    backgroundColor?: BackgroundColor;
};
// Layout types
// stacked layout vs horizontal layout
export type Text = {
    type: 'Text';
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    text?: string;
    disclaimer?: string;
};

export type SpacerSection = {
    type: 'SpacerSection';
    size?: SpacerSize;
    backgroundColor?: BackgroundColor;
};

export type Image = {
    type: 'Image';
    url?: string;
    altText?: string;
};

export type Video = {
    type: 'Video';
    url?: string;
    altText?: string;
};

export type Icon = {
    type: 'Icon';
    icon: string;
    url?: string;
    size?: number;
    color?: string;
};

export type Link = {
    type: 'Link';
    label: string;
    url: string;
    underline?: 'always' | 'hover' | 'none';
    color?: 'inherit' | 'primary' | 'secondary';
};
