import React from 'react';
import { Fragment } from 'react';
import Link from 'next/dist/client/link';

export default function Pagination(props) {
  return (
    <div className="mb-4">
      <Link href="/">
        <a className="">All products</a>
      </Link>
      <span> - </span>
      <Link href={`/` + props.category.toLowerCase()}>
        <a className="">{props.category}</a>
      </Link>
      <span> - </span>
      <span className="underline"> {props.name}</span>
    </div>
  );
}
