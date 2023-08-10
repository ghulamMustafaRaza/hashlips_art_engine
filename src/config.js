const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.sol;

// General metadata for Ethereum
const namePrefix = "Your Collection";
const description = "Remember to replace this description";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "BAIL",
  seller_fee_basis_points: 500, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.solpatrol.io",
  creators: [
    {
      address: "9nHAK3WBfBEKUCTBQvzuKhg5f1ZpSmARZyuBfmSL7Spx",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 11000,
    maxAllowedDuplicate: 2,
    layersOrder: [
      { name: "Background" },
      { name: "Type" },
      { name: "Eyes" },
      { name: "Clothing" },
      { name: "Eyewear-3", displayName: "Eyewear" },
      { name: "Mouth" },
      { name: "Hat-3", displayName: "Hat" },
    ],
  },
  {
    maxAllowedDuplicate: 3,
    growEditionSizeTo: 15000 + 11000,
    layersOrder: [
      { name: "Background" },
      { name: "Type" },
      { name: "Mouth-2", displayName: "Mouth" },
      { name: "Eyes" },
      { name: "Clothing-2", displayName: "Clothing" },
      { name: "Hat-2" },
      { name: "Eyewear-2", displayName: "Eyewear" },
    ],
  },
  {
    maxAllowedDuplicate: 100,
    growEditionSizeTo: 500000,
    layersOrder: [
      { name: "Background" },
      { name: "Type" },
      { name: "Eyes" },
      { name: "Clothing" },
      { name: "Eyewear" },
      { name: "Mouth" },
      { name: "Hat" },
    ],
  },


];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1024,
  height: 1024,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 1000000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
