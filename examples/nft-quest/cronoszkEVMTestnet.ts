import { defineChain } from "viem";
import { chainConfig } from "viem/zksync";

export const cronoszkEVMTestnet = defineChain({
  ...chainConfig,
  id: 240,
  name: "Cronos zkEVM Testnet",
  network: "cronos-zkevm-testnet",
  nativeCurrency: { name: "zkTCRO", symbol: "zkTCRO", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://testnet.zkevm.cronos.org/"],
      webSocket: ["wss://ws.testnet.zkevm.cronos.org"],
    },
  },
  blockExplorers: {
    default: {
      name: "Block Explorer",
      url: "https://explorer.zkevm.cronos.org/testnet/",
    },
  },
  testnet: true,
});
