import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TanStackProvider } from "@/utils/import.utils";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });
// Create a client
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              className: '',
              duration: 2000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                theme: {
                  primary: 'green',
                  secondary: 'black',
                },
              },
            }}
          />
        <TanStackProvider>{children}</TanStackProvider>
      </body>
    </html>
  );
}
