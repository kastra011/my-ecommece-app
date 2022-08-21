import Head from 'next/head';
import React from 'react';
import { Fragment } from 'react';
import Link from 'next/link';
import ScrollToTop from './ScrollToTop';
import { FiShoppingCart, FiLogIn } from 'react-icons/fi';

export default function Layout(props) {
  return (
    <Fragment>
      <Head>
        <title>
          {props.title ? props.title + ' - Ecommerce' : 'Ecommerce'}
        </title>
        <meta name="description" content="Ecommerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header className="bg-white z-50">
          <nav className="flex h-12 items-center px-4 justify-between shadow-md fixed w-full bg-white">
            <Link href="/">
              <a className="text-2xl font-bold">eCommerce</a>
            </Link>
            <div className="flex">
              <Link href="/cart">
                <a className="p-2 flex hover:underline">
                  <FiShoppingCart className="mt-1" />
                  <span className="pl-2">Cart</span>
                </a>
              </Link>
              <Link href="/login">
                <a className="p-2 flex hover:underline">
                  <FiLogIn className="mt-1" />
                  <span className="pl-2">Login</span>
                </a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="contatiner my-auto mt-4 px-16 mt-16">
          {props.children}
        </main>
        <footer className="flex justify-center items-center h-10">
          <p>Copyright &copy; 2022 eCommerce</p>
        </footer>
      </div>
      <ScrollToTop />
    </Fragment>
  );
}
