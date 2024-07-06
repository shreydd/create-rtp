# Parcel + React + Tailwind + Jest

This is a minimal template for kickstarting a project with React, Tailwind and Jest for testing.

Note: Babel transpilation in Parcel is disabled because Jest will need it. This config can be seen in the `.parcelrc` file

Things jest is configured for
- no typescript
- uses jsdom for the testing environment
- adds coverage reports
- clears mock calls, instances etc before every test

To start a local development server
```
npm run dev
```

To start a test
```
npm run test
```

To run a build
```
npm run build
```