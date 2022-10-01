# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.1] - Unreleased
## [Added]
- eslint rules
- This changelog file!

## [0.2.0] - 10/1/2022 12:56am
### [Added]
- Scale slider
- Settings are now inside a menu
- Game now shows team record
## [Fixed]
- Updated CSS casing to remove console error

## [0.1.2] - 9/26/2022 9:23pm
### [Added]
- Game now shows team name
- Games auto refresh at set interval
- Loading spinner on loading screen
- Team names and score will show bold if winner of game
### [Fixed]
- App now remembers dark mode preference properly

## [0.1.1] - 9/26/2022 1:59am
### [Changed]
- Disabled test mode

## [0.1.0] - 9/26/2022 1:56am
### [Added]
- All NFL games for the week are displayed
    - Games are sorted by is live and then date (newest-oldest)
- Games display team logos, score, down information and indicate which team has possession of the ball
- *If Live* Games will show the current game clock time and quarter
- *If Pre Game* Games will show date and time for kickoff
- *If Post Game* Games will show 'Final'
- Game card will turn red when any team is in the [red zone](https://en.wikipedia.org/wiki/Red_zone_(gridiron_football))
- Dark mode toggle