import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Gravity Documentation</h1>
        <p className={styles.heroSubtitle}>
      The Cloud Native Data Mesh Solution
        </p>
        <a href="/docs/why-gravity" className={styles.ctaButton}>
          Get Started
        </a>
      </div>
    </header>
  );
}

function Features() {
  return (
    <div className="container">
      <div className={styles.featureSection}>
        <div className={styles.featureCard}>
          <h3>Event Driven Architecture</h3>
          <p>Unleash the power of events - Scalable, Flexible, and Real-time solutions</p>
        </div>
        <div className={styles.featureCard}>
          <h3>Atomic</h3>
          <p>Seamless data integration, visual logic design, and scalable computing with minimal coding</p>
        </div>
        <div className={styles.featureCard}>
          <h3>Data Product</h3>
          <p>Data as a product, DB as a service. Alleviating workload from traditional monolithic data architecture.</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      <HomepageHeader />
      <main className={styles.homePageMain}>
        <Features />
      </main>
    </Layout>
  );
}
