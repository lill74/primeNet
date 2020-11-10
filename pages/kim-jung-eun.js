import Layout from '../components/layout';

export default function Home() {
  const president = {
    name: '김정은 돼지',
    endDate: '2120-01-01',
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Kim_Jong-un_April_2019_%28cropped%29.jpg/250px-Kim_Jong-un_April_2019_%28cropped%29.jpg',
    width: 250,
  };

  const message = {
    expiration_date_title: '임기 만료까지',
    expiration_date_description: '임기 만료',
    card_title: '김정은',
    card_content: [
      <p>김정은은 2011년 김정일의 사망 이후 3대 세습으로</p>,
      <p>
        조선민주주의인민공화국의 원수이다. 사실상 뒤질때까지 영원한 수령이다.
      </p>,
    ],
    url: 'https://chekly.co/kim-jung-eun',
  };

  return (
    <div>
      <Layout president={president} message={message} />
    </div>
  );
}
