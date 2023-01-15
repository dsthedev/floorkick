# Floorkick Changelog

## 2023.01.14

- gracefully handle "unauthorized" access to notes by others
- migrate/update db schema to use authorId instead of userId

- adds notes
- ties userid to note on creation
- only reads notes where userid matches
- redirect on read if userid doesnt match
- minor cleanup

- updates gitignore for seeds
- tests initial db seed migration of basic users
- updates db schema
- initialize dbauth + ui setup
- sample toggle background button component (archived)
- new loginoroutlink component
- new userdetails component for quick view of currently logged in user info
- minor css updates
- prep for live push test

- initial commit
- add css reset
- starts devnotes & changelog
- adds optimized v of sweet redwood bg svgs
- adds home page w/ default layout
- adds example live toggle button for bg
- adds css reset w/ some clean defaults + fonts
