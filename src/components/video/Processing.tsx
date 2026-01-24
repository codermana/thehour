export default function Processing() {
  return (
    <div id="video-processing" className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border-2 border-codermana-orange my-10">
        <div className="aspect-video relative bg-linear-to-br from-gray-900 via-zinc-900 to-gray-800">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'linear-linear(rgba(255,140,66,.3) 1px, transparent 1px), linear-linear(90deg, rgba(255,140,66,.3) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-codermana-orange/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '3s'}}></div>
                <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-codermana-orange/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                <div className="relative mb-8">
                    <div className="absolute inset-0 bg-codermana-orange/30 rounded-full blur-2xl animate-pulse"></div>
                    <div className="relative bg-linear-to-br from-codermana-orange to-codermana-dark-orange p-6 rounded-2xl">
                        <svg className="w-16 h-16 text-white animate-spin" style={{animationDuration: '2s'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                        </svg>
                    </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">
                    Video Processing
                </h3>
                <p className="text-gray-300 text-center mb-6 max-w-md">
                    We're editing and processing the recording. This usually takes 2-3 days after the session ends.
                </p>

                <div className="w-full max-w-md mb-6">
                    <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
                        <div className="bg-linear-to-r from-codermana-orange to-codermana-dark-orange h-full rounded-full animate-pulse" style={{width: '65%'}}></div>
                    </div>
                    <p className="text-gray-400 text-sm text-center mt-2">Processing... Check back soon!</p>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 max-w-md">
                    <p className="text-sm text-gray-300 mb-3">
                        <strong className="text-white">While you wait:</strong>
                    </p>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-codermana-orange mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <span>Download slides and code below</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-codermana-orange mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <span>Subscribe to get notified when video is ready</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-codermana-orange mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <span>Check out previous sessions</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
