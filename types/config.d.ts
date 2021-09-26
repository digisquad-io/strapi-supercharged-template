export interface StrapiConfigContext {
  env: (<T = string>(key: string, initial?: T) => T) & {
    int: (key: string, initial?: number) => number;
    float: (key: string, initial?: number) => number;
    bool: (key: string, initial?: boolean) => boolean;
    json: (key: string, initial?: any) => any;
    array: (key: string, initial?: any[]) => any[];
    date: (key: string, initial?: Date) => Date;
  };
}

export interface StrapiConfigDatabaseBookshelfConnection
  extends Record<string, any> {
  connector: 'bookshelf';
  settings: {
    client: 'sqlite' | 'postgres' | 'mysql';
    filename?: string;
    host?: string;
    port?: number;
    database?: string;
    username?: string;
    password?: string;
    timezone?: string;
    schema?: string;
    ssl?: boolean | Record<string, any>;
  };
  options: {
    debug?: boolean;
    autoMigration?: boolean;
    useNullAsDefault?: boolean;
    pool?: {
      min?: number;
      max?: number;
      acquireTimeoutMillis?: number;
      createTimeoutMillis?: number;
      idleTimeoutMillis?: number;
      reapIntervalMillis?: number;
      createRetryIntervalMillis?: number;
    };
  };
}
export interface StrapiConfigDatabaseMongooseConnection
  extends Record<string, any> {
  connector: 'mongoose';
  settings: {
    client: 'mongo';
    host?: string;
    port?: number;
    database?: string;
    username?: string;
    password?: string;
    uri?: string;
  };
  options: {
    ssl?: boolean;
    sslCa?: string;
    debug?: boolean;
    authenticationDatabase?: string;
  };
}

export interface StrapiConfigDatabase extends Record<string, any> {
  defaultConnection: string;
  connections: {
    [key: string]:
      | StrapiConfigDatabaseBookshelfConnection
      | StrapiConfigDatabaseMongooseConnection;
  };
}

export interface StrapiConfigServer extends Record<string, any> {
  /**
   * Host name
   *
   * @default 'localhost'
   */
  host: string;
  /**
   * Port on which the server should be running.
   *
   * @default 1337
   */
  port: number;
  /**
   * Listens on a socket.
   *
   * `host` and `port` are cosmetic when this option is provided and likewise use url
   * to generate proper urls when using this option.
   *
   * This option is useful for running a server without exposing a port and using proxy servers on the same machine
   * (e.g Heroku nginx buildpack)
   *
   * @default '/tmp/nginx.socket'
   */
  socket?: string;
  /**
   * Enable errors to be emitted to koa when they happen
   * in order to attach custom logic or use error reporting services.
   *
   * @default false
   */
  emitErrors?: boolean;
  /**
   * Public url of the server.
   *
   * Required for many different features (ex: reset password, third login providers etc.).
   *
   * Also enables proxy support such as Apache or Nginx, example: `https://mywebsite.com/api`.
   *
   * The url can be relative, if so, it is used with `http://${host}:${port}` as the base url.
   * An absolute url is however recommended.
   *
   * @default ''
   */
  url?: string;
  /**
   * Set the koa variable `app.proxy`.
   *
   * When `true`, proxy header fields will be trusted.
   *
   * @default false
   */
  proxy?: boolean;
  /**
   * Cron configuration (powered by `node-schedule`)
   */
  cron?: {
    /**
     * Enable or disable CRON tasks to schedule jobs at specific dates.
     *
     * @default false
     */
    enabled?: boolean;
  };
  /**
   * Admin panel configuration
   */
  admin?: {
    /**
     * Authentication configuration
     */
    auth?: {
      /**
       * Record of all the events subscribers registered for the authentication
       */
      events?: {
        /**
         * Function called when an admin user log in successfully to the administration panel
         *
         * @default undefined
         */
        onConnectionSuccess?: (event: {
          user: any;
          provider: any;
        }) => void;

        /**
         * Function called when an admin user fails to log in to the administration panel
         *
         * @default undefined
         */
        onConnectionError?: (event: {
          error: any;
          provider: any;
        }) => void;
      };
      /**
       * Secret used to encode JWT tokens
       *
       * @default undefined
       */
      secret?: string;
    };
    /**
     * Url of your admin panel.
     *
     * Note: If the url is relative, it will be concatenated with url.
     *
     * @default '/admin'
     */
    url?: string;
    /**
     * Enable or disabled administration opening on start.
     *
     * @default true
     */
    autoOpen?: boolean;
    /**
     * Add custom files that should not be watched during development.
     *
     * @see https://github.com/paulmillr/chokidar#path-filtering
     * @default []
     */
    watchIgnoreFiles?: string[];
    /**
     * Use a different host for the admin panel.
     * Only used along with `strapi develop --watch-admin`
     *
     * @default 'localhost'
     */
    host?: string;
    /**
     * Use a different port for the admin panel.
     * Only used along with `strapi develop --watch-admin`
     *
     * @default 8000
     */
    port?: number;
    /**
     * If false, the admin panel won't be served. Note: the index.html will still be served
     *
     * @default true
     */
    serveAdminPanel?: boolean;
    /**
     * Settings to customize the forgot password email
     */
    forgotPassword?: {
      /**
       * Email template as defined in email plugin
       */
      emailTemplate?: any;
      /**
       * Sender mail address
       */
      from?: string;
      /**
       * Default address or addresses the receiver is asked to reply to
       */
      to?: string;
    };
  };
}

export interface StrapiConfigHooks extends Record<string, any> {
  settings: StrapiConfigHookSettings;
}
export interface StrapiConfigMiddlewares extends Record<string, any> {
  /**
   * Defines the maximum allowed milliseconds to load a middleware
   *
   * @default 100
   */
  timeout?: number;
  /**
   * Configuration middleware loading
   *
   * @see https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#load-order
   */
  load: {
    before: string[];
    order: string[];
    after: string[];
  };
  /**
   * Configuration of each middleware
   */
  settings: StrapiConfigMiddlewareSettings;
}
export interface StrapiConfigAPI extends Record<string, any> {
  /**
   * Global API response configuration
   */
  responses?: {
    /**
     * Set of globally defined attributes to be treated as private.
     * E.g. `_v` when using MongoDb or timestamps like `created_at`, `updated_at` can be treated as private
     */
    privateAttributes?: string[];
  };
  /**
   * REST API configuration
   */
  rest?: {
    /**
     * Specifies default `_limit` parameter used in API calls
     *
     * @default 100
     */
    defaultLimit?: number;
    /**
     * 	Specifies max allowed number that can be requested as `_limit`.
     *
     * @default null
     */
    maxLimit?: number | null;
  };
}
export interface StrapiConfigPlugins
  extends StrapiConfigPluginSettings {}

export interface StrapiConfigBaseHookSettings
  extends Record<string, any> {
  /**
   * Tells Strapi to load the hook or not
   *
   * @default false
   */
}

export interface StrapiConfigBasePluginSettings
  extends Record<string, any> {
  /**
   * Tells Strapi to run the plugin or not
   *
   * @default true
   */
  enabled?: boolean;

  /**
   * Routes are loaded from `[pluginSource]/config/routes.json`
   */
  routes?: Record<string, any>[];
}

export interface StrapiConfigBaseMiddlewareSetting
  extends Record<string, any> {
  /**
   * Tells Strapi to run the middleware or not
   *
   * @default false
   */
  enabled?: boolean;
}
export interface StrapiConfigBaseMiddlewareSettings
  extends Record<
    string,
    StrapiConfigBaseMiddlewareSetting | undefined
  > {
  favicon?: {
    /**
     * Path to the favicon file
     *
     * @default 'favicon.ico'
     */
    path?: string;
    /**
     * Cache-control `max-age` directive in ms.
     *
     * @default 86400000
     */
    maxAge?: number;
  };
  public?: {
    /**
     * Path to the public folder.
     *
     * @default './public'
     */
    path?: string;
    /**
     * Cache-control max-age directive in ms.
     *
     * @default 60000
     */
    maxAge?: number;
    /**
     * Display default index page at `/` and `/index.html`
     *
     * @default true
     */
    defaultIndex?: boolean;
  };
  session?: {
    /**
     * Enable or disable sessions
     *
     * @default false
     */
    enabled?: boolean;
    /**
     * @default false
     */
    secure?: boolean;
  };
  logger?: {
    /**
     * Default log level
     *
     * @default 'debug'
     */
    level?: string;
    /**
     * Expose logger in context so it can be used through `strapi.log.info(‘my log’)`
     *
     * @default true
     */
    exposeInContext?: boolean;
    /**
     * Enable or disable requests logs.
     *
     * @default false
     */
    requests?: boolean;
  };
  parser?: {
    /**
     * Enable or disable parser
     *
     * @default true
     */
    enabled?: boolean;
    /**
     * Enable or disable multipart bodies parsing
     *
     * @default true
     */
    multipart?: boolean;
    /**
     * The byte (if integer) limit of the JSON body.
     *
     * @default '1mb'
     */
    jsonLimit?: string | number;
    /**
     * The byte (if integer) limit of the form body
     *
     * @default '1mb'
     */
    formLimit?: string | number;
    queryStringParser?: {
      /**
       * the maximum length of an array in the query string.
       * Any array members with an index of greater than the limit will
       * instead be converted to an object with the index as the key
       *
       * @default 100
       */
      arrayLimit?: number;
      /**
       * Maximum parsing depth of nested query string objects
       *
       * @default 20
       */
      depth?: number;
    };
  };
  gzip?: {
    /**
     * Enable or not GZIP response compression.
     *
     * @default false
     */
    enabled?: boolean;
    /**
     * Allow passing of options from koa-compress.
     *
     * @see https://github.com/koajs/compress#options
     */
    options?: any;
  };
  responseTime?: {
    /**
     * Enable or not X-Response-Time header to response
     *
     * @default false
     */
    enabled?: boolean;
  };
  poweredBy?: {
    /**
     * Enable or not X-Powered-By header to response
     *
     * @default true
     */
    enabled?: boolean;
    /**
     * The value of the header
     *
     * @default 'Strapi <strapi.io>'
     */
    value?: string;
  };
  csp?: {
    /**
     * Enable or disable CSP to avoid Cross Site Scripting (XSS) and data injection attacks.
     *
     * @default false
     */
    enabled?: boolean;
    /**
     * Configures the Content-Security-Policy header. If not specified uses default value.
     *
     * @default undefined
     */
    policy?: string | string[];
  };
  p3p?: {
    /**
     * Enable or disable p3p
     *
     * @default false
     */
    enabled?: boolean;
    /**
     * @default ''
     */
    value?: string;
  };
  hsts?: {
    /**
     * Enable or disable HSTS
     *
     * @default false
     */
    enabled?: boolean;
    /**
     * Number of seconds HSTS is in effect
     *
     * @default 31536000
     */
    maxAge?: number;
    /**
     * Applies HSTS to all subdomains of the host
     *
     * @default true
     */
    includeSubDomains?: boolean;
  };
  xframe?: {
    /**
     * Enable or disable X-FRAME-OPTIONS headers in response
     *
     * @default false
     */
    enabled?: boolean;
    /**
     * The value for the header, e.g. DENY, SAMEORIGIN or ALLOW-FROM uri
     *
     * @default 'SAMEORIGIN'
     */
    value?: string;
  };
  xss?: {
    /**
     * Enable or disable XSS to prevent Cross Site Scripting (XSS) attacks in older IE browsers (IE8).
     *
     * @default false
     */
    enabled?: boolean;
    mode?: 'block' | 'report' | 'log';
  };
  cors?: {
    /**
     * Enable or disable CORS to prevent your server to be requested from another domain.
     *
     * @default false
     */
    enabled?: boolean;
    /**
     * Allowed URLs
     *
     * @example
     * ```js
     * {
     *   "origin": '*'
     * }
     * ```
     * @example
     * ```js
     * {
     *   "origin": 'http://www.example1.com'
     * }
     * ```
     * @example
     * ```js
     * {
     *   "origin": ['http://www.example2.com', 'http://example2.com']
     * }
     * ```
     * @default '*'
     */
    origin?: string | string[];
    /**
     * Configures the Access-Control-Expose-Headers CORS header.
     *
     * If not specified, no custom headers are exposed.
     *
     * @default ['WWW-Authenticate', 'Server-Authorization']
     */
    expose?: string[];
    /**
     * Configures the Access-Control-Max-Age CORS header
     *
     * @default 31536000
     */
    maxAge?: number;
    /**
     * Configures the Access-Control-Allow-Credentials CORS header
     *
     * @default true
     */
    credentials?: boolean;
    /**
     * Configures the Access-Control-Allow-Methods CORS header
     *
     * @default ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD']
     */
    methods?: string[];
    /**
     * Configures the Access-Control-Allow-Headers CORS header.
     *
     * If not specified, defaults to reflecting the headers specified in the request's Access-Control-Request-Headers header.
     *
     * @default ['Content-Type', 'Authorization', 'X-Frame-Options']
     */
    headers?: string[];
  };
  ip?: {
    /**
     * Enable or disable IP blocker
     *
     * @default false
     */
    enabled?: boolean;
    /**
     * Whitelisted IPs
     *
     * @default []
     */
    whiteList?: string[];
    /**
     * Blacklisted IPs
     *
     * @default []
     */
    blackList?: string[];
  };
}
