import axios from 'axios'

// Fetch from primary API with optional fallback
export async function getAffirmation() {
    const primaryUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent('https://www.affirmations.dev')}`

    try {
        const res = await axios.get(primaryUrl, {
            headers: { Accept: 'application/json' },
            timeout: 8000,
        })

        if (res.data?.affirmation) {
            return { text: res.data.affirmation, source: 'affirmations.dev' }
        }
        throw new Error('Invalid response from primary API')
    } catch (err) {
        // Fallback: ZenQuotes.io
        try {
            const z = await axios.get('https://zenquotes.io/api/random', { timeout: 8000 })
            const first = Array.isArray(z.data) ? z.data[0] : null
            const text = first?.q ? `${first.q} — ${first.a ?? 'Anonymous'}` : 'You are worthy and capable.'
            return { text, source: 'zenquotes.io' }
        } catch {
            return { text: 'Keep going, you’re doing great! 🌟', source: 'local-fallback' }
        }
    }
}
