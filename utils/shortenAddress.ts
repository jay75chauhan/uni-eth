export const shortenAddress = (address: any) =>
  `${address.slice(0, 5)}...${address.slice(address.length - 4)}`
