import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import GoogleSearch from '../../components/GoogleSearch';
import styles from './google-search.module.css';

export default function GoogleSearchPage() {
  return (
    <Layout title="Search NEAR Docs">
      <div className={clsx('container', 'margin-vert--lg', styles.pageContainer)}>
        <h1>Search the documentation</h1>
        <p className={styles.disclaimer}>
          (Search is provided by Google, so they might display Ads here. Sorry about that)
        </p>
        <GoogleSearch />
      </div>
    </Layout>
  );
}