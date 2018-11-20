var MyContract = artifacts.require("bCAD.sol");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(MyContract);
};
