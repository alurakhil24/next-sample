import { GetServerSideProps, NextPage } from "next";
import axios from "axios";
import { Post } from ".";
import ErrorPage from "next/error";

export const PostData: NextPage<{
  data: Post;
}> = ({ data }) => {
  if (!data) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div className="pt-6 my-4 bg-gray-100 rounded-xl p-8 mx-72">
      <h3 className="text-4xl leading-10 capitalize font-medium text-gray-900 mb-6">
        {data.title}
      </h3>
      <p className="text-lg font-normal">{data.body}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  res,
}) => {
  try {
    const result = await axios.get(
      `http://localhost:3000/api/posts/${params.id}`
    );
    const data = result.data;

    return {
      props: { data },
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
};

export default PostData;
