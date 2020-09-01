import * as isActive from './activityFns.js'
import * as singleSpa from 'single-spa'

singleSpa.registerApplication('navbar', () => SystemJS.import('@portal/navbar'), isActive.navbar)
singleSpa.registerApplication('people', () => SystemJS.import('@portal/people'), ()=>isActive.showPageDiv("people"))
singleSpa.registerApplication('people2', () => SystemJS.import('@portal/people2'), ()=>isActive.showPageDiv("people2"))
singleSpa.registerApplication('planets', () => SystemJS.import('@portal/planets'), ()=>isActive.showPageDiv("planets"))

singleSpa.start()
