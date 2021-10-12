const {PORT = 3000, INFURA_API_KEY} = process.env
const infuraBaseUrl = `https://ropsten.infura.io/v3`

module.exports = {
  port: PORT,
  files: ['./**/*.{html,htm,css,js}'],
  web3Url: `${infuraBaseUrl}/${INFURA_API_KEY}`,
  server:{
    baseDir: ["./src", "./build/contracts"],
  }
};