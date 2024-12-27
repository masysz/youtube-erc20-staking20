import { defineChain } from "thirdweb";

// Replace <chain_id> with the chain id of your chain
export const chain = defineChain(parseInt(process.env.NEXT_PUBLIC_CHAIN_ID!) || 1480);
