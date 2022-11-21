const CracoLessPlugin = require('craco-less')
module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#f77908',
                            '@link-color': '#f77908',
                            '@success-color': '#20bf55',
                            '@warning-color': '#fec601',
                            '@error-color': '#f72585',
                            '@font-size-base': '15px',
                            '@heading-color': '#121417',
                            '@text-color': '#2D3239',
                            '@text-color-secondary': '#3374FF',
                            '@disabled-color': 'rgba(0, 0, 0, 0.25)',
                            '@border-radius-base': '4px',
                            '@border-color-base': '#613f7555',
                            '@box-shadow-base':
                                '0 3 px 6 px - 4 px rgba(0, 0, 0, 0.12),\
                                                      0 6 px 16 px 0 rgba(0, 0, 0, 0.08), \
                                                      0 9 px 28 px 8 px rgba(0, 0, 0, 0.05)',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
}
