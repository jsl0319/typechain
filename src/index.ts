import * as CryptoJS from 'crypto-js'

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  static calculateBlockHash = (index:number, data:string, timestamp:number, previousHash:string):string => {
    return CryptoJS.SHA256(index + data + timestamp + previousHash).toString;
  }

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number) {
      this.index = index;
      this.hash = hash;
      this.previousHash = previousHash;
      this.data = data;
      this.timestamp = timestamp;
    }
}

const genesisBlock:Block = new Block(0, 'hash', 'preHash', 'data', 123456);
let blockChain:Block[] = [genesisBlock];

const getBlockchain:Block[] = blockChain;
const getLatestBlock: Block = getBlockchain[getBlockchain.length - 1];
const getNewTimestamp: number = Math.round(new Date().getTime() / 1000);

// create next block fn
const createNewBlock = (data:string) : Block => {
  const previousBlock:Block = getLatestBlock;
  const newIndex:number = previousBlock.index + 1;
  const previousHash = previousBlock.hash;
  const newTimestamp = getNewTimestamp;
  const newHash:string = Block.calculateBlockHash(newIndex, data, newTimestamp, previousHash);

  const newBlock:Block = new Block(newIndex, newHash, previousHash, data, newTimestamp);
  return newBlock;
}

console.log(createNewBlock('1234fff'));
console.log(createNewBlock('ijdks'));

