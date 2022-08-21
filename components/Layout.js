import Head from 'next/head';
import React from 'react';
import { Fragment } from 'react';
import Link from 'next/link';

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
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/">
              <a className="text-2xl font-bold">eCommerce</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2">Cart</a>
              </Link>
              <Link href="/login">
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="contatiner m-auto mt-4 px-4">{props.children}</main>
        <footer className="flex justify-center items-center h-10">
          <p>Copyright &copy; 2022 eCommerce</p>
        </footer>
      </div>
    </Fragment>
  );
}
