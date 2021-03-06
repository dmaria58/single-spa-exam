import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import { property } from 'lodash'
import setPublicPath from './set-public-path.js'
//const E=request();
const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  loadRootComponent: () => import(/* webpackChunkName: "people-app" */'./people-page/people-page.component2.js').then(property('default')),
  //loadRootComponent:()=>{import('@portal/SurfacePool').then(property('default'))},
  domElementGetter,
})

export const bootstrap = [
  () => {
    return setPublicPath()
  },
  reactLifecycles.bootstrap,
]

export const mount = [
  reactLifecycles.mount,
]

export const unmount = [
  reactLifecycles.unmount,
]

export const unload = [
  reactLifecycles.unload,
]

function domElementGetter() {
  let el = document.getElementById("people2");
  if (!el) {
    el = document.createElement('div');
    el.id = 'people2';
    document.body.appendChild(el);
  }
  el.className='right_main';
  return el;
}
