import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'dotenv/config';

import { downloadVideo, removeVideo } from 'video';

const app = express();

const ENV = process.env.NODE_ENV || 'development';
const HOST = ENV === 'production' ? '' : 'localhost';
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(helmet());


app.get('/', (req, res) => {
    res.send('Welcome to the Youtube Video Downloader.')
})

app.get('/:video_id', (req, res) => {
    res.send()
});

app.get('/download/:video_id', (req, res) => {
    res.send(req.params.video_id);
});


app.get('/remove/:video_id', (req, res) => {
    let result = removeVideo(req.params.video_id);
    if(result)
    {
        return res.send({
            'succeeded': true,
            'message': 'Video removed successfully!'
        })
    } else {
        return res.send({
            'succeeded': false,
            'message': 'Video not found or could not be removed!'
        })
    }
})

app.listen(PORT, () => console.log(`Server Up!\nhttp://${HOST}:${PORT}/ !\n`));
