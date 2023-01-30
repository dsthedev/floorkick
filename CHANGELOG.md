# Floorkick Changelog

## 2023.01.29

- added profile page
- testing geolocation & ip tools
  - use geolocation npm package for latlong, ipapi for ip/else
- adds basic dropdown menu with toggle state
- moves "new \_\_\_\_" button between breadcrumbs and new dropmenu

## 2023.01.26

- adds print friendly page for rates w/ 2 columns

## 2023.01.25

- big reset to only user + reset
- clever solution to searching all fields on search results by concatgi

## 2023.01.19

- added a simple realtime filter on results for rates (material only for now)

- push v1!
- adds realms for addresses (wip)
- adds servicerate from before
- big db schema update + new migrations
- major design swap (foundation) and cleanup
- major component updates to hide/manage fields
- ownership by users of notes/realms/rates all work properly now...
- move utility function components to `fn/`
- new calculator page
- changes how layouts are used in case of `rw d scaffold` use
- probably other stuff im missing here, went on a streak today

## 2023.01.18

- adds v1 of Place model to manage addresses

## 2023.01.16

- add privacy & sandbox pages
- add sample calculator component for roll length based on roll with and total yards
- starts using roles to authorize sets of pages (developer only for editing users)

## 2023.01.15

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

## 2023.01.14

- initial commit
- add css reset
- starts devnotes & changelog
- adds optimized v of sweet redwood bg svgs
- adds home page w/ default layout
- adds example live toggle button for bg
- adds css reset w/ some clean defaults + fonts
