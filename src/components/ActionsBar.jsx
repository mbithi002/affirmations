export default function ActionsBar({ onNew, isLoading }) {
    return (
        <div className="flex items-center justify-center gap-3">
            <button className="btn bg-purple-500 border-none rounded-lg" onClick={onNew} disabled={isLoading}>
                New affirmation
            </button>
        </div>
    )
}
