/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
    docSidebar: [
    'en/why-gravity',
    'en/core-concepts',
    'en/quickstart',
    {
      type: 'category',
      label: 'Installation Guide',
      items: [
        'en/install_guide/requirements',
        'en/install_guide/env',
        'en/install_guide/install_k8',
        'en/install_guide/deployment',
        'en/install_guide/atomic_guide',
      ],
    },
    ],
    apiSidebar: [
        {
            type: 'category',
            label: 'API documentation',
            items: [
                {
                    type: 'doc',
                    id: 'en/api/general',
                    label: 'API guidelines'
                },
                {
                    type: 'doc',
                    id: 'en/api/gravity-sdk',
                    label: 'Gravity SDK'
                },
                {
                    type: 'doc',
                    id: 'en/api/graviton',
                    label: 'Graviton'
                }
            ]

        }
    ],
    faqSidebar: [
        {
            type: 'category',
            label: 'Frequently Asked Questions',
            items: [
                {
                    type: 'doc',
                    id: 'en/faq/general',
                    label: 'General Questions'
                },
                {
                    type: 'doc',
                    id: 'en/faq/technical',
                    label: 'Technical Questions'
                },
                {
                    type: 'doc',
                    id: 'en/faq/troubleshooting',
                    label: 'Troubleshooting'
                },
                {
                    type: 'doc',
                    id: 'en/faq/gravity-portal',
                    label: 'Gravity Portal'
                }
            ]
        }
    ]
  // You can create another sidebar manually if needed
    //
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
  */
};

export default sidebars;

