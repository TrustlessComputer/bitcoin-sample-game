const isProduction = process.env.REACT_APP_ENV === 'production';

console.log('LOGGER--- isProduction ', isProduction)

const TC_LAYER2 = {
    RPC: isProduction ? 'https://node.l2.trustless.computer/' : 'https://l2-node.regtest.trustless.computer/',
    CHAIN: isProduction ? 42213 : 42070,
    Name: isProduction ? "NOS" : "NOS (Test)"
};

const CONTRACT_ADDRESS = isProduction ? '0xE56fe77d7a69a9c633c2Bb71D6cE0807cC7452CA' : '0x7Ec889fa161d5FE6102A8D8Caf6e25d7f0eeBD0d';

const SLEEP_TIME = 500;
const COUNTER_TIME = 500;

const MIN_AMOUNT = 0.005 * 1e18;

export {
    TC_LAYER2,
    CONTRACT_ADDRESS,
    SLEEP_TIME,
    COUNTER_TIME,
    MIN_AMOUNT
}