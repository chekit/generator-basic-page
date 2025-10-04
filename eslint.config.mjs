import { defineConfig } from 'eslint/config';

export default defineConfig({
  rules: {
    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        ignoreRestArgs: true,
      },
    ],
  },
  ignores: ['dist/**/*'],
});
