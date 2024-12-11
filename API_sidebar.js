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
    'quickstart', // Correct ID for 'Quick Start'
    'core-concepts', // Correct ID for 'Core Concepts'
    {
      type: 'category',
      label: 'Installation Guide',
      items: [
        'install_guide/requirements',
        'install_guide/env',
        'install_guide/install_k8',
        'install_guide/deployment',
        'install_guide/atomic_guide',
      ],
    },
  ],
  // You can create another sidebar manually if needed
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

