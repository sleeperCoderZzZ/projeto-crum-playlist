class SectionDefault extends HTMLElement {
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

        section {
          width: 100%;
          max-width: 60%;
          margin: 5px auto;
          padding: 20px;
          box-sizing: border-box;
        }

        @media (max-width: 480px) {
          section {
            max-width: 100%;
            padding: 12px 0;
          }
        }

      </style>
      <section>
        <slot></slot>
      </section>
    `;
  }
}
customElements.define('section-default', SectionDefault);