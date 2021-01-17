module.exports = {
    i18n: {
      // These are all the locales you want to support in
      // your application
      locales: ['en-US', 'pt-BR'],
      // This is the default locale you want to be used when visiting
      // a non-locale prefixed path e.g. `/hello`
      defaultLocale: 'pt-BR',
      domains: [
        {
          domain: 'example.com',
          defaultLocale: 'en-US',
        },
        {
          domain: 'example.pt',
          defaultLocale: 'pt-BR',
        },
      ],
    },
  }
