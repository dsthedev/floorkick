# Developer Notes

STOP LOOKING AT CSS/DESIGN OPTIONS, FOCUS ON APP FEATURES!!!

- Phase I:  How quickly can I get a working user system up and running?
  - Redwood dbAuth
  - Remote hosted postgres database
  - Netlify app hosting
- Phase II: How can I tie a low-stakes object (i.i notes) to a user w/ crud?
  - Note db object w/ title and body, c/uat
- Phase III: How difficult would it be to re-implement service rates, tied to user?

So much more to implement, but this time around I want to slow it down and really focus on tight engineering of each feature (now that better db hosting is free to experiment).

CACHING!  Seems important to understand how this can be leveraged for most of app to save on db usage and general performance.

Invoices are the most important feature, but they rely on users, and will potentially draw from service rates.

## Phase I

- Phase I:  How quickly can I get a working user system up and running?
  - Redwood dbAuth
  - Remote hosted postgres database
  - Netlify app hosting
