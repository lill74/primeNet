import Layout from '../components/layout';

export default function Home() {
  const president = {
    name: '박근혜 전 대통령',
    endDate: '2040-03-31',
    imgSrc: '../images/park.png',
    width: 300,
  };

  const message = {
    expiration_date_title: '출소 까지',
    expiration_date_description: '출소',
    card_title: '박근혜 전 대통령',
    card_content: [
      <p>박근혜 전 대통령은 2017년 3월 31일에 구치소에 수감되기 시작했고</p>,
      <p>2020년 7월 10일 서울고법에서 징역 20년을 선고 받았다.</p>,
    ],
    url: 'https://chekly.co/park-geun-hae',
  };

  return (
    <div>
      <Layout president={president} message={message} />
    </div>
  );
}
