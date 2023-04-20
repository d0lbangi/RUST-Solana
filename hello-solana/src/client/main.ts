import {
    Keypair,
    Connection,
    PublicKey,
    LAMPORTS_PER_SOL,
    TransactionInstruction,
    Transaction,
    sendAndConfirmTransaction,
  } from '@solana/web3.js';
  import fs from 'mz/fs';
  import path from 'path';
  
/*
  Our keypair we used to create the on-chain Rust program
*/
const PROGRAM_KEYPAIR_PATH = path.join(
    path.resolve(__dirname, '../../dist/program'),
    'hello_solana-keypair.json'
  );

  