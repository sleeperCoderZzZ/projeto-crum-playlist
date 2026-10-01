class MainDefault extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  } 

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          width: 100%;
          background: #5a6525
        }
      </style>
      <main>
        <slot></slot>
      </main>
    `;
  }
}

customElements.define('main-default', MainDefault);