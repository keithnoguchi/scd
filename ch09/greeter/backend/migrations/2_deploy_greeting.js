var Contract = artifacts.require("Greeting");

module.exports = function(deployer) {
    deployer.deploy(Contract);
}
