import { resolve } from 'path';

export default {
    ignoreMomentLocale: true,
    targets: {
        ie: 9
    },
    treeShaking: true,
    plugins: [
        [
            'umi-plugin-react',
            {
                dva: { immer: true },
                antd: true,
                dynamicImport: {
                    webpackChunkName: true
                }, 
                title: 'antd-admin',
                pwa: {
                    manifestOptions: {
                        srcPath: 'manifest.json'
                    },
                }
            }
        ]
    ],
    //Theme for antd
    theme: './config/theme.config.js',
    //Webpack Configuration
    proxy: {

    },
    //alias path
    alias: {
        components: resolve(__dirname, './src/components')
    },
    extraBabelPlugins: [
        [
            'import',
            {
                libraryName: 'lodash',
                libraryDirectory: '',
                camel2DashComponentName: false
            },
            'lodash'
        ]
    ]

}