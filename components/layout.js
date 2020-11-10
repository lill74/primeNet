import Head from 'next/head';
import Timer from '../components/timer';
import 'bulma/css/bulma.min.css';
import DisqusComments from '../components/disqus';
import Buttons from '../components/button';
import PropTypes from 'prop-types';
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  TwitterShareButton,
} from 'react-share';
import { FacebookIcon, FacebookMessengerIcon, TwitterIcon } from 'react-share';

export default function Layout(props) {
  return (
    <div className="container">
      <Head>
        <title>primeNet - 프라임넷</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;800&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="민주주의로 향하는 길 primeNet - 대통령 임기 보기"
        />
        <meta
          property="og:title"
          content={`${props.president.name} 남은 임기`}
          key="og:title"
        />
        <meta
          property="og:description"
          content="민주주의로 향하는 길 primeNet - 대통령 임기 보기"
          key="og:description"
        />
        <meta
          property="og:image"
          content="https://chekly.co/moon.png"
          key="og:image"
        />
        <meta property="og:url" content={props.message.url} key="og:url" />
        <meta property="fb:app_id" content="393745795072444" key="fb:app_id" />
      </Head>

      <main>
        <h1 className="title has-text-black">primeNet</h1>
        <h1 className="title has-text-black">프라임넷</h1>
        <h2 className="description has-text-black">
          {props.president.name} {props.message.expiration_date_title}
        </h2>
        <img
          className="mt-3"
          src={props.president.imgSrc}
          width={props.president.width}
        ></img>

        <Timer
          endDate={props.president.endDate}
          message={props.message.expiration_date_description}
        ></Timer>

        <a href={props.message.card_href} className="card has-text-black">
          <h3 className="has-text-weight-bold">
            {props.message.card_title}&rarr;
          </h3>
          {props.message.card_content}
        </a>

        <h2 className="has-text-weight-bold	is-size-5 has-text-black mb-3">
          다른 대통령도 확인 해보세요!
        </h2>

        <div className="buttons">
          <Buttons />
        </div>
        <div>
          <FacebookShareButton
            url={props.message.url}
            quote="대통령 남은 임기 보기"
          >
            <FacebookIcon size={42} round />
          </FacebookShareButton>
          <FacebookMessengerShareButton
            url={props.message.url}
            appId="393745795072444"
          >
            <FacebookMessengerIcon size={42} round />
          </FacebookMessengerShareButton>
          <TwitterShareButton
            url={props.message.url}
            title="대통령 남은 임기 보기"
          >
            <TwitterIcon size={42} round />
          </TwitterShareButton>
        </div>
      </main>
      <div className="chat">
        <DisqusComments />
      </div>

      <footer>
        <a>
          이 사이트는 어떠한 정치적 편향도 갖지 않으며, 민주주의에 대한 관심을
          환기하기 위해 제작한 사이트입니다.
        </a>
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

        .chat {
          width: 80%;
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

Layout.propTypes = {
  president: PropTypes.object,
  message: PropTypes.object,
};

Layout.defaultProps = {
  president: {
    name: '테스트',
    endDate: '9999-10-07',
    imgSrc:
      'https://pds.joins.com//news/component/htmlphoto_mmdata/201801/07/d4fb3385-d595-4fcd-a3dc-fb7c3b473fdc.jpg',
    width: 500,
  },
  message: {
    expiration_date_title: '임기 만료',
    expiration_date_description: '임기 만료',
    card_title: '대통령의 임기?',
    card_content: [
      <p>대한민국에서 대통령의 임기는 5년이고 중임이 불가능 하다.</p>,
    ],
    card_href:
      'https://ko.wikisource.org/wiki/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%ED%97%8C%EB%B2%95',
  },
};
