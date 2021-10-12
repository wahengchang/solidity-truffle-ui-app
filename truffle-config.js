const truffleHdwalletProvider= require('truffle-hdwallet-provider')
require('dotenv').config()

const {MNEMONIC, INFURA_API_KEY}= process.env
const baseUrl = `https://ropsten.infura.io/v3`

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    // development: {
    //   host: "127.0.0.1",
    //   port: 7545,
    //   network_id: "*" // Match any network id
    // },
    ropsten: {
      provider: new truffleHdwalletProvider(MNEMONIC,`${baseUrl}/${INFURA_API_KEY}`),
      network_id: 3,
      skipDryRun: true,
      gas: 3000000,
      gasPrice: 10000000000
    }
  }
};
