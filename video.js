import { existsSync, unlink }  from 'node:fs';

class Video {
    constructor(options = {}, url = null) {
        this.url = url;
        this.options = options;
        this.is_downloaded = isVideoDownloaded(url);
    }

    setOptions(options){ this.options = options; }
    getOptions(){ return this.options; }

    setId(id){ this.id = id; }
    getId(){ return this.id; }

    isFileExist(filename){ return existsSync(filename); }

    isVideoDownloaded(url)
    {
        if(url)
        {
            return this.isFileExist(url);
        }
        return false;
    }
}

function downloadVideo(req, res, next)
{
    let p = req.params;
    const video = new Video(p.options, p.url);


}

function removeVideo(video_id)
{
    unlink(`${video_id}.mp4`, (err) => {
        if (err) console.error(err);
        else {
            console.log(`\nDeleting video file: ${video_id}.mp4`);
        }
    });
}

export default Video;
export { downloadVideo, removeVideo };
