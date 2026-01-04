import fs from 'fs';
import path from 'path';

export default (req, res) => {
    if (req.method === 'POST') {
        const { name, message } = req.body;

        const commentsFilePath = path.join(process.cwd(), 'data', 'comments.json');
        let comments = {};

        try {
            comments = JSON.parse(fs.readFileSync(commentsFilePath, 'utf8'));
        } catch (e) {}

        const newCommentId = Date.now().toString();
        comments[newCommentId] = { name, message };

        fs.writeFileSync(commentsFilePath, JSON.stringify(comments));

        res.status(201).json({ id: newCommentId });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
