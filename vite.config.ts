import { resolve } from 'path';

import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { partytownVite } from '@builder.io/partytown/utils';

export default defineConfig(() => {
  return {
    ssr: { target: 'webworker', noExternal: true },
    plugins: [
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
      partytownVite({
        dest: resolve('dist', '~partytown'),
      }),
    ],
  };
});
