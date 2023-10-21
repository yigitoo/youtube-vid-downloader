import { existsSync, unlink }  from 'node:fs';

class Video {
    constructor(options = {}, url = null) {
        this.url = url;
        this.options = options;
        this.is_downloaded = isVideoDownloaded(url);

        this.file = null;
    }

    setOptions(options){ this.options = options; }
    getOptions(){ return this.options; }

    setId(id){ this.id = id; }
    getId(){ return this.id; }

    getVideo()
    {
        if (this.video)
        {
            return this.video;
        } else {
            return this.downloadVideo(this.url, this.options)
        }
    }

    isFileExist(filename){ return existsSync(filename); }

    isVideoDownloaded(url)
    {
        if(url)
        {
            return this.isFileExist(url);
        }
        return false;
    }

    Download() {
        this.file = this.BuildVideo();
    }

    BuildVideo(){}
}

function downloadVideo(url, options)
{
    let p = req.params;
    const video = new Video(p.options, p.url);
    video.Download();
    return video;
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
