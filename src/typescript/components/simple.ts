(() => {
  const template = document.createElement('template');
  template.innerHTML = `
  <button>
    <slot name="content">Default Content</slot>
  </button>
`;

  class SimpleComponent extends HTMLElement {
    root: any;

    constructor() {
      super();
      this.root = this.attachShadow({ mode: 'open' });
      this.root.appendChild(template.content.cloneNode(true));
    }
  }

  module.exports = SimpleComponent;
})();
