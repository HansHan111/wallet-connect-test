// import { InjectedConnector } from "@web3-react/injected-connector";

import { InjectedConnector } from "./injectedConnector";

export const injected = new InjectedConnector({
    supportedChainIds: [
        1, 56, 97
    ]
})