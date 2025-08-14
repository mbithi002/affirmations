export default function AffirmationCard({ text, source }) {
    return (
        <div className="card bg-white rounded-lg sm:p-12 shadow-xl max-w-2xl mx-auto my-2">
            <div className="card-body gap-4">
                <h2 className="card-title text-xl md:text-2xl leading-snug text-center">
                    ✨ {text}
                </h2>
                <p className="text-sm opacity-60 text-center text-purple-500">
                    {source === 'affirmations.dev'
                        ? 'Source: affirmations.dev'
                        : <>Source: ZenQuotes (please include attribution when using the free tier)</>}
                </p>
            </div>
        </div>
    )
}
