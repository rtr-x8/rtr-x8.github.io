const siteName = 'RM logs'
const productionUrl = 'https://rtr-x8.github.io'

module.exports = {
    port: 8888,
    lang: 'ja',
    title: siteName,
    description: 'RMによる忘備録。学び、思考、未来について。',
    locales: {
        '/': {
            lang: 'ja'
        }
    },
    head: [
        ['link', {rel: 'icon', href: '/images/favicon.ico'}],
        ['meta', {
            name: 'og:image',
            content: productionUrl + '/images/hero400x400.jpg'
        }],
    ],
    themeConfig: {
        nav: [
            {
                text: 'Twitter',
                link: 'https://twitter.com/rtr_x8',
                rel: "noopener noreferrer",
                target: '_blank'
            },
            {
                text: 'Github',
                link: 'https://github.com/rtr-x8/',
                rel: "noopener noreferrer",
                target: '_blank'
            },
        ],
        lastUpdated: 'Last Updated',
        sidebar: 'auto',
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': 'public/static'
            }
        }
    },
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-49716279-4'
            }
        ], [
            'vuepress-plugin-smooth-scroll'
        ], [
            'autometa',
            {
                site: {
                    name: siteName,
                    twitter: 'rtr_x8',
                },
                canonical_base: productionUrl
            }
        ],
        ['@vuepress/nprogress'],
        ['@vuepress/blog', {
            directories: [
                {
                    id: 'post',
                    dirname: '_posts',
                    path: '/',
                    pagination: {
                        lengthPerPage: 20,
                    },
                }
            ],
            sitemap: {
                hostname: productionUrl
            },
        }]
    ],
};
