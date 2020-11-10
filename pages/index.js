import Layout from '../components/layout';

export default function Home() {
  const president = {
    name: '문재인 대통령',
    endDate: '2022-05-09',
    imgSrc:
      'https://pds.joins.com//news/component/htmlphoto_mmdata/201801/07/d4fb3385-d595-4fcd-a3dc-fb7c3b473fdc.jpg',
    width: 500,
  };

  const message = {
    expiration_date_title: '임기 만료까지',
    expiration_date_description: '임기 만료',
    card_title: '대통령의 임기',
    card_content: [
      <p>대한민국에서 대통령의 임기는 5년이고 중임이 불가능 하다.</p>,
    ],
  };

  return (
    <div>
      <Layout president={president} message={message} />
    </div>
  );
}
