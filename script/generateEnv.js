const str = `
    NODE_ENV_INFURA_API_KEY="${process.env.INFURA_API_KEY}"
`
require('fs').writeFileSync(`${__dirname}/../src/js/env.js`, str, 'utf8')