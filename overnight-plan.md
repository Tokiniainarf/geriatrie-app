# GeriatrieApp Overnight Build Plan
## Session: 2026-06-26 → 2026-06-27 (autonomous while user sleeps)

### Current state: v50
- 20 chapters, 156+ flashcards, 15 annales, quiz, dashboard, search, BrainFeed, HAS
- BrainFeed: square cards, basic flip, needs 9:16 TikTok-style
- 7/20 chapter images generated (ch1-ch7)

### Wave 1: BrainFeed 9:16 TikTok Redesign (MAIN SESSION)
- Full-screen 9:16 vertical cards
- CSS scroll-snap for smooth swiping
- Mixed content types: flashcard, mini-cas, quiz 10s, memo, reco HAS
- Animated transitions (slide up/down)
- Gamification: streak counter, combo multiplier, daily challenge
- Dark background with glowing cards (like TikTok/Reels)
- Touch gestures: swipe up = know, swipe down = don't know, tap = flip
- Progress indicators, streak fire animation

### Wave 2: Content Expansion (3 PARALLEL SUBAGENTS)
- SA1: annales → 40+ EVC cases (all chapters covered)
- SA2: has-reco → 30+ official protocols
- SA3: flashcards gaps → fill missing chapters

### Wave 3: Polish & Features
- Micro-animations on all interactions
- Haptic feedback simulation (CSS)
- Sound effects toggle
- Loading skeleton screens
- Empty state designs

### Wave 4: Verify & Push
- Syntax check all files
- Visual audit via vision_analyze
- Git commit + push

### Cron: check every 30min for issues
