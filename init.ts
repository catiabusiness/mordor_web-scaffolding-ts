import Nazgul from 'shadow/nazgul';
import { config } from 'shadow/config';

import apiRouter from './api';
import appRouter from './app/server';

export default Nazgul({
  config: config.nazgul!,
  apiRouter,
  appRouter,
});
