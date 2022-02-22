require('@nomiclabs/hardhat-waffle')

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Lix9QnwVoAi3AsVRM_8N_El_IAjjeg0i',
      accounts: [
        '5b0cb7324ea3237adba96d3ed9923a3ee9babb6418420e200ed4d6581f0b765b',
      ],
    },
  },
}
