import React from 'react';
import * as Sentry from '@sentry/react';
import * as SentryBrowser from '@sentry/browser';
import { Integrations } from '@sentry/tracing'; // Must import behind @sentry/browser
/**
 * 初始化sentry
 * @dsn 数据源
 * @release 版本号
 * @enviroment:'环境变量'
 **/
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  release: process.env.VERSION,
  environment: process.env.UMI_ENV,
  integrations: [
    new Integrations.BrowserTracing({
      beforeNavigate: (context) => {
        return {
          ...context,
          // You could use your UI's routing library to find the matching
          // route template here. We don't have one right now, so do some basic
          // parameter replacements.
          name: location.pathname
            .replace(/\d+/g, '<digits>')
            .replace(/[a-f0-9]{32}/g, '<hash>'),
        };
      },
    }),
  ],
  tracesSampleRate: 1,
});

/***
 * 初始化 sentry/browser
 */
SentryBrowser.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    new Integrations.BrowserTracing({
      tracingOrigins: ['localhost', 'base_url', /^\//], //process.env.APP_URL
      beforeNavigate: (context) => {
        return {
          ...context,
          // You could use your UI's routing library to find the matching
          // route template here. We don't have one right now, so do some basic
          // parameter replacements.
          name: location.pathname
            .replace(/\d+/g, '<digits>')
            .replace(/[a-f0-9]{32}/g, '<hash>'),
        };
      },
      shouldCreateSpanForRequest: (url) => {
        //Do not create spans for outgoing requests to a `/health/` endpoint
        return !url.match(/\/health\/?$/);
      },
    }),
  ],
});

const Base = (props: any) => {
  const children = props.children;

  return (
    <Sentry.ErrorBoundary fallback={() => console.log('An error has occurred')}>
      {children}
    </Sentry.ErrorBoundary>
  );
};

export default Base;
