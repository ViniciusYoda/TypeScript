function showCover(): void {
  const coverDiv = document.createElement('div');
  coverDiv.id = 'cover-div';

  // Impede a rolagem da página
  document.body.style.overflowY = 'hidden';

  document.body.append(coverDiv);
}

function hideCover(): void {
  const coverDiv = document.getElementById('cover-div');
  if (coverDiv) {
    coverDiv.remove();
  }
  document.body.style.overflowY = '';
}

function showPrompt(text: string, callback: (value: string | null) => void): void {
  showCover();

  const form = document.getElementById('prompt-form') as HTMLFormElement | null;
  const container = document.getElementById('prompt-form-container') as HTMLElement | null;
  const message = document.getElementById('prompt-message') as HTMLElement | null;

  if (!form || !container || !message) return;

  const textInput = form.elements.namedItem('text') as HTMLInputElement | null;
  const cancelButton = form.elements.namedItem('cancel') as HTMLButtonElement | null;

  if (!textInput || !cancelButton) return;

  message.innerHTML = text;
  textInput.value = '';

  function complete(value: string | null): void {
    hideCover();
    container!.style.display = 'none';
    document.onkeydown = null;
    callback(value);
  }

  form.onsubmit = function (): boolean {
    const value = textInput.value;
    if (value === '') return false;

    complete(value);
    return false;
  };

  cancelButton.onclick = function (): void {
    complete(null);
  };

  document.onkeydown = function (e: KeyboardEvent): void {
    if (e.key === 'Escape') {
      complete(null);
    }
  };

  const elements = form.elements;
  const firstElem = elements[0] as HTMLElement;
  const lastElem = elements[elements.length - 1] as HTMLElement;

  lastElem.onkeydown = function (e: KeyboardEvent): boolean | void {
    if (e.key === 'Tab' && !e.shiftKey) {
      firstElem.focus();
      return false;
    }
  };

  firstElem.onkeydown = function (e: KeyboardEvent): boolean | void {
    if (e.key === 'Tab' && e.shiftKey) {
      lastElem.focus();
      return false;
    }
  };

  container.style.display = 'block';
  textInput.focus();
}

const showButton = document.getElementById('show-button') as HTMLButtonElement | null;

if (showButton) {
  showButton.onclick = function (): void {
    showPrompt("Enter something<br>...smart :)", function (value: string | null) {
      alert("You entered: " + value);
    });
  };
}
