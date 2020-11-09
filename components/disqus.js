import { DiscussionEmbed } from 'disqus-react';
const DisqusComments = ({}) => {
  const disqusShortname = 'primenet';
  const disqusConfig = {
    url: 'https://chekly.co',
    identifier: '1', // Single post id
    title: 'primeNet', // Single post title
    language: 'ko',
  };
  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};
export default DisqusComments;
