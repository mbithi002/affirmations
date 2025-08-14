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
        "Every great journey begins with a single step - you’re already on your way.",
        "You’ve overcome so much before - you can handle this too.",
        "It’s okay to take things one small step at a time.",
        "Your effort today is an investment in a better tomorrow.",
        "Progress is progress, no matter how small.",
        "You’re allowed to rest without feeling guilty.",
        "Some days will be hard, but they won’t last forever.",
        "You’ve got everything you need to figure this out.",
        "Small actions add up to big changes.",
        "You are stronger than you give yourself credit for.",
        "It’s okay to not have it all figured out yet.",
        "Every challenge is shaping you into who you’re meant to be.",
        "You’ve already made it through 100% of your toughest days.",
        "Your future self will thank you for trying today.",
        "You have permission to start over as many times as you need.",
        "Slow progress is still progress.",
        "You’re doing better than you think.",
        "It’s okay to learn as you go.",
        "You have more control over your story than you realize.",
        "Mistakes are proof that you’re trying.",
        "Even the smallest step forward is worth celebrating.",
        "You don’t need to be perfect to be proud of yourself.",
        "You are capable of surprising yourself.",
        "Your hard work will pay off, even if you can’t see it yet.",
        "You’ve got this, one breath at a time.",
        "Change is scary, but so is staying the same.",
        "You are not behind; you are exactly where you need to be.",
        "It’s okay to take a break and come back stronger.",
        "The fact that you care means you’re already doing well.",
        "You’re allowed to ask for help when you need it.",
        "You have survived every challenge so far.",
        "Your pace is your own, and that’s okay.",
        "You are learning something valuable with every step.",
        "Even a tiny bit of progress is worth acknowledging.",
        "You can do hard things.",
        "It’s okay to start small and dream big.",
        "Your effort today matters.",
        "There’s no deadline for becoming your best self.",
        "You’re doing something amazing by just showing up.",
        "You’ve come too far to quit now.",
        "Every setback is just a setup for a comeback.",
        "You can figure this out, one piece at a time.",
        "You are more capable than your doubts suggest.",
        "Your path doesn’t have to look like anyone else’s.",
        "You’re building something worthwhile.",
        "Every day is a fresh chance to start again.",
        "You can trust yourself to make the right choices.",
        "One small step today can change everything tomorrow.",
        "You are enough, exactly as you are.",
        "It’s okay to grow at your own pace.",
        "You have the courage to keep going.",
        "Your dreams are worth the effort.",
        "You are allowed to take up space and be seen.",
        "This moment is temporary - better days are ahead.",
        "You are capable of creating change in your life.",
        "You’ve got the strength to keep moving forward.",
        "You are making progress, even if it feels slow.",
        "It’s okay to be proud of small wins.",
        "You are allowed to take care of yourself first.",
        "You are not alone in how you feel.",
        "You are building resilience every day.",
        "You are allowed to let go of what’s not serving you.",
        "Your kindness makes a difference in the world.",
        "It’s okay to change your mind.",
        "You are learning and improving all the time.",
        "You are brave for even trying.",
        "You’re allowed to make time for what matters to you.",
        "Your happiness matters.",
        "You’ve got the skills to get through this.",
        "It’s never too late to start again.",
        "You can handle whatever comes your way.",
        "You are stronger than your fears.",
        "You are exactly where you need to be to grow.",
        "Your efforts are not going unnoticed.",
        "You are worthy of good things.",
        "You’re learning to trust yourself more each day.",
        "You’re doing something today your future self will thank you for.",
        "It’s okay to feel nervous - it means you care.",
        "You have the ability to adapt and thrive.",
        "You’re already making a difference just by trying.",
        "You are more resilient than you think.",
        "You can take things one step at a time.",
        "You’re allowed to go at your own pace.",
        "You’re capable of achieving amazing things.",
        "You are enough, even on the days you don’t feel like it.",
        "You are doing the best you can with what you have.",
        "You have more strength than you realize.",
        "You’re creating a better future for yourself.",
        "You have everything you need within you.",
        "You’re making progress, even if it’s invisible right now.",
        "You have the power to change your story.",
        "You are capable of making it through this.",
        "You are allowed to start fresh whenever you need.",
        "You’re already doing so much better than you think.",
        "You are brave for facing each day.",
        "You’re doing a good job, even if it doesn’t feel like it.",
        "You’re building something beautiful with your life.",
        "You’ve got this - one small step at a time."
    ];
    // Pick one at random
    const text = affirmations[Math.floor(Math.random() * affirmations.length)];

    return { text, source: 'local-json' };
}
