import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { STAKING_CONTRACT_ABI } from "./stakingContractABI";

// Replace <contract_address> with the contract address of your contract
const stakeTokenContractAddress = "<0x00EDdD9621Fb08436d0331c149D1690909a5906d>";
const rewardTokenContractAddress = "<0xd90f7548892F94932Caa534a271a118c3f04e228>";
const stakingContractAddress = "<0xfABa86c326d2031D6ECFa8345F7Cd70F2eB764A3>";

export const STAKE_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakeTokenContractAddress,
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress,
});


export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: STAKING_CONTRACT_ABI
});
