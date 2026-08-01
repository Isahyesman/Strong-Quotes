/* =========================================================
   VERSE — app.js
   Vanilla JS, no build step. Everything the app needs to run
   lives in this one file: data, state, rendering, storage.
   ========================================================= */

(() => {
  "use strict";

  /* ---------------------------------------------------------
     1. CATEGORY DEFINITIONS
     id must match the CSS body[data-category="id"] selectors
     --------------------------------------------------------- */
  const CATEGORIES = [
    { id: "all",         label: "All Verses",   color: "#8f8bff" },
    { id: "business",    label: "Business & Success",  color: "#cba135" },
    { id: "mindfulness", label: "Mindfulness & Peace", color: "#6fcf97" },
    { id: "resilience",  label: "Life & Resilience",   color: "#e0985a" },
    { id: "faith",       label: "Faith & Spirit",      color: "#ffb37b" },
    { id: "discipline",  label: "Discipline & Growth", color: "#4fa3de" },
    { id: "code",        label: "Code & Wisdom",       color: "#39ff88" },
  ];

  /* ---------------------------------------------------------
     2. QUOTE LIBRARY
     Every quote is original, written for this app — no lines
     borrowed or paraphrased from a named author's real work.
     --------------------------------------------------------- */
  const QUOTES = [
    // ---- Business & Success ----
    { cat:"business", text:"Small margins compound. Show up on the boring Tuesday and success stops being a surprise.", author:"Unknown" },
    { cat:"business", text:"The market doesn't reward the loudest idea. It rewards the one still standing after the fifth revision.", author:"Unknown" },
    { cat:"business", text:"Every empire you admire was once a spreadsheet nobody believed in.", author:"Unknown" },
    { cat:"business", text:"Ambition without a system is just an expensive daydream.", author:"Unknown" },
    { cat:"business", text:"Sell the outcome, build the trust, and the revenue will stop feeling like luck.", author:"Unknown" },
    { cat:"business", text:"Cash flow is the only opinion in business that never lies to you.", author:"Unknown" },
    { cat:"business", text:"The competitor you're afraid of is also afraid of you. Move first.", author:"Unknown" },
    { cat:"business", text:"Customers don't buy products, they buy a version of themselves they like better.", author:"Unknown" },
    { cat:"business", text:"A good plan executed today beats a perfect plan executed never.", author:"Unknown" },
    { cat:"business", text:"Profit is just proof that you solved something people were tired of solving alone.", author:"Unknown" },
    { cat:"business", text:"Your first hundred customers will teach you more than any business degree.", author:"Unknown" },
    { cat:"business", text:"Growth hides most mistakes. Slow down and you'll see exactly where you're bleeding.", author:"Unknown" },
    { cat:"business", text:"The best pitch in the world still needs a product that keeps its promise.", author:"Unknown" },
    { cat:"business", text:"Negotiate like you'll do business with this person again, because you probably will.", author:"Unknown" },
    { cat:"business", text:"Every overnight success kept receipts for a decade nobody was watching.", author:"Unknown" },
    { cat:"business", text:"A brand is a promise kept in public, over and over, until it's believed.", author:"Unknown" },
    { cat:"business", text:"Hire for judgment. Skills can be taught; judgment usually can't.", author:"Unknown" },
    { cat:"business", text:"The unpaid invoice is a lesson in who you should stop working with.", author:"Unknown" },
    { cat:"business", text:"Scale multiplies whatever is already true about your business \u2014 good and bad.", author:"Unknown" },
    { cat:"business", text:"Risk isn't the enemy of security. Standing still is.", author:"Unknown" },
    { cat:"business", text:"The market doesn't care how hard you worked, only what you shipped.", author:"Unknown" },
    { cat:"business", text:"Your reputation compounds faster than your revenue, and it's harder to rebuild.", author:"Unknown" },
    { cat:"business", text:"Diversify your income before life forces you to.", author:"Unknown" },
    { cat:"business", text:"A single clear offer beats ten confusing ones.", author:"Unknown" },
    { cat:"business", text:"Success leaves clues, but discipline is what actually follows them.", author:"Unknown" },
    { cat:"business", text:"The person who asks the awkward pricing question first usually wins the negotiation.", author:"Unknown" },
    { cat:"business", text:"Don't wait for permission to build something people already need.", author:"Unknown" },
    { cat:"business", text:"Your competitors' reviews are a free list of what to fix first.", author:"Unknown" },
    { cat:"business", text:"The best marketing is a customer who can't stop talking about you.", author:"Unknown" },
    { cat:"business", text:"Debt isn't the problem. Debt without a plan is.", author:"Unknown" },
    { cat:"business", text:"Every no from an investor is a rehearsal for the yes that matters.", author:"Unknown" },
    { cat:"business", text:"Build the thing people already pay for, then make it better.", author:"Unknown" },
    { cat:"business", text:"A slow month is data, not a verdict on your worth.", author:"Unknown" },
    { cat:"business", text:"The business that listens outlasts the business that only broadcasts.", author:"Unknown" },
    { cat:"business", text:"Price for value, not for the fear of losing the sale.", author:"Unknown" },
    { cat:"business", text:"What you tolerate in your team, you're quietly training them to repeat.", author:"Unknown" },
    { cat:"business", text:"Momentum is a currency. Spend it on the hardest task first.", author:"Unknown" },
    { cat:"business", text:"The exit interview always tells you what the performance review didn't.", author:"Unknown" },
    { cat:"business", text:"Focus is just ambition that finally chose a lane.", author:"Unknown" },
    { cat:"business", text:"A great hire changes the ceiling of what's possible. Hire slow.", author:"Unknown" },
    { cat:"business", text:"The spreadsheet doesn't care about your excuses, only your inputs.", author:"Unknown" },
    { cat:"business", text:"Consistency in delivery builds more loyalty than any discount ever will.", author:"Unknown" },
    { cat:"business", text:"You don't need more hours, you need fewer distractions wearing urgency as a disguise.", author:"Unknown" },
    { cat:"business", text:"The best time to fix your process was before the client noticed.", author:"Unknown" },
    { cat:"business", text:"Every satisfied customer is a sales team you don't have to pay.", author:"Unknown" },
    { cat:"business", text:"Build margin into the plan; life will spend it whether you budget it or not.", author:"Unknown" },
    { cat:"business", text:"Success is mostly just the discipline to keep showing up after the applause stops.", author:"Unknown" },
    { cat:"business", text:"A business built only on hustle collapses the day you get tired.", author:"Unknown" },
    { cat:"business", text:"The market rewards clarity. Say exactly what you do and who it's for.", author:"Unknown" },
    { cat:"business", text:"Wealth is built quietly, in decisions nobody claps for.", author:"Unknown" },

    // ---- Daily Mindfulness & Inner Peace ----
    { cat:"mindfulness", text:"You do not have to win the morning. You only have to meet it.", author:"Unknown" },
    { cat:"mindfulness", text:"Breathe in for four, hold for four, and let the urgency leave with the exhale.", author:"Unknown" },
    { cat:"mindfulness", text:"Peace is not the absence of noise. It's the place in you the noise can't reach.", author:"Unknown" },
    { cat:"mindfulness", text:"The present moment has never once let you down; only your thoughts about it have.", author:"Unknown" },
    { cat:"mindfulness", text:"Slow down. The moss doesn't rush to cover the stone, and the stone is still beautiful.", author:"Unknown" },
    { cat:"mindfulness", text:"Notice the quiet between your thoughts; that's you, underneath the noise.", author:"Unknown" },
    { cat:"mindfulness", text:"You can't pour from an empty cup, so stop apologizing for filling yours.", author:"Unknown" },
    { cat:"mindfulness", text:"Stillness is not laziness. It's where clarity finally gets a chance to speak.", author:"Unknown" },
    { cat:"mindfulness", text:"The mind that rushes misses the very life it's rushing toward.", author:"Unknown" },
    { cat:"mindfulness", text:"Let today be simple. Simple is allowed to be enough.", author:"Unknown" },
    { cat:"mindfulness", text:"Your breath is the only thing that's always, always in the present tense.", author:"Unknown" },
    { cat:"mindfulness", text:"Watch a thought arrive, and just as easily, watch it leave. You are not it.", author:"Unknown" },
    { cat:"mindfulness", text:"Some days the bravest thing you'll do is rest without guilt.", author:"Unknown" },
    { cat:"mindfulness", text:"The sky doesn't apologize for clouds. Neither should you for a hard week.", author:"Unknown" },
    { cat:"mindfulness", text:"One mindful breath is worth more than a hundred distracted hours.", author:"Unknown" },
    { cat:"mindfulness", text:"You are allowed to close the tabs in your mind, one at a time.", author:"Unknown" },
    { cat:"mindfulness", text:"Peace grows in the space you make for it, not in the space that's left over.", author:"Unknown" },
    { cat:"mindfulness", text:"The present moment is the only room you're actually standing in.", author:"Unknown" },
    { cat:"mindfulness", text:"Let the silence finish its sentence before you rush to fill it.", author:"Unknown" },
    { cat:"mindfulness", text:"Notice five things around you right now. That's the whole practice.", author:"Unknown" },
    { cat:"mindfulness", text:"Calm isn't something you find. It's something you keep choosing.", author:"Unknown" },
    { cat:"mindfulness", text:"You don't have to fix the whole day, just the next ten minutes of it.", author:"Unknown" },
    { cat:"mindfulness", text:"A quiet mind hears things a busy one walks straight past.", author:"Unknown" },
    { cat:"mindfulness", text:"The tide doesn't rush, and it still reshapes the whole shore.", author:"Unknown" },
    { cat:"mindfulness", text:"Sit with what is, before you try to change what isn't.", author:"Unknown" },
    { cat:"mindfulness", text:"Your nervous system believes what your breath tells it. Tell it something kind.", author:"Unknown" },
    { cat:"mindfulness", text:"Rest is not a reward you earn. It's a need you honor.", author:"Unknown" },
    { cat:"mindfulness", text:"The birds outside don't know your deadlines, and somehow they're still singing.", author:"Unknown" },
    { cat:"mindfulness", text:"You can be at peace and still have an unfinished to-do list.", author:"Unknown" },
    { cat:"mindfulness", text:"Let your shoulders drop an inch. Notice how much you were carrying that wasn't yours.", author:"Unknown" },
    { cat:"mindfulness", text:"This exact breath has never happened before and will never happen again.", author:"Unknown" },
    { cat:"mindfulness", text:"Presence is the only place worry has never managed to reach.", author:"Unknown" },
    { cat:"mindfulness", text:"A calm home starts with one calm room, which starts with one calm you.", author:"Unknown" },
    { cat:"mindfulness", text:"Notice the light before it's gone. It was never going to wait for you.", author:"Unknown" },
    { cat:"mindfulness", text:"You are not behind. You are exactly where your own pace has taken you.", author:"Unknown" },
    { cat:"mindfulness", text:"Softening is not surrender. It's how you stop fighting things that were never enemies.", author:"Unknown" },
    { cat:"mindfulness", text:"Let the coffee be warm and the morning be slow, just this once.", author:"Unknown" },
    { cat:"mindfulness", text:"The quiet ones in nature \u2014 moss, roots, stone \u2014 are also the most patient.", author:"Unknown" },
    { cat:"mindfulness", text:"Anxiety lives in the future. Peace only ever lives right here.", author:"Unknown" },
    { cat:"mindfulness", text:"You don't need silence around you to find quiet within you.", author:"Unknown" },
    { cat:"mindfulness", text:"Watch the water instead of the storm in your head, for just a minute.", author:"Unknown" },
    { cat:"mindfulness", text:"Your worth was never measured by how full your calendar looked today.", author:"Unknown" },
    { cat:"mindfulness", text:"There's a gentler version of today available. Start there.", author:"Unknown" },
    { cat:"mindfulness", text:"Let your exhale be longer than your inhale, and watch the day loosen its grip.", author:"Unknown" },
    { cat:"mindfulness", text:"Notice what you can hear right now that you usually tune out.", author:"Unknown" },
    { cat:"mindfulness", text:"Peace is often just permission \u2014 permission to stop performing for a while.", author:"Unknown" },
    { cat:"mindfulness", text:"A single deep breath can undo an hour of shallow ones.", author:"Unknown" },
    { cat:"mindfulness", text:"You are allowed to enjoy something without documenting it for anyone else.", author:"Unknown" },
    { cat:"mindfulness", text:"The present moment doesn't need your approval to be enough.", author:"Unknown" },
    { cat:"mindfulness", text:"Come back to your breath. It was never the one that left.", author:"Unknown" },

    // ---- Life Lessons & Resilience ----
    { cat:"resilience", text:"The break in the branch is where the tree learns to grow around the wind.", author:"Unknown" },
    { cat:"resilience", text:"You are allowed to rebuild slower than you fell apart.", author:"Unknown" },
    { cat:"resilience", text:"Every scar on you is a place that healed. Let that be the whole story sometimes.", author:"Unknown" },
    { cat:"resilience", text:"The comeback rarely looks like the plan. It just looks like you, still moving.", author:"Unknown" },
    { cat:"resilience", text:"Hard seasons don't ask permission, but they don't get to stay forever either.", author:"Unknown" },
    { cat:"resilience", text:"You survived every one of your worst days so far. That's a perfect record.", author:"Unknown" },
    { cat:"resilience", text:"Some lessons only teach you at the price you were willing to pay.", author:"Unknown" },
    { cat:"resilience", text:"Not every ending is a loss. Some are just doors closing on their own time.", author:"Unknown" },
    { cat:"resilience", text:"The version of you that broke is not the version that has to stay broken.", author:"Unknown" },
    { cat:"resilience", text:"Grief and gratitude have shared a room in you before, and both survived it.", author:"Unknown" },
    { cat:"resilience", text:"You don't need to understand the storm to learn how to still walk through it.", author:"Unknown" },
    { cat:"resilience", text:"The setback is often just the story rearranging itself before the better part.", author:"Unknown" },
    { cat:"resilience", text:"What almost destroyed you also taught you exactly what you can carry.", author:"Unknown" },
    { cat:"resilience", text:"Nobody arrives at strength without first surviving something that required it.", author:"Unknown" },
    { cat:"resilience", text:"The wound closes slower than the world expects, and that's allowed.", author:"Unknown" },
    { cat:"resilience", text:"You are not the worst thing that ever happened to you.", author:"Unknown" },
    { cat:"resilience", text:"Every fall teaches the ground a little better than the last one did.", author:"Unknown" },
    { cat:"resilience", text:"Some chapters end so the next one has room to actually begin.", author:"Unknown" },
    { cat:"resilience", text:"Resilience isn't never breaking. It's learning exactly how to come back together.", author:"Unknown" },
    { cat:"resilience", text:"The hardest year of your life is also, quietly, teaching you the most.", author:"Unknown" },
    { cat:"resilience", text:"You don't owe anyone a performance of being okay before you actually are.", author:"Unknown" },
    { cat:"resilience", text:"What you survived is proof, not something you're supposed to forget.", author:"Unknown" },
    { cat:"resilience", text:"The road that felt like punishment sometimes turns out to have been the shortcut.", author:"Unknown" },
    { cat:"resilience", text:"Healing isn't linear, but it is, eventually, real.", author:"Unknown" },
    { cat:"resilience", text:"You get to decide what the hard thing meant, not just what it cost you.", author:"Unknown" },
    { cat:"resilience", text:"Every person you admire has a chapter they don't put in the highlight reel.", author:"Unknown" },
    { cat:"resilience", text:"Sometimes the bravest thing is simply getting up and making the coffee.", author:"Unknown" },
    { cat:"resilience", text:"The person who hurt you doesn't get to write how the rest of your story goes.", author:"Unknown" },
    { cat:"resilience", text:"What breaks you once can still, eventually, become what makes you unshakeable.", author:"Unknown" },
    { cat:"resilience", text:"You are allowed to grieve the plan that didn't happen.", author:"Unknown" },
    { cat:"resilience", text:"Scar tissue often ends up stronger than the skin it replaced.", author:"Unknown" },
    { cat:"resilience", text:"Some things only make sense from far enough down the road to look back.", author:"Unknown" },
    { cat:"resilience", text:"Loss teaches gratitude a language nothing else can.", author:"Unknown" },
    { cat:"resilience", text:"You don't have to be unbothered. You just have to keep going anyway.", author:"Unknown" },
    { cat:"resilience", text:"The chapter where you fall apart is rarely the chapter where the story ends.", author:"Unknown" },
    { cat:"resilience", text:"Every why is this happening to me eventually becomes a so that's why.", author:"Unknown" },
    { cat:"resilience", text:"Time doesn't erase the hard thing. It just teaches you how to carry it differently.", author:"Unknown" },
    { cat:"resilience", text:"You are the only person who has survived one hundred percent of your worst days.", author:"Unknown" },
    { cat:"resilience", text:"The bruise fades, but the lesson, if you let it, stays useful.", author:"Unknown" },
    { cat:"resilience", text:"Sometimes strength looks like asking for help, not refusing it.", author:"Unknown" },
    { cat:"resilience", text:"What doesn't break you doesn't always make you stronger right away \u2014 sometimes it just makes you tired, and that's fine too.", author:"Unknown" },
    { cat:"resilience", text:"The map you had for your life was never going to survive contact with real life.", author:"Unknown" },
    { cat:"resilience", text:"You can rebuild without pretending the collapse never happened.", author:"Unknown" },
    { cat:"resilience", text:"Some people only meet the strongest version of you because of what broke the old one.", author:"Unknown" },
    { cat:"resilience", text:"The lesson doesn't stop repeating until you finally learn it, so learn it.", author:"Unknown" },
    { cat:"resilience", text:"You are allowed to be proud of surviving something nobody else saw.", author:"Unknown" },
    { cat:"resilience", text:"Every low point eventually becomes a story you tell with a steadier voice.", author:"Unknown" },
    { cat:"resilience", text:"The thing that humbled you also, eventually, made room for something better.", author:"Unknown" },
    { cat:"resilience", text:"You don't need to have it all figured out to still be doing fine.", author:"Unknown" },
    { cat:"resilience", text:"The hardest part of the climb is usually right before the view.", author:"Unknown" },

    // ---- Faith & Spiritual Inspiration ----
    { cat:"faith", text:"Even the longest night keeps a promise: the sun was never actually cancelled.", author:"Unknown" },
    { cat:"faith", text:"Pray like the outcome is already loved, not just hoped for.", author:"Unknown" },
    { cat:"faith", text:"Faith is standing still long enough to hear that you were never walking alone.", author:"Unknown" },
    { cat:"faith", text:"Gratitude is the shortest prayer that still reaches all the way up.", author:"Unknown" },
    { cat:"faith", text:"What looks like delay from where you're kneeling often looks like timing from above.", author:"Unknown" },
    { cat:"faith", text:"Trust the season you're in, even the one that doesn't look like an answer yet.", author:"Unknown" },
    { cat:"faith", text:"Some prayers are answered in the waiting, not just in the arriving.", author:"Unknown" },
    { cat:"faith", text:"Faith doesn't remove the storm. It gives you Someone to hold onto inside it.", author:"Unknown" },
    { cat:"faith", text:"The quiet you feel after prayer is often the answer, arriving before the words do.", author:"Unknown" },
    { cat:"faith", text:"You were carried through years you don't even remember being strong enough for.", author:"Unknown" },
    { cat:"faith", text:"Every sunrise is a small, repeated proof that new beginnings are still being offered.", author:"Unknown" },
    { cat:"faith", text:"Surrender isn't giving up. It's finally putting the weight down where it belongs.", author:"Unknown" },
    { cat:"faith", text:"The mountain moves in its own time, but faith keeps you climbing anyway.", author:"Unknown" },
    { cat:"faith", text:"What you call a coincidence, a grateful heart calls a small mercy.", author:"Unknown" },
    { cat:"faith", text:"Peace isn't the absence of a storm. It's a presence standing with you in the middle of it.", author:"Unknown" },
    { cat:"faith", text:"You don't need the whole staircase, just enough light for the next step.", author:"Unknown" },
    { cat:"faith", text:"Some blessings arrive disguised as the very thing you prayed to be spared.", author:"Unknown" },
    { cat:"faith", text:"The heart that keeps hoping is already halfway to the answer.", author:"Unknown" },
    { cat:"faith", text:"Faith is the quiet decision to keep walking before you can see the road.", author:"Unknown" },
    { cat:"faith", text:"Gratitude turns what you have into enough, and enough into abundance.", author:"Unknown" },
    { cat:"faith", text:"Every closed door has, somewhere behind it, a hallway you hadn't noticed yet.", author:"Unknown" },
    { cat:"faith", text:"The prayer that feels unanswered may simply be answered not yet.", author:"Unknown" },
    { cat:"faith", text:"You were never meant to carry the whole week alone. Set some of it down.", author:"Unknown" },
    { cat:"faith", text:"Grace doesn't ask if you deserve it. It just keeps arriving anyway.", author:"Unknown" },
    { cat:"faith", text:"The same hands that made the mountains know exactly how to hold you.", author:"Unknown" },
    { cat:"faith", text:"Worship is just gratitude that finally found its voice.", author:"Unknown" },
    { cat:"faith", text:"What feels like silence from heaven is sometimes just heaven's patience.", author:"Unknown" },
    { cat:"faith", text:"Faith is choosing to trust the gardener even during the season that looks bare.", author:"Unknown" },
    { cat:"faith", text:"The storm doesn't ask permission, but neither does the calm that follows it.", author:"Unknown" },
    { cat:"faith", text:"You don't have to understand the plan to still trust the One who holds it.", author:"Unknown" },
    { cat:"faith", text:"Every answered prayer was once, for a while, just a quiet act of waiting.", author:"Unknown" },
    { cat:"faith", text:"The light doesn't argue with the darkness. It simply keeps showing up.", author:"Unknown" },
    { cat:"faith", text:"Faith is remembering, on the hard days, everything that already worked out.", author:"Unknown" },
    { cat:"faith", text:"There's a kind of rest that only comes from finally letting go of the wheel.", author:"Unknown" },
    { cat:"faith", text:"What you surrender in prayer, you don't have to keep carrying in worry.", author:"Unknown" },
    { cat:"faith", text:"The desert season is still, somehow, part of the road to somewhere green.", author:"Unknown" },
    { cat:"faith", text:"Hope is a quiet kind of faith that hasn't given up its voice yet.", author:"Unknown" },
    { cat:"faith", text:"Some seeds take years underground before anyone sees what they were becoming.", author:"Unknown" },
    { cat:"faith", text:"You are held even on the days you forget to notice it.", author:"Unknown" },
    { cat:"faith", text:"Faith doesn't promise an easy road. It promises you won't walk it alone.", author:"Unknown" },
    { cat:"faith", text:"The answer that feels late by your calendar is often right on time by another one.", author:"Unknown" },
    { cat:"faith", text:"Every mercy you almost missed is still, quietly, a mercy.", author:"Unknown" },
    { cat:"faith", text:"Trust doesn't require certainty. It just requires enough faith to take the next step.", author:"Unknown" },
    { cat:"faith", text:"The same storm that scares you is also, somehow, still under command.", author:"Unknown" },
    { cat:"faith", text:"Gratitude in the hard season is the boldest kind of faith there is.", author:"Unknown" },
    { cat:"faith", text:"You don't need a perfect prayer, just an honest one.", author:"Unknown" },
    { cat:"faith", text:"What was meant for you will find you, even on the long way round.", author:"Unknown" },
    { cat:"faith", text:"Some of the heaviest seasons are quietly building the deepest roots.", author:"Unknown" },
    { cat:"faith", text:"Faith is trusting the sunrise before you can see a single trace of it.", author:"Unknown" },
    { cat:"faith", text:"Peace, real peace, was never about the noise around you going quiet first.", author:"Unknown" },

    // ---- Discipline & Growth Mindset ----
    { cat:"discipline", text:"Motivation gets you to start. Discipline is the only one that shows up on day forty.", author:"Unknown" },
    { cat:"discipline", text:"You don't rise to your goals, you fall to the level of your habits \u2014 so build better ones.", author:"Unknown" },
    { cat:"discipline", text:"Discomfort is just growth, wearing a disguise it hopes you won't recognize.", author:"Unknown" },
    { cat:"discipline", text:"Consistency is a quiet kind of courage nobody applauds until year three.", author:"Unknown" },
    { cat:"discipline", text:"The version of you that you're chasing is built one uncomfortable rep at a time.", author:"Unknown" },
    { cat:"discipline", text:"Discipline is choosing what you want most over what you want right now.", author:"Unknown" },
    { cat:"discipline", text:"The habit you skip once is easier to skip again. Guard the streak.", author:"Unknown" },
    { cat:"discipline", text:"Growth lives exactly one uncomfortable conversation past your comfort zone.", author:"Unknown" },
    { cat:"discipline", text:"You don't need more willpower, you need a system that doesn't require any.", author:"Unknown" },
    { cat:"discipline", text:"The days you don't feel like it are the days that actually count.", author:"Unknown" },
    { cat:"discipline", text:"Small, boring, repeated actions outperform big, exciting, occasional ones every single time.", author:"Unknown" },
    { cat:"discipline", text:"Discipline is just self-respect, practiced on days you don't feel like it.", author:"Unknown" },
    { cat:"discipline", text:"The person you'll be in five years is being built by today's small choices.", author:"Unknown" },
    { cat:"discipline", text:"Every skill you admire in someone else started as a version they were bad at.", author:"Unknown" },
    { cat:"discipline", text:"You can't shortcut mastery, only the excuses that keep you from starting it.", author:"Unknown" },
    { cat:"discipline", text:"Show up on the days that don't matter, and the days that do will take care of themselves.", author:"Unknown" },
    { cat:"discipline", text:"The gap between who you are and who you want to be is called practice.", author:"Unknown" },
    { cat:"discipline", text:"Discipline doesn't feel like freedom until you notice everyone without it is trapped.", author:"Unknown" },
    { cat:"discipline", text:"You are one decision away from a completely different trajectory. Choose it today.", author:"Unknown" },
    { cat:"discipline", text:"Growth is uncomfortable by design. If it felt easy, everyone would already have it.", author:"Unknown" },
    { cat:"discipline", text:"The habit tracker doesn't lie, even on the days you'd rather it did.", author:"Unknown" },
    { cat:"discipline", text:"Excellence isn't a single act. It's the compounding interest of small ones.", author:"Unknown" },
    { cat:"discipline", text:"What feels like a plateau is often just the ground floor of the next level.", author:"Unknown" },
    { cat:"discipline", text:"The best version of you doesn't arrive. You build them, one rep at a time.", author:"Unknown" },
    { cat:"discipline", text:"Discipline is remembering what you want most when you're distracted by what you want now.", author:"Unknown" },
    { cat:"discipline", text:"You will never feel fully ready. Start before you do.", author:"Unknown" },
    { cat:"discipline", text:"Progress hides inside repetition, not inside the rare burst of inspiration.", author:"Unknown" },
    { cat:"discipline", text:"Every master was once a beginner who simply refused to quit early.", author:"Unknown" },
    { cat:"discipline", text:"The early alarm doesn't care how you feel about it. Neither does your future.", author:"Unknown" },
    { cat:"discipline", text:"Discipline is the bridge between the goal you have and the life you actually want.", author:"Unknown" },
    { cat:"discipline", text:"You don't need to be motivated every day, just committed on the days you're not.", author:"Unknown" },
    { cat:"discipline", text:"The muscle you don't use, the mind included, quietly starts to disappear.", author:"Unknown" },
    { cat:"discipline", text:"Growth mindset isn't I can't do this. It's choosing the word yet on purpose.", author:"Unknown" },
    { cat:"discipline", text:"Comfort and growth have never once shared the same address.", author:"Unknown" },
    { cat:"discipline", text:"The habit is the vote. Every day you cast one for who you're becoming.", author:"Unknown" },
    { cat:"discipline", text:"Discipline isn't punishment. It's the fastest form of self-love there is.", author:"Unknown" },
    { cat:"discipline", text:"You are always either building a habit or breaking one. There's no neutral.", author:"Unknown" },
    { cat:"discipline", text:"The plateau ends the same way it always has: one more rep than yesterday.", author:"Unknown" },
    { cat:"discipline", text:"What looks like talent from the outside is usually just consistency in disguise.", author:"Unknown" },
    { cat:"discipline", text:"Start where you are, with what you have. That has always been enough.", author:"Unknown" },
    { cat:"discipline", text:"Discipline is a promise you keep to yourself when nobody's checking.", author:"Unknown" },
    { cat:"discipline", text:"The mind grows the same way the body does: under a little resistance.", author:"Unknown" },
    { cat:"discipline", text:"You don't have to love the process to still show up for it.", author:"Unknown" },
    { cat:"discipline", text:"Every rep counts even when no one's watching. Especially then.", author:"Unknown" },
    { cat:"discipline", text:"Growth is slow enough to be invisible daily and obvious yearly.", author:"Unknown" },
    { cat:"discipline", text:"The gap closes not with intensity, but with the boring math of showing up.", author:"Unknown" },
    { cat:"discipline", text:"Discomfort tolerated on purpose today becomes discomfort you barely notice next year.", author:"Unknown" },
    { cat:"discipline", text:"The identity shift happens quietly, one small kept promise at a time.", author:"Unknown" },
    { cat:"discipline", text:"You are not behind schedule. You are exactly on the schedule discipline built for you.", author:"Unknown" },
    { cat:"discipline", text:"The finish line rewards the version of you that didn't stop at mile eighteen.", author:"Unknown" },

    // ---- Coding & Tech Humor / Wisdom ----
    { cat:"code", text:"It works on my machine is not a deployment strategy, it's a confession.", author:"Anonymous Developer" },
    { cat:"code", text:"There are two hard problems in software: cache invalidation, naming things, and off-by-one errors.", author:"Anonymous Developer" },
    { cat:"code", text:"Comment your code like the next person to read it is a tired version of you at 2am.", author:"Anonymous Developer" },
    { cat:"code", text:"TODO: fix this properly \u2014 a promise made by every developer who ever shipped on Friday.", author:"Anonymous Developer" },
    { cat:"code", text:"A clean git history is a love letter to the teammate debugging this in six months.", author:"Anonymous Developer" },
    { cat:"code", text:"The bug is always in the last place you look, because you stop looking once you find it.", author:"Anonymous Developer" },
    { cat:"code", text:"Semicolons: the difference between a syntax error and why is production down.", author:"Anonymous Developer" },
    { cat:"code", text:"Nothing fixes a bug faster than opening a support ticket to complain about it.", author:"Anonymous Developer" },
    { cat:"code", text:"There's no code so bad that a confident comment can't make it worse.", author:"Anonymous Developer" },
    { cat:"code", text:"Rubber duck debugging works because the duck, unlike you, has infinite patience.", author:"Anonymous Developer" },
    { cat:"code", text:"The production outage always happens exactly one deploy after this should be a quick fix.", author:"Anonymous Developer" },
    { cat:"code", text:"Naming variables is ten percent skill and ninety percent negotiating with your own past decisions.", author:"Anonymous Developer" },
    { cat:"code", text:"Ninety nine little bugs in the code, take one down, patch it around, one hundred twenty seven little bugs in the code.", author:"Anonymous Developer" },
    { cat:"code", text:"Legacy code is just code you didn't write, running in production, forever.", author:"Anonymous Developer" },
    { cat:"code", text:"The stack trace lies about where the bug is roughly sixty percent of the time.", author:"Anonymous Developer" },
    { cat:"code", text:"Real courage is deploying on a Friday and going home anyway.", author:"Anonymous Developer" },
    { cat:"code", text:"Every quick fix has, at minimum, one more meeting hiding inside it.", author:"Anonymous Developer" },
    { cat:"code", text:"The best documentation is the code, and the code is usually lying too.", author:"Anonymous Developer" },
    { cat:"code", text:"If it compiles, ship it. If it doesn't, that's what tomorrow you is for.", author:"Anonymous Developer" },
    { cat:"code", text:"Merge conflicts are just two good ideas fighting over the same line of history.", author:"Anonymous Developer" },
    { cat:"code", text:"A senior developer is just a junior developer who has broken production enough times to be humble.", author:"Anonymous Developer" },
    { cat:"code", text:"The internet exists so developers can copy paste the same answer for two decades.", author:"Anonymous Developer" },
    { cat:"code", text:"Refactoring is the art of making code you don't understand slightly less scary.", author:"Anonymous Developer" },
    { cat:"code", text:"The most dangerous phrase in software is it's just a small change.", author:"Anonymous Developer" },
    { cat:"code", text:"Unit tests are notes to your future self that say I already checked this.", author:"Anonymous Developer" },
    { cat:"code", text:"Every framework promises simplicity and delivers a new category of complexity.", author:"Anonymous Developer" },
    { cat:"code", text:"The bug you can't reproduce is the one that will reproduce in front of your manager.", author:"Anonymous Developer" },
    { cat:"code", text:"Version control exists because final underscore final underscore v2 REALLY dot js was never going to scale.", author:"Anonymous Developer" },
    { cat:"code", text:"A codebase without tests is a codebase that only works by accident.", author:"Anonymous Developer" },
    { cat:"code", text:"The best error message tells you exactly what broke and roughly why you should care.", author:"Anonymous Developer" },
    { cat:"code", text:"There's a special kind of silence right after you push to main by mistake.", author:"Anonymous Developer" },
    { cat:"code", text:"Technical debt is just a loan you took out from your future self, with brutal interest.", author:"Anonymous Developer" },
    { cat:"code", text:"The demo works perfectly until the exact moment someone important is watching.", author:"Anonymous Developer" },
    { cat:"code", text:"Code review isn't an attack on you, it's a favor from someone who read it so production doesn't have to.", author:"Anonymous Developer" },
    { cat:"code", text:"Every this will only take five minutes secretly means see you next Tuesday.", author:"Anonymous Developer" },
    { cat:"code", text:"The fastest way to find a bug is to explain your code out loud to someone else.", author:"Anonymous Developer" },
    { cat:"code", text:"A good API is a promise kept quietly, release after release.", author:"Anonymous Developer" },
    { cat:"code", text:"Documentation ages the moment you stop maintaining it, and not one second later.", author:"Anonymous Developer" },
    { cat:"code", text:"There's no such thing as a small database migration on a Friday afternoon.", author:"Anonymous Developer" },
    { cat:"code", text:"Clean code is written for the human who reads it, not the machine that runs it.", author:"Anonymous Developer" },
    { cat:"code", text:"The bug was never in the code. It was in the assumption nobody wrote down.", author:"Anonymous Developer" },
    { cat:"code", text:"Every temporary workaround becomes permanent the moment it starts working.", author:"Anonymous Developer" },
    { cat:"code", text:"Undo is the closest thing developers have to a time machine, and it still has limits.", author:"Anonymous Developer" },
    { cat:"code", text:"The best debugging tool is still a fresh pair of eyes and a strong coffee.", author:"Anonymous Developer" },
    { cat:"code", text:"Software is never finished, only released and quietly, endlessly, patched.", author:"Anonymous Developer" },
    { cat:"code", text:"A single missing null check has ended more careers than bad architecture ever will.", author:"Anonymous Developer" },
    { cat:"code", text:"The compiler doesn't care about your intentions, only your syntax.", author:"Anonymous Developer" },
    { cat:"code", text:"Good abstractions hide complexity. Bad ones just relocate it somewhere worse.", author:"Anonymous Developer" },
    { cat:"code", text:"Every developer has, at least once, fixed a bug by adding a log line and never removing it.", author:"Anonymous Developer" },
    { cat:"code", text:"The best code is the code you never had to write, because the problem simply went away.", author:"Anonymous Developer" },

  ];

  /* ---------------------------------------------------------
     3. STATE + STORAGE
     --------------------------------------------------------- */
  const STORE_KEYS = {
    theme: "verse.theme",
    category: "verse.category",
    favorites: "verse.favorites",
  };

  const state = {
    category: localStorage.getItem(STORE_KEYS.category) || "all",
    theme: localStorage.getItem(STORE_KEYS.theme) || "dark",
    favorites: safeParse(localStorage.getItem(STORE_KEYS.favorites), []),
    pool: [],
    current: null,
    lastIndex: -1,
  };

  function safeParse(str, fallback) {
    try { const v = JSON.parse(str); return Array.isArray(v) ? v : fallback; }
    catch { return fallback; }
  }
  function persistFavorites() {
    localStorage.setItem(STORE_KEYS.favorites, JSON.stringify(state.favorites));
  }
  function quoteId(q) { return `${q.cat}::${q.author}::${q.text.slice(0, 24)}`; }

  /* ---------------------------------------------------------
     4. DOM REFS
     --------------------------------------------------------- */
  const $ = (sel) => document.querySelector(sel);
  const body = document.body;
  const pillTrack = $("#pillTrack");
  const quoteCard = $("#quoteCard");
  const quoteText = $("#quoteText");
  const quoteAuthor = $("#quoteAuthor");
  const quoteCatLabel = $("#quoteCatLabel");
  const nextBtn = $("#nextBtn");
  const favBtn = $("#favBtn");
  const copyBtn = $("#copyBtn");
  const shareBtn = $("#shareBtn");
  const themeBtn = $("#themeBtn");
  const favoritesBtn = $("#favoritesBtn");
  const closeDrawerBtn = $("#closeDrawerBtn");
  const drawer = $("#favDrawer");
  const drawerOverlay = $("#drawerOverlay");
  const favList = $("#favList");
  const favEmpty = $("#favEmpty");
  const favCount = $("#favCount");
  const toastEl = $("#toast");

  /* ---------------------------------------------------------
     5. RENDER: PILL BAR
     --------------------------------------------------------- */
  function renderPills() {
    pillTrack.innerHTML = "";
    CATEGORIES.forEach((c) => {
      const btn = document.createElement("button");
      btn.className = "pill";
      btn.type = "button";
      btn.role = "tab";
      btn.dataset.cat = c.id;
      btn.setAttribute("aria-selected", String(c.id === state.category));
      btn.innerHTML = `<span class="dot" style="background:${c.color}"></span>${c.label}`;
      btn.addEventListener("click", () => selectCategory(c.id));
      pillTrack.appendChild(btn);
    });
  }

  function selectCategory(id) {
    if (id === state.category) { nextQuote(true); return; }
    state.category = id;
    localStorage.setItem(STORE_KEYS.category, id);
    body.setAttribute("data-category", id);
    [...pillTrack.children].forEach((el) =>
      el.setAttribute("aria-selected", String(el.dataset.cat === id))
    );
    buildPool();
    nextQuote(true);
  }

  /* ---------------------------------------------------------
     6. QUOTE POOL + RENDER
     --------------------------------------------------------- */
  function buildPool() {
    state.pool = state.category === "all"
      ? QUOTES.slice()
      : QUOTES.filter((q) => q.cat === state.category);
  }

  function pickQuote() {
    if (state.pool.length === 1) return state.pool[0];
    let idx;
    do { idx = Math.floor(Math.random() * state.pool.length); }
    while (idx === state.lastIndex);
    state.lastIndex = idx;
    return state.pool[idx];
  }

  function catLabel(id) {
    return CATEGORIES.find((c) => c.id === id)?.label || id;
  }

  function renderQuote(q, animate) {
    state.current = q;
    const draw = () => {
      quoteText.textContent = q.text;
      quoteAuthor.textContent = q.author;
      quoteCatLabel.textContent = catLabel(q.cat);
      updateFavButton();
    };
    if (animate) {
      // Fade the text out, swap it while invisible, fade back in.
      // Plain transition + class toggle — no animation-restart tricks,
      // and the card itself never goes fully invisible.
      quoteCard.classList.add("is-swapping");
      window.setTimeout(() => {
        draw();
        quoteCard.classList.remove("is-swapping");
      }, 320);
    } else {
      // First paint only: play the entrance animation via its own class,
      // then remove it so it can never be re-triggered by a later
      // is-swapping toggle.
      draw();
      quoteCard.classList.add("is-entering");
      quoteCard.addEventListener(
        "animationend",
        () => quoteCard.classList.remove("is-entering"),
        { once: true }
      );
    }
  }

  function nextQuote(forceNew) {
    const q = pickQuote();
    renderQuote(q, true);
  }

  /* ---------------------------------------------------------
     7. FAVORITES
     --------------------------------------------------------- */
  function isFavorited(q) {
    return state.favorites.some((f) => quoteId(f) === quoteId(q));
  }
  function updateFavButton() {
    const active = state.current && isFavorited(state.current);
    favBtn.setAttribute("aria-pressed", String(!!active));
    favBtn.querySelector("span").textContent = active ? "Saved" : "Save";
    favCount.textContent = state.favorites.length;
    favCount.hidden = state.favorites.length === 0;
  }
  function toggleFavorite() {
    if (!state.current) return;
    const id = quoteId(state.current);
    const existingIdx = state.favorites.findIndex((f) => quoteId(f) === id);
    if (existingIdx > -1) {
      state.favorites.splice(existingIdx, 1);
      showToast("Removed from favorites");
    } else {
      state.favorites.unshift(state.current);
      showToast("Saved ♥");
    }
    persistFavorites();
    updateFavButton();
    renderFavList();
  }

  function renderFavList() {
    favList.querySelectorAll(".fav-item").forEach((el) => el.remove());
    favEmpty.hidden = state.favorites.length > 0;
    state.favorites.forEach((q) => {
      const item = document.createElement("div");
      item.className = "fav-item";
      item.innerHTML = `
        <p>"${escapeHtml(q.text)}"</p>
        <div class="fav-meta">
          <span class="fav-author">— ${escapeHtml(q.author)} · ${escapeHtml(catLabel(q.cat))}</span>
          <div class="fav-actions">
            <button type="button" data-action="copy" aria-label="Copy quote">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="8" y="8" width="13" height="13" rx="2"/><path d="M4 16V4a2 2 0 0 1 2-2h10"/></svg>
            </button>
            <button type="button" data-action="remove" aria-label="Remove from favorites">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6L6 18"/></svg>
            </button>
          </div>
        </div>`;
      item.querySelector('[data-action="copy"]').addEventListener("click", () => copyQuote(q));
      item.querySelector('[data-action="remove"]').addEventListener("click", () => {
        const id = quoteId(q);
        state.favorites = state.favorites.filter((f) => quoteId(f) !== id);
        persistFavorites();
        updateFavButton();
        renderFavList();
      });
      favList.appendChild(item);
    });
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, (m) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[m]));
  }

  /* ---------------------------------------------------------
     8. DRAWER
     --------------------------------------------------------- */
  function openDrawer() {
    renderFavList();
    drawer.classList.add("is-open");
    drawerOverlay.classList.add("is-open");
    drawer.removeAttribute("hidden");
  }
  function closeDrawer() {
    drawer.classList.remove("is-open");
    drawerOverlay.classList.remove("is-open");
  }

  /* ---------------------------------------------------------
     9. COPY + SHARE
     --------------------------------------------------------- */
  function formatQuote(q) {
    return `"${q.text}" — ${q.author}`;
  }

  async function copyQuote(q) {
    const text = formatQuote(q || state.current);
    try {
      await navigator.clipboard.writeText(text);
      showToast("Copied!");
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); showToast("Copied!"); }
      catch { showToast("Couldn't copy — try selecting manually"); }
      ta.remove();
    }
  }

  async function shareQuote() {
    if (!state.current) return;
    const text = formatQuote(state.current);
    if (navigator.share) {
      try {
        await navigator.share({ text, title: "Verse" });
      } catch {
        /* user cancelled — no-op */
      }
    } else {
      copyQuote(state.current);
      showToast("Share not supported here — copied instead");
    }
  }

  /* ---------------------------------------------------------
     10. THEME (light → dark → oled → light)
     --------------------------------------------------------- */
  const THEME_ORDER = ["dark", "light", "oled"];
  const THEME_COLOR = { dark: "#12141C", light: "#f4f2ec", oled: "#000000" };

  function applyTheme() {
    body.setAttribute("data-theme", state.theme);
    document.querySelector('meta[name="theme-color"]').setAttribute("content", THEME_COLOR[state.theme]);
    $(".theme-icon-sun").hidden = state.theme !== "light";
    $(".theme-icon-moon").hidden = state.theme !== "dark";
    $(".theme-icon-oled").hidden = state.theme !== "oled";
  }
  function cycleTheme() {
    const idx = THEME_ORDER.indexOf(state.theme);
    state.theme = THEME_ORDER[(idx + 1) % THEME_ORDER.length];
    localStorage.setItem(STORE_KEYS.theme, state.theme);
    applyTheme();
    showToast(state.theme === "dark" ? "Dark mode" : state.theme === "light" ? "Light mode" : "OLED mode");
  }

  /* ---------------------------------------------------------
     11. TOAST
     --------------------------------------------------------- */
  let toastTimer = null;
  function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toastEl.classList.remove("is-visible"), 1800);
  }

  /* ---------------------------------------------------------
     12. RIPPLE EFFECT (Next Verse button)
     --------------------------------------------------------- */
  function attachRipple(btn) {
    btn.addEventListener("pointerdown", (e) => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height);
      ripple.className = "ripple";
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      btn.appendChild(ripple);
      window.setTimeout(() => ripple.remove(), 650);
    });
  }

  /* ---------------------------------------------------------
     13. EVENT WIRING
     --------------------------------------------------------- */
  function init() {
    body.setAttribute("data-category", state.category);
    applyTheme();
    renderPills();
    buildPool();
    renderQuote(pickQuote(), false);
    renderFavList();
    updateFavButton();

    nextBtn.addEventListener("click", () => nextQuote(true));
    favBtn.addEventListener("click", toggleFavorite);
    copyBtn.addEventListener("click", () => copyQuote(state.current));
    shareBtn.addEventListener("click", shareQuote);
    themeBtn.addEventListener("click", cycleTheme);
    favoritesBtn.addEventListener("click", openDrawer);
    closeDrawerBtn.addEventListener("click", closeDrawer);
    drawerOverlay.addEventListener("click", closeDrawer);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeDrawer(); });
    attachRipple(nextBtn);

    // simple swipe-left/right on the card = next quote
    let touchStartX = null;
    quoteCard.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
    quoteCard.addEventListener("touchend", (e) => {
      if (touchStartX === null) return;
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 60) nextQuote(true);
      touchStartX = null;
    }, { passive: true });
  }

  document.addEventListener("DOMContentLoaded", init);

  /* ---------------------------------------------------------
     14. SERVICE WORKER (offline-ready PWA)
     --------------------------------------------------------- */
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {
        /* offline support degrades gracefully if registration fails */
      });
    });
  }
})();
