# Every Minute on the Minute (EMOM) Workout Timer

A simple EMOM timer built with React + Vite. This timer is useful for interval training workouts.

## View Project
[View the EMOM timer in your browser](https://saemomtimerdev.z13.web.core.windows.net/)

## Getting Started

1. Install all dependencies with `npm install`
2. Run the development server with `npm run dev`

# Attributes

-   Timer sounds provided by [transcendedlifting from Pixabay](https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=125125)
-   Voices provided by [Micmonster](https://micmonster.com/)
-   Animated timer ring from [CSS Tricks](https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/)

# Infrastructure

-   Resource Group
-   Storage Account

# Creating A Service Principal for Deployments

```sh
spName=<your-sp-name>
rgName=rg-emomtimer-dev
subscriptionId=<your-subscription-id>
az ad sp create-for-rbac --name $spName --role contributor  --scopes /subscriptions/$subscriptionId/resourceGroups/$rgName --sdk-auth
```
