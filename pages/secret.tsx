import { NextPage, GetServerSideProps } from "next";
import auth0 from "../utils/auth0";
import { useRouter } from "next/router";

const SecretPage: NextPage<{ username?: string; error?: string }> = (props) => {
  const router = useRouter();
  if (props.username) {
    router.push("/posts");
  }
  if (props.error) {
    router.push("/login");
  }
  return null;
};

export default SecretPage;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {
    const { user } = await auth0.getSession(req);
    return {
      props: {
        username: user?.name,
      },
    };
  } catch (error) {
    return {
      props: { error: error?.message },
    };
  }
};
// export const getServerSideProps: GetServerSideProps = async (req, res) => {
//     try {
//         const {user} = await auth0.getSession(req);
//         return {
//             props: {
//                 username: user.name,
//             }
//         }
//     } catch(err) {
//         return {
//             props: {
//             error: err.mesage
//         }
//     }
// }
