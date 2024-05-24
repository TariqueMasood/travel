import { getWebInstrumentations, initializeFaro } from '@grafana/faro-react';
import { TracingInstrumentation } from '@grafana/faro-web-tracing';

initializeFaro({
  // Mandatory, the URL of the Grafana collector
  url: 'https://akramaltaf786.grafana.net/a/grafana-kowalski-app/apps',

  // Mandatory, the identification label of your application
  app: {
    name: 'Travel',
  },

  instrumentations: [
    // Load the default Web instrumentations
    ...getWebInstrumentations(),

    // Tracing Instrumentation is needed if you want to use the React Profiler
    new TracingInstrumentation(),

    // ...
  ],
});