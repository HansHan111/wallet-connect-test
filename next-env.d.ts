/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

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