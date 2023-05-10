## How to Create a ConnectWallet Button in Venom Blockchain 
![v002](https://github.com/BernardOnuh/connectwallet-tsx/assets/114490070/6f2c65bc-8a2b-45b5-800f-748fd4eafb11)

In this guide, we will show you how to create a ConnectWallet button in React using TypeScript, and Venom Connect Wallet SDK.

## Prerequisites
Before getting started, you should have the following installed on your machine:

- Node.js
- npm or yarn

You should also have a basic understanding of React and TypeScript.

## Getting Started


https://github.com/BernardOnuh/connectwallet-tsx/assets/114490070/bce93a0e-854e-4837-8562-6568039c155c


- First, create a next.js app:

```bash
npx create-next-app@latest
```
- Secondly, install this on the next.js app:

```bash
npm install --save venom-connect everscale-inpage-provider everscale-standalone-client
```
- Now Create a component folder like this:
[Component Folder](https://github.com/BernardOnuh/connectwallet-tsx/tree/main/src/app/components)

- Now edit page.tsx in app folder like this:
[page,tsx](https://github.com/BernardOnuh/connectwallet-tsx/blob/main/src/app/page.tsx)

- You can now run the App:

```bash
npm run dev
# or
yarn dev
# or
pnpm
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
