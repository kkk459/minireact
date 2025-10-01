import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default [
    // JS 推荐规则
    js.configs.recommended,

    // TypeScript 推荐规则
    ...tseslint.configs.recommended,

    // Prettier，关闭和 ESLint 冲突的格式化规则
    prettier,

    // 通用配置
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
        languageOptions: {
            globals: globals.browser,
        },
    },

    // 针对 JS 文件的额外配置
    {
        files: ['**/*.js'],
        languageOptions: {
            sourceType: 'module',
        },
    },
];
