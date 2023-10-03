export var ChainId;
(function(ChainId) {
    ChainId[ChainId["Mainnet"] = 1] = "Mainnet";
    ChainId[ChainId["Ropsten"] = 3] = "Ropsten";
    ChainId[ChainId["Rinkeby"] = 4] = "Rinkeby";
    ChainId[ChainId["Goerli"] = 5] = "Goerli";
    ChainId[ChainId["Kovan"] = 42] = "Kovan";
    ChainId[ChainId["BSC"] = 56] = "BSC";
    ChainId[ChainId["xDai"] = 100] = "xDai";
    ChainId[ChainId["Polygon"] = 137] = "Polygon";
    ChainId[ChainId["Moonriver"] = 1285] = "Moonriver";
    ChainId[ChainId["Mumbai"] = 80001] = "Mumbai";
    ChainId[ChainId["Harmony"] = 1666600000] = "Harmony";
    ChainId[ChainId["Localhost"] = 1337] = "Localhost";
    ChainId[ChainId["Hardhat"] = 31337] = "Hardhat";
    ChainId[ChainId["HTZ"] = 26600] = "HTZ";
})(ChainId || (ChainId = {}));
export const CHAIN_NAMES = {
    [ChainId.Mainnet]: 'Mainnet',
    [ChainId.Ropsten]: 'Ropsten',
    [ChainId.Kovan]: 'Kovan',
    [ChainId.Rinkeby]: 'Rinkeby',
    [ChainId.Goerli]: 'Goerli',
    [ChainId.BSC]: 'BSC',
    [ChainId.xDai]: 'xDai',
    [ChainId.Polygon]: 'Polygon',
    [ChainId.Moonriver]: 'Moonriver',
    [ChainId.Mumbai]: 'Mumbai',
    [ChainId.Harmony]: 'Harmony',
    [ChainId.Localhost]: 'Localhost',
    [ChainId.Hardhat]: 'Hardhat',
    [ChainId.HTZ]: 'HTZ',


};
export const MULTICALL_ADDRESSES = {
    [ChainId.Mainnet]: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
    [ChainId.Ropsten]: '0x53c43764255c17bd724f74c4ef150724ac50a3ed',
    [ChainId.Rinkeby]: '0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821',
    [ChainId.Goerli]: '0x77dca2c955b15e9de4dbbcf1246b4b85b651e50e',
    [ChainId.Kovan]: '0x2cc8688c5f75e365aaeeb4ea8d6a480405a48d2a',
    [ChainId.BSC]: '0x41263cba59eb80dc200f3e2544eda4ed6a90e76c',
    [ChainId.xDai]: '0xb5b692a88bdfc81ca69dcb1d924f59f0413a602a',
    [ChainId.Polygon]: '0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507',
    [ChainId.Moonriver]: '0xa9177F8d98DAaB74C24715Ba0A81b73654710523',
    [ChainId.Mumbai]: '0x08411ADd0b5AA8ee47563b146743C13b3556c9Cc',
    [ChainId.Harmony]: '0xFE4980f62D708c2A84D3929859Ea226340759320',
    [ChainId.HTZ]: '0x7E957A40095a085CBB0191Bd1f8E7C36E9e99060',
};
export const TEST_CHAINS = [
    ChainId.Ropsten,
    ChainId.Kovan,
    ChainId.Rinkeby,
    ChainId.Goerli,
    ChainId.Mumbai,
    ChainId.Localhost,
    ChainId.Hardhat,
    ChainId.HTZ,
];
export const LOCAL_CHAINS = [ChainId.Localhost, ChainId.Hardhat];
//# sourceMappingURL=chainId.js.map