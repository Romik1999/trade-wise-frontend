import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'node_modules']),

  // Базовые конфиги из Vite + React + TypeScript правила
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.es2020
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      // React правила
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      'react/react-in-jsx-scope': 'off',
      'react/jsx-newline': [
        'warn',
        {
          'prevent': true,
          'allowMultilines': true
        }
      ],
      'react/jsx-max-props-per-line': [
        'warn',
        {
          'maximum': 3
        }
      ],
      'react/jsx-closing-bracket-location': 'warn',
      'react/jsx-one-expression-per-line': [
        'warn',
        {
          'allow': 'non-jsx'
        }
      ],
      'react/prop-types': 'off',
      'react/jsx-wrap-multilines': [
        'error',
        {
          'return': 'parens-new-line',
          'arrow': 'parens-new-line',
          'condition': 'parens-new-line',
          'logical': 'parens-new-line'
        }
      ],

      // TypeScript правила
      '@typescript-eslint/no-empty-interface': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/no-extraneous-class': [
        'error',
        {
          'allowWithDecorator': true,
          'allowConstructorOnly': true,
          'allowEmpty': true
        }
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          'prefer': 'type-imports'
        }
      ],
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/consistent-type-definitions': 'error',
      '@typescript-eslint/default-param-last': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          'selector': 'variable',
          'format': [
            'PascalCase',
            'camelCase',
            'UPPER_CASE'
          ]
        },
        {
          'selector': 'variableLike',
          'format': [
            'PascalCase',
            'camelCase'
          ]
        },
        {
          'selector': 'parameter',
          'format': [
            'camelCase'
          ]
        },
        {
          'selector': 'classMethod',
          'format': [
            'camelCase'
          ]
        },
        {
          'selector': 'classProperty',
          'format': [
            'camelCase'
          ]
        },
        {
          'selector': 'objectLiteralMethod',
          'format': [
            'camelCase'
          ]
        },
        {
          'selector': 'classProperty',
          'modifiers': [
            'private'
          ],
          'format': [
            'camelCase'
          ],
          'leadingUnderscore': 'allow'
        },
        {
          'selector': 'typeLike',
          'format': [
            'PascalCase'
          ]
        },
        {
          'selector': 'typeParameter',
          'format': [
            'UPPER_CASE',
            'PascalCase'
          ]
        },
        {
          'selector': 'interface',
          'format': [
            'PascalCase'
          ],
          'prefix': [
            'I'
          ]
        }
      ],
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          'paths': [
            {
              'name': 'lodash'
            },
            {
              'name': '@tsed/cli-core'
            },
            {
              'name': '@atom/dapi/v100'
            }
          ],
          'patterns': [
            {
              'group': [
                '..//features/*/*',
                '!..//features/*/index.ts'
              ],
              'message': 'import from module Public API instead'
            },
            {
              'group': [
                '..//entities/*/*',
                '!..//entities/*/index.ts'
              ],
              'message': 'import from module Public API instead'
            },
            {
              'group': [
                'packages//*'
              ],
              'message': 'import from module instead'
            }
          ]
        }
      ]
    }
  },

  // Общие правила для всех файлов
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    rules: {
      'quotes': [
        'error',
        'single'
      ],
      'indent': [
        'error',
        2,
        {
          'SwitchCase': 1
        }
      ],
      'semi': [
        'error',
        'never'
      ],
      'curly': [
        'error'
      ],
      'max-len': [
        'warn',
        {
          'code': 140
        }
      ],
      'eol-last': [
        'error'
      ],
      'brace-style': [
        'error'
      ],
      'no-console': [
        'error'
      ],
      'object-curly-spacing': [
        'error',
        'always'
      ],
      'template-curly-spacing': [
        'error',
        'never'
      ],
      'no-restricted-imports': 'off',
      'keyword-spacing': [
        'error',
        {
          'before': true
        }
      ],
      'space-before-function-paren': [
        'error',
        'never'
      ],
      'eqeqeq': [
        'error',
        'smart'
      ],
      'space-infix-ops': [
        'error',
        {
          'int32Hint': false
        }
      ],
      'comma-spacing': [
        'error',
        {
          'before': false,
          'after': true
        }
      ],
      'no-multiple-empty-lines': [
        'error',
        {
          'max': 1
        }
      ],
      'operator-linebreak': [
        'error',
        'before'
      ],
      'comma-dangle': [
        'error',
        'never'
      ],
      'comma-style': [
        'error',
        'last'
      ],
      'dot-location': [
        'error',
        'property'
      ],
      'key-spacing': [
        'error',
        {
          'beforeColon': false,
          'afterColon': true
        }
      ],
      'no-const-assign': 'error',
      'no-dupe-keys': 'error',
      'no-fallthrough': 'error',
      'no-multi-spaces': 'error',
      'no-this-before-super': 'error',
      'no-trailing-spaces': 'error',
      'no-unreachable': 'error',
      'object-property-newline': [
        'error',
        {
          'allowAllPropertiesOnSameLine': true
        }
      ],
      'function-paren-newline': [
        'error',
        'multiline'
      ],
      'newline-per-chained-call': [
        'error',
        {
          'ignoreChainWithDepth': 2
        }
      ],
      'no-nested-ternary': 'error',
      'array-element-newline': [
        'error',
        'consistent'
      ],
      'default-param-last': 'off',
      'no-async-promise-executor': 'warn'
    }
  }
])
