# freeCodeCamp JavaScript Certification

**[View my certificate on freeCodeCamp](https://www.freecodecamp.org/certification/ilyas-elghoulti/javascript-v9)**

This repository brings together the five projects I built for freeCodeCamp’s JavaScript Certification. They cover live previews, keyboard events, vote counting, account transactions, and working with data from an API.

## Certification projects

### Markdown to HTML Converter

I built an editor that shows both the generated HTML and a formatted preview as you type. I used regular expressions to recognize Markdown syntax, so typing `**hello**` produces a `<strong>` element in the output.

### Drum Machine

I built a drum machine you can play by clicking a pad or pressing its matching key. Each input triggers an audio clip and updates the display with the sound’s name.

### Voting System

I used a JavaScript `Map` to pair each poll option with a `Set` of voter IDs. Each set keeps IDs unique, so voting for the same option twice leaves its count unchanged.

### Bank Account Management Program

I wrote a `BankAccount` class that handles deposits and withdrawals and keeps a transaction history. Its methods check each amount before changing the balance, including whether the account has enough money for a withdrawal.

### Weather App

I built an app that fetches weather data when someone selects a city. It reads the API response and displays the temperature, weather conditions, and wind speed for that location.
