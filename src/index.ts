import { registerPlugin } from '@capacitor/core';

import type { EchoPluginPlugin } from './definitions';

const EchoPlugin = registerPlugin<EchoPluginPlugin>('EchoPlugin', {
  web: () => import('./web').then(m => new m.EchoPluginWeb()),
});
const Echo = registerPlugin<EchoPluginPlugin>('EchoPlugin');

 export default Echo;

export * from './definitions';
export { EchoPlugin };
