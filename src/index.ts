import * as CryptoJS from 'crypto-js'

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  // Hash 값 계산  
  static calculateBlockHash = (
    index:number,
    data:string, 
    timestamp:number, 
    previousHash:string):string => CryptoJS.SHA256(index + data + timestamp + previousHash).toString();

  // Block 구조 유효성 검사
  static validateStrucure = (aBlock:Block) : boolean => {
    if(typeof aBlock.index === "number" && 
    typeof aBlock.data === "string" && 
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.timestamp === "number")
    return true;
  return false;
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

// create next block
const createNewBlock = (data:string) : Block => {
  const previousBlock:Block = getLatestBlock;
  const newIndex:number = previousBlock.index + 1;
  const previousHash:string = previousBlock.hash;
  const newTimestamp:number = getNewTimestamp;
  const newHash:string = Block.calculateBlockHash(newIndex, data, newTimestamp, previousHash);

  const newBlock:Block = new Block(newIndex, newHash, previousHash, data, newTimestamp);
  return newBlock;
}

// validate new block
const isBlockValid = (candidateBlock:Block, previousBlock:Block) : boolean => {
if(Block.validateStrucure(candidateBlock) ||
  candidateBlock.previousHash !== previousBlock.hash || 
  candidateBlock.index !== previousBlock.index + 1
  ) return false;
  return true;
}

console.log(createNewBlock('1234fff'));

