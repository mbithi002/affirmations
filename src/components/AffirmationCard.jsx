export default function AffirmationCard({ text, source }) {
    return (
        <div className="card bg-white rounded-lg sm:p-12 shadow-xl max-w-2xl mx-auto my-2">
            <div className="card-body gap-4 mx-auto">
                <h2 className="card-title text-xl md:text-2xl leading-snug text-center">
                    ✨ {text}
                </h2>
                <p className="text-sm opacity-60 text-center text-purple-500">
                    Be happy
                </p>
            </div>
        </div>
    )
}
