import Layout from '../components/layout';

export default function Home() {
  const president = {
    name: '이명박 전 대통령',
    endDate: '9999-10-07',
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/commons/e/e6/Lee_Myung-bak_2013-01-29.jpg',
    width: 250,
  };

  const message = {
    expiration_date_title: '출소',
    expiration_date_description: '출소',
    card_title: '이명박 전 대통령',
    card_content: [
      <p>박근혜 전 대통령은 2017년 3월 31일에 구치소에 수감되기 시작했고</p>,
      <p>2020년 7월 10일 서울고법에서 징역 20년을 선고 받았다.</p>,
    ],
    url: 'https://chekly.co/lee-myung-bak',
  };

  return (
    <div>
      <Layout president={president} message={message} />
    </div>
  );
}
