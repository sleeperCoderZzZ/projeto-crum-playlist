class FooterDefault extends HTMLElement {
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
        footer {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 10px 20px;
          min-height: 56px;
          background: rgba(7, 70, 50);
          box-shadow: 0 -4px 18px rgba(16, 29, 22, 0.16);
          color: #f4df9b;
          font-family: 'Libre Caslon Condensed', serif;
          backdrop-filter: blur(8px);
        }
        p {
          margin: 0;
          font-size: 14px;
        }
      </style>
      <footer>
        <p><slot></slot></p>
      </footer>
    `;
  }
}

customElements.define('footer-default', FooterDefault);