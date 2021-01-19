import { GetStaticProps, NextPage } from "next";
import axios from "axios";
import NextLink from "next/link";
import Cards from "../../components/Cards";
import Card from "../../components/Card";
export interface Post {
  userId: number;
  title: string;
  id: number;
  body: string;
}
export const Posts: NextPage<{
  data: Post[];
}> = (props) => {
  return (
    <div className="flex flex-col align-items-center">
      <h1 className="text-center text-5xl font-bold">Posts</h1>
      <Cards className="my-5">
        {props.data.map(({ id, title }) => {
          const key = `/posts/${id}`;
          return (
            <Card key={key}>
              <NextLink passHref href={`/posts/[id]`} as={key}>
                <a className="block text-center my-3" href="#">
                  {title}
                </a>
              </NextLink>
            </Card>
          );
        })}
      </Cards>
    </div>
  );
};
export default Posts;
export const getStaticProps: GetStaticProps = async () => {
  const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const data = posts.data;
  return {
    props: {
      data,
    },
  };
};
