import { Link } from 'react-router-dom';

interface ArticleLinkProps {
  href: string;
  title: string;
  dateCreated: Date;
}

function formatDate(date: Date) {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.getDate();
  const year = date.getFullYear();

  // Add ordinal suffix
  const suffix =
    day % 10 === 1 && day !== 11
      ? 'st'
      : day % 10 === 2 && day !== 12
        ? 'nd'
        : day % 10 === 3 && day !== 13
          ? 'rd'
          : 'th';

  return `${month} ${day}${suffix}, ${year}`;
}

const ArticleLink = ({ href, title, dateCreated }: ArticleLinkProps) => {
  return (
    <Link to={href}>
      <h1 className='text-5xl text-indigo-500 hover:text-glow'>{title}</h1>
      <p>Posted on {formatDate(dateCreated)}</p>
    </Link>
  );
};

export default ArticleLink;
