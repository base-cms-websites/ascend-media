const newrelic = require('newrelic');
const { startServer } = require('@parameter1/base-cms-marko-web');
const { set, getAsObject } = require('@parameter1/base-cms-object-path');
const paginated = require('@ascend-media/package-minexpo/middleware/paginated');
const algolia = require('@ascend-media/package-minexpo/middleware/algolia');
const { version } = require('./package.json');
const routes = require('./server/routes');
const siteConfig = require('./config/site');
const coreConfig = require('./config/core');
const document = require('./server/components/document');
const components = require('./server/components');
const fragments = require('./server/fragments');
const redirectHandler = require('./redirect-handler');

const { env } = process;
const { log } = console;

module.exports = startServer({
  rootDir: __dirname,
  coreConfig,
  siteConfig,
  routes,
  document,
  components,
  fragments,
  version,
  onStart: (app) => {
    app.set('trust proxy', 'loopback, linklocal, uniquelocal');

    // Setup GAM.
    const gamConfig = getAsObject(siteConfig, 'gam');
    if (gamConfig) set(app.locals, 'GAM', gamConfig);

    // Use Algolia client/index middleware
    // Will be available on `req.$algolia` and `res.locals.$algolia`
    app.use(algolia({
      appId: env.ALGOLIA_APP_ID,
      apiKey: env.ALGOLIA_API_KEY,
      defaultIndex: env.ALGOLIA_DEFAULT_INDEX,
    }));

    app.use(paginated());
  },
  onAsyncBlockError: e => newrelic.noticeError(e),
  redirectHandler,
}).then(() => log('Website started!')).catch(e => setImmediate(() => { throw e; }));
