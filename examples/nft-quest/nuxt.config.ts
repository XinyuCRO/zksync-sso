import { defineNuxtConfig } from "nuxt/config";
import { zksyncInMemoryNode } from "viem/chains";

import { cronoszkEVMTestnet } from "./cronoszkEVMTestnet";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "radix-vue/nuxt",
    "@nuxtjs/color-mode",
    "@nuxtjs/seo",
    "@vueuse/motion/nuxt",
    "nuxt-gtag",
  ],
  $production: {
    runtimeConfig: {
      public: {
        chain: cronoszkEVMTestnet,
        contracts: {
          nft: "0x1DB051f0853c01EF57AE4Ef812282379778370C3",
          paymaster: "0x2f0983dCa6a2458b0f0085Bb374Fe3308673f609",
        },
        baseUrl: "https://zksync-sso.vercel.app",
        authServerUrl: "https://chain-sso-testnet-zkevm-cronos-org.3ona.co/confirm",
        explorerUrl: "https://explorer.zkevm.cronos.org/testnet",
      },
    },
  },
  devtools: { enabled: false },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico", sizes: "32x32" },
        { rel: "icon", type: "image/png", href: "/icon-96x96.png", sizes: "96x96" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      ],
      bodyAttrs: {
        class: "dark-mode",
      },
    },
  },
  css: ["@/assets/style.scss"],
  site: {
    url: "https://nft-quest.zksync.io",
    name: "ZK NFT Quest",
    description: "Mint your own ZKsync NFT gas-free",
    defaultLocale: "en",
  },
  colorMode: {
    preference: "dark",
  },
  runtimeConfig: {
    public: {
      chain: zksyncInMemoryNode,
      contracts: {
        nft: "0x111C3E89Ce80e62EE88318C2804920D4c96f92bb",
        paymaster: "0x4B5DF730c2e6b28E17013A1485E5d9BC41Efe021",
      },
      baseUrl: "http://localhost:3006",
      authServerUrl: "http://localhost:3002/confirm",
      explorerUrl: "http://localhost:3010",
    },
  },
  compatibilityDate: "2024-04-03",
  // required for dealing with bigInt
  nitro: {
    esbuild: {
      options: {
        target: "esnext",
      },
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern", // Fix warning: "The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0"
        },
      },
    },
  },
  // ssr: false,
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        semi: true,
        quotes: "double",
        arrowParens: true,
        quoteProps: "as-needed",
        braceStyle: "1tbs",
      },
    },
  },
  googleFonts: {
    families: {
      Inter: [200, 300, 400, 500, 600, 700],
    },
  },
});
