class HeaderDefault extends HTMLElement {
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
        header {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 10px 20px;
          min-height: 56px;
          background: rgba(7, 70, 50);
          box-shadow: 0 4px 18px rgba(16, 29, 22, 0.18);
          color: #f4df9b;
          font-family: 'Libre Caslon Condensed', serif;
          backdrop-filter: blur(8px);
        }
        h2 {
          margin: 0;
          font-size: 24px;
        }
        ::slotted(a) {
          color: #fff4cf;
          font-size: 16px;
        }
      </style>
      <header>
        <h2><slot name="title"></slot></h2>
        <slot name="actions"></slot>
      </header>
    `;
  }
}
customElements.define('header-default', HeaderDefault);