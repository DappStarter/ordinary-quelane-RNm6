require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty bottom system blame develop remind concert grace glide fortune skirt'; 
let testAccounts = [
"0xbe7c3fa6c07d10bb4a3a45b4737be11f11a535d63892d23a966a082443f9f733",
"0x660c206be5102cb2da7a40ef822ba45f33b2a9da1f852ff1b7f4897f9affd044",
"0x14ae5eb4178930d190a0eb9b656875e5aff8b2c41277cdc56bb6635028c6c06f",
"0xba18bfe517b8cb736353de8e264840037be430063adf74eed39f602e13dc84c4",
"0x925c8fb8f3b3877914b34c1f4b9b6e1fbb94fef517d0ee8b8752a9c3dcd57a81",
"0x3d27d02ef009000b385b39e4b8d3f13ebdb247209ed7536e1dadcceab682c3e9",
"0x2aa80618951ac3db3677bb0da563f8340033ed17650614900390e16dc5e5b2af",
"0x3291a1198e128d8da71c881a8d95874f18737bcc08fed37f987eb46ab2fb2352",
"0x79b957d7e7faeb50436277ba81ca42a5596c79867b176577693a12e51445b9f8",
"0x7c77c4ec39dce6cdb6b801d60b5d4980a663b4ebd64515325a823766df85e30c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

