import { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

import CustomLayout from '@/components/CustomLayout';

import '@/styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
 
export const metadata: Metadata = {
  title: 'Cosmoslayer',
  description: 'Hardcore Video Gamer.',

  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>     
        <AppRouterCacheProvider>
          <CustomLayout>
              {children}
          </CustomLayout>
        </AppRouterCacheProvider>        
      </body>
    </html>
  )
}
