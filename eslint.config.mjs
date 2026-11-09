import { defineConfig } from 'eslint/config';
import baseTsConfig from '@catia-lint/eslint-config-base-ts/flat';
import shadowConfig from '@catia-lint/eslint-config-shadow/flat';

export default defineConfig([
  {
    name: 'Base TypeScript Config',
    extends: [baseTsConfig],
  },
  {
    name: 'Shadow Config',
    extends: [shadowConfig],
  },
  {
    languageOptions: {
      parserOptions: {
        project: [
          './tsconfig.json',
          './tests/unit/tsconfig.json',
        ],
      },
    },
  },
]);
