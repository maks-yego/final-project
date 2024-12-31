import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const deployVoting: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const electionName = "Voting";

  await deploy("Voting", {
    from: deployer,
    args: [electionName],
    log: true,
    autoMine: true,
  });

  const votingContract = await hre.ethers.getContract<Contract>("Voting", deployer);
  console.log("Voting contract deployed at:", votingContract.address);
};

export default deployVoting;

deployVoting.tags = ["Voting"];
