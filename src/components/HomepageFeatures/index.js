import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Event Driven Architecture',
    Svg: require('@site/static/img/event.svg').default,
    description: (
      <>
        Unleash the power of events — scalable, flexible, and real-time solutions.
      </>
    ),
  },
  {
    title: 'Data Computing Flow',
    Svg: require('@site/static/img/event1.svg').default,
    description: (
      <>
        Seamless data integration, visual logic design, and scalable computing with minimal coding.
      </>
    ),
  },
  {
    title: 'Data Product',
    Svg: require('@site/static/img/event2.svg').default,
    description: (
      <>
        Data as a product, DB as a service. Alleviating workload from traditional monolithic data architecture.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
