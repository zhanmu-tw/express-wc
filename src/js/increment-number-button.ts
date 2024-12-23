class IncrementNumberButton extends HTMLElement {
  private button: HTMLButtonElement | null = null;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback(): void {
    this.shadowRoot!.innerHTML = `
              <style>
            button {
              background-color: #3490dc; /* Custom blue */
              color: white;
              padding: 0.5rem 1rem;
              border-radius: 0.375rem;
              border: none;
              font-size: 1rem;
              cursor: pointer;
              transition: background-color 0.3s;
            }
            button:hover {
              background-color: #2779bd; /* Darker blue on hover */
            }
            button:active {
              background-color: #1d4ed8; /* Even darker blue on click */
            }
          </style>
          <button>
            Increment Number
          </button>
    `;

    const spanElement = document.getElementById("number") as HTMLSpanElement;

    this.button = this.shadowRoot!.querySelector("button");

    if (this.button) {
      this.button.addEventListener("click", async () => {
        const currentNumber = parseInt(spanElement.textContent || "0");
        try {
          const response = await fetch("/api/increment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ currentNumber }),
          });
          const data = await response.json();
          if (response.ok) {
            spanElement.textContent = data.number.toString();
          } else {
            console.error("Failed to increment number");
          }
        } catch (error) {
          console.error("Error making POST request:", error);
        }
      });
    }
  }
}
customElements.define("increment-number-button", IncrementNumberButton);
