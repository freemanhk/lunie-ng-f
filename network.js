export default {
  //id: 'cosmos-hub-mainnet',
  id: 'cosmoshub-4',
  name: 'Cosmos Mainnet',
  description:
    'Cosmos is a network of independent parallel blockchains, powered by BFT consensus algorithms like Tendermint.',
  logo: `logo.svg`,
  website: 'https://cosmos.network',
  // apiURL: 'http://localhost:8010/proxy',
  //apiURL: 'https://api.cosmos.network',
  apiURL: 'http://45.32.54.204:1317',
  //rpcURL: 'https://rpc.cosmos.network',
  rpcURL: 'http://45.32.54.204:9090',
  minBlockHeight: 5200892, // actually 5200791, but it has the wrong block time.
  stakingDenom: 'ATOM',
  coinLookup: [
    {
      viewDenom: 'ATOM',
      chainDenom: 'uatom',
      chainToViewConversionFactor: 1e-6,
      icon: `currencies/atom.png`,
    },
  ],
  addressPrefix: 'cosmos',
  validatorAddressPrefix: 'cosmosvaloper',
  validatorConsensusaddressPrefix: 'cosmosvalcons', // needed to map validators from staking queries to the validator set
  HDPath: `m/44'/118'/0'/0/0`,
  lockUpPeriod: `3 days`,
  fees: {
    default: {
      gasEstimate: 350000,
      feeOptions: [
        {
          denom: 'ATOM',
          amount: 0.001,
        },
      ],
    },
  },
  icon: `https://lunie.fra1.digitaloceanspaces.com/network-icons/cosmos.png`,
  localSigning: true, // this is only to be used as a developer tool - never deployed in production or for mainnet chains
}
