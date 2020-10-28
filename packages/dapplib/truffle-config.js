require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue olympic system index raise sad under grace drop tail giant'; 
let testAccounts = [
"0xcbb12da62a6c9aa3cf09eb3bd256e63b26fa68afe862098d3b5b201855b46a7e",
"0x1ea5f17759d8be79f6f4a2741b500e443e3b005076323bf7c4257a88b2724dcd",
"0x678dbe0a335062ea0e73b2649bd3172fa3a647e1003f7d8cf4559a6549a8ed54",
"0x1aee2ac3b27b675f77349504ec72ffa373d32c50bf13e4c70f7979ba9ed0ca3c",
"0xfa10f80183dd11f4dd51ece8d182c340e01db64f9db44ac62633bacd0286985c",
"0x148cf93fee715669f1d13f2548ab468feb35ee3038f95e970c22a9e1dd351ef9",
"0xea9ec9f48369e73d9a8ec868880f3d7a199856a2193214a227422f062ea4c839",
"0x41138be503e6de3a4e389c75ecc6487baebd804428c273406ffa564b83a91fda",
"0x84a5ae411ab6a79c20e72facaafc867002a007f5b4b7d6faeae9a2cb2232630f",
"0xaa5d2752825b2da8c4eb073d4130b9d9925557c083389a31875359b5f82c8b77"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
