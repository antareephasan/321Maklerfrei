import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './assets/css/tailwind.output.css'
import myTheme from './assets/config/myTheme.js'

import { SidebarProvider } from './context/SidebarContext'
import { SnackbarProvider } from './context/SnackbarContext'
import { AuthProvider } from './context/AuthContext'
import { StripeProvider } from './context/StripeContext'
import { FlowFactProvider } from './context/FlowFactContext'
import ThemedSuspense from './components/ThemedSuspense'
import { Windmill } from '@windmill/react-ui'
import * as serviceWorker from './serviceWorker'

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { Toaster } from 'react-hot-toast';
import App from './App'
import FirebaseProvider from './Firebase/FirebaseProvider.js'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'de'],
    fallbackLng: "en",
    detection: {
      order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: { useSuspense: false }
  });

ReactDOM.render(
  <Windmill theme={myTheme}>
    <SidebarProvider>
      <SnackbarProvider>
        <StripeProvider>
          <AuthProvider>
            <FirebaseProvider>
              <FlowFactProvider>
                <Suspense fallback={<ThemedSuspense />}>
                  <Windmill>
                    <App />
                    <Toaster />
                  </Windmill>
                </Suspense>
              </FlowFactProvider>
            </FirebaseProvider>
          </AuthProvider>
        </StripeProvider>
      </SnackbarProvider>
    </SidebarProvider>
  </Windmill>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()