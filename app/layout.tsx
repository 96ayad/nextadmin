"use client";
// import { NextPage } from "next";
// import { AppProps } from "next/app";
// import { FC } from "react";
import { ToastContainer } from "react-toastify";
import { SerumProvider } from "../context/SerumContext";
import { SolanaProvider } from "../context/SolanaContext";

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

// Use require instead of import since order matters
require("@solana/wallet-adapter-react-ui/styles.css");
require("../styles/globals.css");
require("react-toastify/dist/ReactToastify.css");

// type NextPageWithLayout = NextPage & {
//   getLayout?: (page: React.ReactNode) => React.ReactNode;
// };

// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout;
// };

export default function RootLayout({children}){
  return(
    <html lang="en">
      <SolanaProvider>
        <SerumProvider>
          <ToastContainer theme="dark" position="bottom-right" autoClose={2000} />
          <body className={inter.className}>{children}</body>
        </SerumProvider>
      </SolanaProvider>
    </html>
  );
};

// import './globals.css';

// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Lama Dev Next.js Admin Dashboard',
//   description: 'Next.js Tutorial',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }