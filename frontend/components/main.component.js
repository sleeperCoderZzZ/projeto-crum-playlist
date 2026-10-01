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
        :host {
          display: block;
          width: 100%;
        }

        main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: calc(100vh - 112px);
          width: 100%;
          padding: 32px 20px;
          box-sizing: border-box;
          background: linear-gradient(rgba(18, 31, 24, 0.44), rgba(18, 31, 24, 0.54)), url('./assets/imgs/background-home-playlist.jpg') center / cover no-repeat;
        }
      </style>
      <main>
        <slot></slot>
      </main>
    `;
  }
}

customElements.define('main-default', MainDefault);