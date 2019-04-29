module.exports = {
    siteName: 'Antd Admin',

    /* Layout configuration */
    layouts: [
        {
            name: 'primary',
            include: [/.*/],
            exclude: [/(\/(en|zh))*\/login/]
        }
    ]
}