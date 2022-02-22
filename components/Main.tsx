import React from 'react'
import Image from 'next/image'
import { RiSettings3Fill } from 'react-icons/ri'
import { AiOutlineDown } from 'react-icons/ai'
import ethLogo from '../public/Assets/eth.png'
import useTransaction from '../context/Transaction'
import Modal from 'react-modal'

import { useRouter } from 'next/router'
import TransactionLoader from './TransactionLoader'

Modal.setAppElement('#__next')
const style = {
  transferPropContainer: `bg-[#20242A] my-3  rounded-2xl p-6 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between items-center`,
  transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none  w-full text-2xl`,
}
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#0a0b0d',
    padding: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(10, 11, 13, 0.75)',
  },
}

function Main() {
  const { sendTransaction, handleChange, formData } = useTransaction()
  const router = useRouter()
  const handleSubmit = async (e: any) => {
    const { addressTo, amount } = formData
    e.preventDefault()
    if (!addressTo || !amount) return
    sendTransaction()
    console.log(formData)
  }
  return (
    <div className="mt-14 flex w-screen items-center justify-center">
      <div className="w-[40rem] rounded-2xl bg-[#191B1F] p-4">
        <div className="flex items-center justify-between px-2 text-xl font-semibold">
          <div>Swap</div>
          <div>
            <RiSettings3Fill />
          </div>
        </div>
        <div className={style.transferPropContainer}>
          <input
            type="number"
            className={style.transferPropInput}
            placeholder="0.0"
            pattern="^[0-9]*[.,]?[0-9]*$"
            onChange={(e) => handleChange(e, 'amount')}
          />
          <div className="flex w-1/4">
            <div className="mt-[-0.2rem] flex h-min w-full cursor-pointer items-center justify-between rounded-2xl bg-[#2D2F36] p-2 text-xl font-medium hover:bg-[#41444F]">
              <div className="flex items-center">
                <Image src={ethLogo} alt="eth logo" height={40} width={40} />
              </div>
              <div className="mx-2 text-sm md:text-base">ETH</div>
              <AiOutlineDown className=" text-lg" />
            </div>
          </div>
        </div>
        <div className={style.transferPropContainer}>
          <input
            type="text"
            className={style.transferPropInput}
            placeholder="0x..."
            onChange={(e) => handleChange(e, 'addressTo')}
          />
          <div className="flex w-1/4"></div>
        </div>
        <div
          onClick={(e) => handleSubmit(e)}
          className="my-2 flex cursor-pointer items-center justify-center rounded-2xl border border-[#2172E5] bg-[#2172E5] py-6 px-8 text-xl font-semibold hover:border-[#234169]"
        >
          Confirm
        </div>
      </div>

      <Modal isOpen={!!router.query.loading} style={customStyles}>
        <TransactionLoader />
      </Modal>
    </div>
  )
}

export default Main
