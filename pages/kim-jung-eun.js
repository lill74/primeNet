import Head from 'next/head';
import Link from 'next/link';
import Timer from '../components/timer';
import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const president = {
    name: '김정은 돼지',
    endDate: '2120-01-01',
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Kim_Jong-un_April_2019_%28cropped%29.jpg/250px-Kim_Jong-un_April_2019_%28cropped%29.jpg',
    width: 250,
  };

  return (
    <div className="container">
      <Head>
        <title>primeNet - 프라임넷</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <h1 className="title has-text-black">primeNet</h1>
        <h1 className="title has-text-black">프라임넷</h1>
        <h2 className="description has-text-black">
          {president.name} 임기 만료까지
        </h2>
        <img
          className="mt-3"
          src={president.imgSrc}
          width={president.width}
        ></img>

        <Timer endDate={president.endDate}></Timer>

        <a
          href="hhttps://ko.wikisource.org/wiki/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%ED%97%8C%EB%B2%95"
          className="card has-text-black"
        >
          <h3 className="has-text-weight-bold">대통령의 임기? &rarr;</h3>
          <p>대한민국에서 대통령의 임기는 5년이고 중임이 불가능 하다.</p>
        </a>

        <h2 className="has-text-weight-bold	is-size-5 has-text-black">
          다른 대통령도 확인 해보세요!
        </h2>

        <div className="buttons">
          <Link href="/">
            <button className="button is-primary is-outlined">문재인</button>
          </Link>
          <Link href="/kim-jung-eun">
            <button className="button is-primary is-outlined">김정은</button>
          </Link>
          <Link href="/trump">
            <button className="button is-primary is-outlined">트럼프</button>
          </Link>
        </div>
      </main>

      <footer>
        <a>alus20x@gmail.com</a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Nanum Gothic', sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          font-weight: normal;
        }

        h1 {
          text-align: center;
        }
      `}</style>
    </div>
  );
}
