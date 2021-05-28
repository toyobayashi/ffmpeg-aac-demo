module.exports = {
  project: 'aac',
  targets: [
    {
      name: 'aac',
      type: 'exe',
      sources: [
        './src/main.c'
      ],
      includePaths: ['./deps/ffmpeg/include'],
      libs: [
        './deps/ffmpeg/lib/avcodec.lib',
        './deps/ffmpeg/lib/avformat.lib',
        './deps/ffmpeg/lib/avutil.lib',
        './deps/ffmpeg/lib/swresample.lib'
      ],
      staticVCRuntime: true
    }
  ]
}
