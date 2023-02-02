type Props = {
  title: string;
  content: string;
  commentsQty: number;
  tags: string[];
};
const Destructuring = ({ title, content, commentsQty, tags }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentarios:{commentsQty}</p>
      <p>Tags:</p>
      {tags.map((tag) => (
        <span>#{tag}</span>
      ))}
    </div>
  );
};
export default Destructuring;
