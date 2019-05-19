import React from 'react';
import Header from "../shared/Header";
import Head from 'next/head';

const BaseLayout = (props) => {
    const {className,children,isAuthenticated,isSiteOwner,title,cannonical} = props;
    const headerType = props.headerType || 'default';
  return (
    <React.Fragment>
    <Head>
    <title>{title}</title>
    <meta name='description' content='My name is Babul Deb and I am an experienced freelance fullstack  web developer.'/>
    <meta name='keywords' content='babul portfolio,babul web developer,babul freelancer'/>
    <meta property='og:title' content='Babul Deb - developer,full stack,blogger,tech enthusiast'/>
    <meta property='og:locale' content='en_IN'/>
    <meta property='og:url' content={`${process.env.BASE_URL}`}/>
    <meta property='og:type' content='website'/>
    <meta property='og:description' content='My name is Babul Deb and I am an experienced freelance fullstack  web developer.'/>
    {cannonical && <link rel='cannonical' href={`${process.env.BASE_URL}${cannonical}`} />}
    <link rel='icon' type='image/ico' href='/static/favicon.ico' />
   
    </Head>
      <div className="layout-container">
      <Header className={`port-nav-${headerType}`} isAuthenticated={isAuthenticated} isSiteOwner={isSiteOwner} />
        <main className={`cover ${className}`}>
          <div className="wrapper">{children}</div>
        </main>
      </div>
    </React.Fragment>
  );
}

export default BaseLayout;
