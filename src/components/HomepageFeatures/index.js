import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Site avec le dark theme ',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
    Un thème Dark est disponible pour éviter que tu te piques les yeux ^^ 
      </>
    ),
  },
  {
    title: 'Sensi Tuto',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
    Découvrez l'ensemble des tutoriels pour avoir une modération correcte sur Sensity 
      </>
    ),
  },
  {
    title: 'En constante évolution ',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Découvre au fil du temps un ensemble d'outils qui seront disponibles.
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
