interface Window {
  ethereum?: {
    send: unknown,
    enable: () => Promise<string[]>,
    isMetaMask?: true
    on?: (...args: any[]) => void
    removeListener?: (...args: any[]) => void
  }
  web3?: any
  BinanceChain?: BinanceChain
}