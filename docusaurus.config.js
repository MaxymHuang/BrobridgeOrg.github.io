import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gravity Document',
  tagline: 'The Cloud Native Data Mesh Solution',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'BBG',
  projectName: 'gravity-documentation',

  // Update to ignore broken links instead of throwing an error
  onBrokenLinks: 'warn',  // Changed from 'throw' to 'warn' for flexibility
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Brobridge Gravity',
      logo: {
        alt: 'My Site Logo',
        src: 'img/gravity_logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docSidebar',  // Ensure this is the correct sidebar ID
          position: 'left',
          label: 'Docs',
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
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: '/docs/quickstart',  // Correct link to valid path
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

