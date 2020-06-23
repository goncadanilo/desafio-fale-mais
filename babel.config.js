module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@controllers': './src/controllers',
        '@repositories': './src/repositories',
        '@schemas': './src/schemas',
        '@services': './src/services'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
