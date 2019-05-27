const Simple = require('./simple');

const template = document.createElement('template');
template.innerHTML = `
  <div>
    <my-simple-component id="confirm">
      <span slot="content">Confirm</span>
    </my-simple-component>
    <my-simple-component id="deny">
      <span slot="content">Deny</span>
    </my-simple-component>
  </div>
`;

class Complex extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.refs = this.refs || {};
    this.refs.confirm = this.root.querySelector('#confirm');
    this.refs.deny = this.root.querySelector('#deny');

    this.refs.confirm.addEventListener('click', () => {
      console.log('__ CONFIRMED');
    });

    this.refs.deny.addEventListener('click', () => {
      console.log('__ DENIED');
    });
  }
}

module.exports = Complex;
