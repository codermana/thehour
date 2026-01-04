import fs from 'fs';
import path from 'path';

export default (req, res) => {
    if (req.method === 'GET') {
        const commentsFilePath = path.join(process.cwd(), 'data', 'comments.json');
        let comments = {};

        try {
            comments = JSON.parse(fs.readFileSync(commentsFilePath, 'utf8'));
        } catch (e) {}

        res.status(200).json(comments);
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
