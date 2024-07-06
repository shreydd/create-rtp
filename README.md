# create-rtp
A basic react app template to kickstart a project. Uses React.js and TailwindCSS as a standard across all options provided.

Explaining the options:
1. vanilla-react-app has react, react-dom, react-router-dom and tailwindcss installed and Parcel as the module bundler.
2. vanilla-react-jest has the above template with react testing library and jest installed for unit testing purposes.
3. vite-react-app is basically created with `npm create vite@latest --template react` and tailwind, just to eliminate the extra step of finding the docs and installing everything. Also has react-router-dom and typescript (comes default with the vite template) installed.
4. vite-react-zustand with the above template + zustand for state management.

To create a project with it just run this command in your terminal
```
npx create-rtp
```

You will have install the `node_modules` and `initialise the git` yourself.

##### Why is it called `create-rtp`?
Initially it was made with the template `react-tailwind-parcel` in mind but later on realised that parcel can not only stand for the module bundler but also as a "package" of sorts with just the barebones. 