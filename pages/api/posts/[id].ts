import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const user: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    const post = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (post.data) {
        return res.status(200).json(post.data);
    } else {
        return res.status(404).end();
    }
}

export default user;