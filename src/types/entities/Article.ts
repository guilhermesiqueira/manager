import Author from "./Author";

export default interface Article {
  id: number;
  title: string;
  image: string;
  visible: boolean;
  publishedAt: string;
  link: string;
  author: Author;
}
