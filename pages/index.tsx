import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
import TransactionHistory from '../components/TransactionHistory'
import { Transaction } from '../context/Transaction'
export default function Home() {
  return (
    <div className="flex h-screen max-h-screen min-h-screen w-screen select-none flex-col justify-between bg-[#2D242F] text-white ">
      <Header />
      <Main />
      <TransactionHistory />
    </div>
  )
}
