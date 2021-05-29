/* eslint-disable comma-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { expect } = require('chai');

describe('CoinCoin Token', async function () {
  let dev, owner, Coincoin, coincoin;
  const NAME = 'CoinCoin';
  const SYMBOL = 'COIN';
  const INIT_SUPPLY = ethers.utils.parseEther('1000000');
  beforeEach(async function () {
    [dev, owner] = await ethers.getSigners();
    Coincoin = await ethers.getContractFactory('CoinCoin');
    coincoin = await Coincoin.connect(dev).deploy(owner.address, INIT_SUPPLY);
    await coincoin.deployed();
  });

  it(`Should have name ${NAME}`, async function () {
    expect(await coincoin.name()).to.equal(NAME);
  });
  it(`Should have name ${SYMBOL}`, async function () {
    expect(await coincoin.symbol()).to.equal(SYMBOL);
  });
  it(`Should have total supply ${INIT_SUPPLY.toString()}`, async function () {
    expect(await coincoin.totalSupply()).to.equal(INIT_SUPPLY);
  });
  it(`Should mint initial supply ${INIT_SUPPLY.toString()} to owner`, async function () {
    expect(await coincoin.balanceOf(owner.address)).to.equal(INIT_SUPPLY);
  });
});
