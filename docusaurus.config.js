import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Brobridge Gravity',
  tagline: 'The Cloud Native Data Mesh Solution',
  favicon: 'img/favicon.ico',
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',
  organizationName: 'BBG',
  projectName: 'gravity-documentation',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-TW'],
    localeConfigs: {
      en: {
        label: 'English'
      },
      'zh-TW': {
        label: '繁體中文'
      },
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/docs',
        },
        blog: {},
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
      colorMode: {
          defaultMode: 'dark',
          disableSwitch: true,
      },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      style: 'dark',
      title: 'Brobridge Gravity',
      logo: {
        alt: 'My Site Logo',
        src: 'img/gravity_logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          label: 'API',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'faqSidebar',
          label: 'FAQ',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/BrobridgeOrg',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'Docs',
              to: '/docs/quickstart',
            },
            {
              label: 'API',
              to: '/docs/api/general',
            },
            {
              label: 'FAQ',
              to: '/docs/faq/general',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/BrobridgeOrg',
            },
            {
              label: 'Official Website',
              href: 'https://brobridge.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Brobridge, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
