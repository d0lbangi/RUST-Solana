Solana CLI
Install & Setup:
Install the Solana Tool Suite by following these instructions.

Once the CLI is installed, we must create an account. We do this by generating a new public/private key pair.

solana-keygen new
Once we do that, we have to configure our Solana CLI client to use our new account.

solana config set --keypair /root/.config/solana/id.json
And now we just need to bind our client to a Solana network.

solana config set --url <network_url>
(dev net -- development)        https://api.devnet.solana.com
(test net -- staging)           https://api.testnet.solana.com
(main net -- production)        https://api.mainnet-beta.solana.com
Exploring:
You can see all commands supported by the Solana CLI by just entering:

solana
Here's a few examples:

To deploy applications on Solana, you need to pay rent. This costs a small amount of lamports(SOL). On the dev network, you can request an airdrop of "test money" to deploy to the dev net:

solana airdrop 1
Check the balance of your account:

solana balance
The Dockerfile:
Provided is a Dockerfile used to create the following image: jpcaulfi/solana-alpine.

You can leverage this image to create a Docker container to conduct Solana business out of - such as deploying and even hosting/running an application.

This image contains:

node    rust    solana
You can run these commands in the container or write a Dockerfile:

solana-keygen new --no-bip39-passphrase
solana config set --keypair /root/.config/solana/id.json
solana config set --url http://api.devnet.solana.com
solana airdrop 2