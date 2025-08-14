// import axios from 'axios'

// // Fetch from primary API with optional fallback
// export async function getAffirmation() {
//     const primaryUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent('https://www.affirmations.dev')}`

//     try {
//         const res = await axios.get(primaryUrl, {
//             headers: { Accept: 'application/json' },
//             timeout: 8000,
//         })

//         if (res.data?.affirmation) {
//             return { text: res.data.affirmation, source: 'affirmations.dev' }
//         }
//         throw new Error('Invalid response from primary API')
//     } catch (err) {
//         // Fallback: ZenQuotes.io
//         try {
//             const z = await axios.get('https://zenquotes.io/api/random', { timeout: 8000 })
//             const first = Array.isArray(z.data) ? z.data[0] : null
//             const text = first?.q ? `${first.q} — ${first.a ?? 'Anonymous'}` : 'You are worthy and capable.'
//             return { text, source: 'zenquotes.io' }
//         } catch {
//             return { text: 'Keep going, you’re doing great! 🌟', source: 'local-fallback' }
//         }
//     }
// }


export async function getAffirmation() {
    const affirmations = [
        "You are beautiful inside and out.",
        "You radiate grace and confidence.",
        "You are worthy of love and kindness.",
        "Your heart is full of gratitude.",
        "You choose joy in every moment.",
        "You are enough, just as you are.",
        "You are blooming into your best self.",
        "You embrace your feminine energy.",
        "You deserve happiness and peace.",
        "You are gentle with yourself today.",
        "You shine with inner light.",
        "You should be proud of how far you’ve come.",
        "You choose softness without weakness.",
        "You are loved and cherished.",
        "You radiate calm and serenity.",
        "You can trust the timing of your life.",
        "You are confident and graceful.",
        "You attract positivity with ease.",
        "Your beauty flows from within.",
        "You are safe, secure, and supported.",
        "You attract only healthy love.",
        "You are aligned with your purpose.",
        "You are tender and powerful.",
        "Your life is filled with blessings.",
        "You are glowing with self-love.",
        "You nurture your body and soul.",
        "You are resilient and radiant.",
        "Your smile lights up the world.",
        "You are gentle with your heart.",
        "You create beauty in all you do.",
        "You are at peace with yourself.",
        "You are a beacon of love.",
        "You inspire kindness in others.",
        "You deserve to take up space.",
        "You can trust yourself completely.",
        "You are blooming with potential.",
        "You are surrounded by love.",
        "You believe in your dreams.",
        "You are calm, present, and free.",
        "You carry yourself with elegance.",
        "You are a source of light.",
        "You welcome abundance with grace.",
        "You can forgive yourself and move forward.",
        "You are grateful for your body.",
        "You are gentle yet strong.",
        "You are always learning and growing.",
        "You honor your feelings.",
        "You can trust your inner wisdom.",
        "You glow with confidence.",
        "You are worthy of your desires.",
        "You bring warmth to every room.",
        "You deserve gentle days.",
        "Your kindness makes a difference.",
        "You are the sunshine after the storm.",
        "You deserve to be celebrated.",
        "Your presence is calming.",
        "You are a work of art.",
        "You are more powerful than you know.",
        "You deserve the love you give others.",
        "You are a blessing to those around you.",
        "Your dreams are worth chasing.",
        "You deserve rest and peace.",
        "You are precious and rare.",
        "You deserve to feel safe.",
        "You are a light in the dark.",
        "Your heart is pure and kind.",
        "You deserve endless joy.",
        "You inspire hope in others.",
        "You are deeply valued.",
        "Your worth is beyond measure.",
        "You deserve beautiful beginnings.",
        "You are radiant in every way.",
        "Your soul is gentle and strong.",
        "You are full of potential.",
        "You deserve time to heal.",
        "You are the embodiment of grace.",
        "Your laughter is healing.",
        "You deserve to shine.",
        "You are love in motion.",
        "Your heart is your greatest strength.",
        "You are always enough.",
        "You deserve compassion.",
        "You are treasured beyond words.",
        "Your courage inspires others.",
        "You deserve to feel free.",
        "You are worthy of the calm you seek.",
        "Your gentleness is a gift.",
        "You are a safe space for others.",
        "You deserve tender care.",
        "You are joy in human form.",
        "Your beauty lights up the day.",
        "You are surrounded by abundance.",
        "Your love changes lives.",
        "You are a masterpiece.",
        "You deserve kindness every day.",
        "Your light cannot be dimmed.",
        "You are perfectly imperfect.",
        "Your spirit is unbreakable.",
        "You deserve to feel cherished."
    ];

    // Pick one at random
    const text = affirmations[Math.floor(Math.random() * affirmations.length)];

    return { text, source: 'local-json' };
}
