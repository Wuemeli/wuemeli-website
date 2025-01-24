import * as Sentry from "@sentry/nuxt";

Sentry.init({
  dsn: "https://e8653daccdb64c338746c88c0d0b04cb@gossip.wuemeli.com/36",
  tracesSampleRate: 1.0,
});