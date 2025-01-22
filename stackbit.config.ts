import { GitContentSource } from '@stackbit/cms-git';
import { defineStackbitConfig } from '@stackbit/types';
import { allModels } from './.stackbit/models';

const gitContentSource = new GitContentSource({
    rootPath: __dirname,
    contentDirs: ['content'],
    models: Object.values(allModels),
    assetsConfig: {
        referenceType: 'static',
        staticDir: 'public',
        uploadDir: 'images',
        publicPath: '/'
    }
});

export const sbConfig = defineStackbitConfig({
    stackbitVersion: '~0.7.0',
    ssgName: 'nextjs',
    nodeVersion: '22',
    contentSources: [gitContentSource],
    presetSource: {
        type: 'files',
        presetDirs: ['.stackbit/presets']
    },
    assetSources: [
        {
            name: 'unsplash-asset-source',
            type: 'iframe',
            url: 'https://unsplash-asset-source.netlify.app',
            // transform the value received from iframe if needed
            transform: ({ assetData }) => {
                return assetData.unsplashImageUrl;
            },
            // return an object with 'title' and 'image' extracted from the
            // assetData (after any transformations)
            preview: ({ assetData }: { assetData: string }) => {
                return { title: '', image: assetData };
            }
        }
    ],
    modelExtensions: [
        {
          name: "hero",
          type: "object",
          fields: [{ name: "media", type: "image", source: "asset-source-name" }]
        }
    ],
    styleObjectModelName: 'ThemeStyle'
});

export default sbConfig;

