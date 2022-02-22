import React, { useState } from 'react'
import Image from 'next/image'
import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi'
import { AiOutlineDown } from 'react-icons/ai'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import uniswapLogo from '../public/Assets/uniswap.png'
import ethLogo from '../public/Assets/eth.png'
import useTransaction from '../context/Transaction'
import { shortenAddress } from '../utils/shortenAddress'

const style = {
  navItem: `px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl`,
  activeNavItem: `bg-[#20242A]`,
  buttonsContainer: `flex w-1/4 justify-end items-center`,
  button: `flex items-center bg-[#191B1F] rounded-2xl  mx-2 text-[0.9rem] font-semibold cursor-pointer`,
  buttonPadding: `p-2`,
  buttonTextContainer: `h-8 flex items-center`,
  buttonIconContainer: `flex items-center justify-center w-4 h-4`,
  buttonAccent: `bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]`,
}
function Header() {
  const [selectedNav, setSelectedNav] = useState('swap')
  const [userName, setUserName] = useState<string>()
  const { connectWallet, currentAccount } = useTransaction()

  return (
    <div className="flex w-screen items-center justify-between p-4">
      <div className="flex w-1/4 items-center justify-start">
        <Image src={uniswapLogo} alt="uniswap" height={40} width={40} />
      </div>
      <div className="hidden  flex-1  items-center justify-center md:inline-flex">
        <div className="flex rounded-3xl bg-[#191B1F]">
          <div
            onClick={() => setSelectedNav('swap')}
            className={`${style.navItem} ${
              selectedNav === 'swap' && style.activeNavItem
            }`}
          >
            Swap
          </div>
          <div
            onClick={() => setSelectedNav('pool')}
            className={`${style.navItem} ${
              selectedNav === 'pool' && style.activeNavItem
            }`}
          >
            Pool
          </div>
          <div
            onClick={() => setSelectedNav('vote')}
            className={`${style.navItem} ${
              selectedNav === 'vote' && style.activeNavItem
            }`}
          >
            Vote
          </div>
          <a
            href="https://info.uniswap.org/#/"
            target="_blank"
            rel="noreferrer"
          >
            <div className={style.navItem}>
              Charts <FiArrowUpRight />
            </div>
          </a>
        </div>
      </div>
      <div className={style.buttonsContainer}>
        <div className={`${style.button} p-2 shadow-2xl`}>
          <div className={`${style.buttonIconContainer} mx-2`}>
            <Image src={ethLogo} alt="eth logo" height={20} width={20} />
          </div>
          <p className="mr-1">Ethereum</p>
          <div className={style.buttonIconContainer}>
            <AiOutlineDown />
          </div>
        </div>
        {currentAccount ? (
          <div className={`${style.button} p-2 `}>
            <div className="flex h-full w-full transform items-center justify-center rounded-2xl border border-[#163256] bg-[#172A42] px-2 text-center text-sm font-bold text-[#4F90EA] shadow shadow-sky-600 transition-all duration-300 ease-out hover:scale-105 hover:border-[#234169]">
              {shortenAddress(currentAccount)}
            </div>
          </div>
        ) : (
          <div
            onClick={() => connectWallet()}
            className={`mx-2 flex-shrink-0 cursor-pointer px-2`}
          >
            <div className="flex h-full w-full transform items-center justify-center rounded-2xl border border-[#163256] bg-[#172A42] p-2 text-center text-sm font-bold text-[#4F90EA] shadow shadow-sky-600 transition-all duration-300 ease-out hover:scale-105 hover:border-[#234169]">
              Connect Wallet
            </div>
          </div>
        )}
        <div className={`${style.button} ${style.buttonPadding}`}>
          <div className={`${style.buttonIconContainer} mx-2 shadow-2xl `}>
            <HiOutlineDotsVertical />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
