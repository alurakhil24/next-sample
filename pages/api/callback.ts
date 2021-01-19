import { NextApiHandler, GetStaticPaths } from "next";
import auth0 from "../../utils/auth0";
// AfterCallac
const callback: NextApiHandler = async (req, res) => {
  try {
    // await auth0.handleCallback(req, res, { redirectTo: "/secret" });
    await auth0.handleCallback(req, res);
  } catch (e) {
    console.log(e);
    res.status(e.status || 500).end(e.message);
  }
};
export default callback;
