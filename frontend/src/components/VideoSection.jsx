

function VideoSection({ src }) {


  return (
    <div className="mx-auto w-full max-w-4xl rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
      <h1 className="mb-4 text-3xl font-bold text-gray-800 dark:text-white">Video Lesson</h1>
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-gray-200 shadow-inner dark:border-gray-700">
        <iframe
          className="absolute top-0 left-0 h-full w-full"
          src={src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  )

}

export default VideoSection;
