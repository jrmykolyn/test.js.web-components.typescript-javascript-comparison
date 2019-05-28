interface Window {
  [key: string]: any;
}

declare var window: Window;

window.__COMPONENTS__ = window.__COMPONENTS__ || {};
window.__COMPONENTS__.SimpleComponent = require('./simple');
window.__COMPONENTS__.ComplexComponent = require('./complex');
