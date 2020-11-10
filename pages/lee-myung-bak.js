import Layout from '../components/layout';

export default function Home() {
  const president = {
    name: '이명박 전 대통령',
    endDate: '2037-10-07',
    imgSrc: '../images/lee.png',
    width: 300,
  };

  const message = {
    expiration_date_title: '출소',
    expiration_date_description: '출소',
    card_title: '이명박 전 대통령',
    card_content: [
      <p>이명박 전 대통령은 2020년 11월 2일에 구치소에 수감되기 시작했고</p>,
      <p>2020년 10월 29일 대법원에서 징역 17년을 선고 받았다.</p>,
    ],
    url: 'https://chekly.co/lee-myung-bak',
  };

  return (
    <div>
      <Layout president={president} message={message} />
    </div>
  );
}
