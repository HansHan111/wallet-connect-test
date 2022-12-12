import { useEffect } from 'react'

import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { Box, Button, Link, Text } from '@chakra-ui/react'
import { UserRejectedRequestError } from '@web3-react/injected-connector'
import { formatAddress } from '../utils/helpers'
import { injected } from '../utils/connectors'
import { alertService } from '../services';

const ConnectMetamask = () => {

    const { chainId, account, activate, deactivate, setError, active, library, connector } = useWeb3React<Web3Provider>()


    const onClickConnect = () => {
        alertService.warn(window.ethereum)
        activate(injected, (error) => {
            alertService.warn(error);
            if (error instanceof UserRejectedRequestError) {
                // ignore user rejected error
                console.log("user refused")
            } else {
                setError(error)
            }
        }, false)
    }

    let actions: any = {
        onClick: onClickConnect
    }

    actions = {
        as: Link,
        href: 'https://metamask.app.link/dapp/pancakeswap.finance/',
        target: "_blank",
        rel: "noopener noreferrer",
    };

    const onClickDisconnect = () => {
        deactivate()
    }

    // useEffect(() => {
    //     console.log(chainId, account, active, library, connector)
    // })

    return (
        <div>
            {active && typeof account === 'string' ? (
                <Box>
                    <Button type="button" w='100%' onClick={onClickDisconnect}>
                        Account: {formatAddress(account, 4)}
                    </Button>
                    <Text fontSize="sm" w='100%' my='2' align='center'>ChainID: {chainId} connected</Text>
                </Box>
            ) : (
                <Box>
                    <Button type="button" w='100%' {...actions}>
                        Connect MetaMask
                    </Button>
                    <Text fontSize="sm" w='100%' my='2' align='center'> not connected </Text>
                </Box>

            )}
        </div>
    )
}

export default ConnectMetamask