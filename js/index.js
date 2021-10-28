const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
const ffmpeg = require('fluent-ffmpeg')
ffmpeg.setFfmpegPath(ffmpegPath)
const videoPath = '';
const startTime = '00:00:03';
const endTime = '00:00:08';
const outPath = videoPath + " " + startTime + "_" + endTime

ffmpeg(videoPath)
    .setStartTime(startTime)
    .setDuration(10)
    .output(outPath)
    .on('end', function(err) {
        if(!err) { console.log('Conversion Complete: ' + outPath) }
    })
    .on('error', function(err) {
        console.log('error: ', err)
    })
    .run()