# Akinator Plugin for MulmoChat

An Akinator-style guessing game plugin where AI asks yes/no questions to guess what you're thinking of.

## Game Overview

Akinator is a classic guessing game where:

1. **You think of something** - Choose a character, person, animal, object, or place
2. **AI asks questions** - Answer with yes/no responses
3. **AI makes a guess** - Based on your answers, AI tries to guess what you're thinking

The fewer questions needed to guess correctly, the higher your score!

## Categories

- **Character** - Fictional characters (anime, manga, games, movies, etc.)
- **Person** - Real people (celebrities, historical figures, etc.)
- **Animal** - Animals of all kinds
- **Object** - Things and items
- **Place** - Locations and landmarks

## Answer Options

When AI asks a question, respond with:

| Answer | Use when |
|--------|----------|
| Yes | Definitely true |
| No | Definitely false |
| Probably Yes | Likely true, but not certain |
| Probably No | Likely false, but not certain |
| Unknown | You don't know the answer |

## How to Play

1. Start the game by typing "Let's play Akinator" or similar
2. Tell AI what category you're thinking of (or let AI suggest one)
3. Think of something in that category
4. Answer AI's questions using the buttons
5. When AI makes a guess:
   - Click "Correct!" if AI guessed right
   - Click "Wrong" and enter the correct answer if AI was wrong
6. Play again!

## Quick Start

```bash
# Install dependencies
yarn install

# Start development server
yarn dev          # Vue demo
yarn dev:react    # React demo
```

Open http://localhost:5173 to play.

## Integration with MulmoChat

```bash
# Install the plugin
yarn add guichat-plugin-akinator
```

```typescript
// Import in your app
import AkinatorPlugin from "guichat-plugin-akinator/vue";
// or
import AkinatorPlugin from "guichat-plugin-akinator/react";
```

## Commands

```bash
yarn dev          # Start Vue demo
yarn dev:react    # Start React demo
yarn build        # Build for production
yarn typecheck    # Type check
yarn lint         # Lint code
```

## License

MIT
