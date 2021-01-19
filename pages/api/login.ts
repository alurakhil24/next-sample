import { NextApiHandler } from "next";
import auth0 from "../../utils/auth0";
const login: NextApiHandler = async (req, res) => {
  try {
    console.log('login caled')
    await auth0.handleLogin(req, res);
  } catch (e) {
    console.log(e);
    res.status(e.status || 500).end(e.message);
  }
};
export default login;
