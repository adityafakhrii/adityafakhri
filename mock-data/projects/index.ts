import siacta from "./siacta"
import medfluffy from "./medfluffy"
import proquoteai from "./proquoteai"
import patunganyuk from "./patunganyuk"
import restoranku from "./restoranku"
import ramadhanjs from "./ramadhanjs"
import mentoringLanding from "./mentoring-landing"
import laravelUpiTraining from "./laravel-upi-training"
import mangroveKedatim from "./mangrove-kedatim"
import desaCisontrol from "./desa-cisontrol"
import newyearCountdown from "./newyear-countdown"
import sushiWebApp from "./sushi-webapp"
import storyApp from "./story-app"
import laundryAppDirtless from "./laundry-app-dirtless"
import smartClinicUi from "./smart-clinic-ui"
import sibiAppUiUx from "./sibi-app-ui-ux"
import lavafaCo from "./lavafa-co"
import laravelMastery from "./laravel-mastery"

const projects = {
  "siacta": siacta,
  "medfluffy": medfluffy,
  "proquoteai": proquoteai,
  "patunganyuk": patunganyuk,
  "restoranku": restoranku,
  "ramadhanjs": ramadhanjs,
  "mentoring-landing": mentoringLanding,
  "laravel-upi-training": laravelUpiTraining,
  "mangrove-kedatim": mangroveKedatim,
  "desa-cisontrol": desaCisontrol,
  "newyear-countdown": newyearCountdown,
  "sushi-webapp": sushiWebApp,
  "story-app": storyApp,
  "laundry-app-dirtless": laundryAppDirtless,
  "smart-clinic-ui": smartClinicUi,
  "sibi-app-ui-ux": sibiAppUiUx,
  "lavafa-co": lavafaCo,
  "laravel-mastery": laravelMastery,
} as const

export type ProjectId = keyof typeof projects
export default projects