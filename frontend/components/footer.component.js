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
          background-color: #074632;
          color: #d3b868;
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