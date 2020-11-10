import Layout from '../components/layout';

export default function Home() {
  const president = {
    name: '바이든 대통령 당선자',
    endDate: '2021-01-20',
    imgSrc: '../images/biden.png',
    width: 300,
  };

  const message = {
    expiration_date_title: '취임까지',
    expiration_date_description: '취임',
    card_title: '미국의 대통령의 임기',
    card_content: [<p>미국에서의 대통령의 임기는 4년 중임제이다.</p>],
    url: 'https://chekly.co/biden',
  };

  return (
    <div>
      <Layout president={president} message={message} />
    </div>
  );
}
