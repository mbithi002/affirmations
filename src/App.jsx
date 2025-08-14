import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getAffirmation } from './api/affirmations.js'
import ActionsBar from './components/ActionsBar.jsx'
import AffirmationCard from './components/AffirmationCard.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'

export default function App() {
    const queryClient = useQueryClient()
    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['affirmation'], // ✅ stable key
        queryFn: getAffirmation,
        staleTime: 1000 * 60 * 5, // 5 minutes (avoid unnecessary requests)
        cacheTime: 1000 * 60 * 10, // keep in cache for 10 minutes
        refetchOnWindowFocus: false,
    })

    const onNew = () => {
        refetch()
        queryClient.invalidateQueries({ queryKey: ['affirmation'] })
    }

    return (
        <div className="min-h-screen bg-pink-100 text-pink-400">
            <Header />
            <main className="px-4 md:px-6 py-10 grid place-items-center">
                <section className="w-full max-w-3xl">
                    <div className="prose prose-sm md:prose lg:prose-lg mx-auto text-center mb-6">
                        <h1 className="mb-2">Your tiny boost for today 💚</h1>
                        <p className="opacity-80">Affirmations to nudge your mindset toward growth.</p>
                    </div>

                    {isLoading && (
                        <div className="skeleton h-40 w-full rounded-2xl" />
                    )}

                    {isError && (
                        <div className="alert alert-error max-w-2xl mx-auto">
                            <span>Couldn’t fetch an affirmation. Try again.</span>
                        </div>
                    )}

                    {data && <AffirmationCard text={data.text} source={data.source} />}

                    <div className="mt-6">
                        <ActionsBar isLoading={isLoading} onNew={onNew} />
                    </div>
                </section>
            </main>
            <Footer />
            <div className="flex flex-col w-full my-2 p-4 items-center justify-normal gap-">
                <a href="https://github.com/mbithi002">
                    <button className="btn btn-base-200">
                        Github
                    </button>
                </a>
                <p className="text-black my-2">
                    Dev: Lucky🚀
                </p>
            </div>
        </div>
    )
}
