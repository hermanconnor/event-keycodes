'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const initialText = document.getElementById('initial-text');
  const keyInfo = document.getElementById('key-info');
  const keyPressed = document.getElementById('key-pressed');
  const eventKey = document.getElementById('event-key');
  const eventKeycode = document.getElementById('event-keycode');
  const eventCode = document.getElementById('event-code');
  const eventWhich = document.getElementById('event-which');
  const baseKey = document.getElementById('base-key');
  const baseKeyCard = document.getElementById('base-key-card');

  // MODIFIER KEY ELEMENTS
  const shiftKey = document.getElementById('shift-key');
  const ctrlKey = document.getElementById('ctrl-key');
  const altKey = document.getElementById('alt-key');
  const metaKey = document.getElementById('meta-key');

  // Hide `keyInfo` initially
  keyInfo.style.display = 'none';

  const shiftKeyMap = {
    1: '!',
    2: '@',
    3: '#',
    4: '$',
    5: '%',
    6: '^',
    7: '&',
    8: '*',
    9: '(',
    0: ')',
    '-': '_',
    '=': '+',
    '[': '{',
    ']': '}',
    '\\': '|',
    ';': ':',
    "'": '"',
    ',': '<',
    '.': '>',
    '/': '?',
    '`': '~',
  };

  const reverseShiftKeyMap = {};

  for (const [key, value] of Object.entries(shiftKeyMap)) {
    reverseShiftKeyMap[value] = key;
  }

  const updateModifierKeys = (event) => {
    shiftKey.classList.toggle('active', event.shiftKey);
    ctrlKey.classList.toggle('active', event.ctrlKey);
    altKey.classList.toggle('active', event.altKey);
    metaKey.classList.toggle('active', event.metaKey);
  };

  const handleBaseKey = (event) => {
    // Show base key card only when relevant
    baseKeyCard.style.display = 'none';

    // Handle shift key combinations
    if (event.shiftKey) {
      // For letter keys (uppercase)
      if (event.key.length === 1 && /[A-Z]/.test(event.key)) {
        baseKey.textContent = event.key.toLowerCase();
        baseKeyCard.style.display = 'block';
      }
      // For special characters (shift + another key)
      else if (event.key.length === 1 && event.key in reverseShiftKeyMap) {
        baseKey.textContent = reverseShiftKeyMap[event.key];
        baseKeyCard.style.display = 'block';
      } else if (!['Shift', 'Control', 'Alt', 'Meta'].includes(event.key)) {
        baseKey.textContent = event.key;
        baseKeyCard.style.display = 'block';
      }
    }
  };

  const updateKeyInfo = (event) => {
    let displayKey = event.key;

    if (displayKey === ' ') {
      displayKey = 'Space';
    }

    if (displayKey === '') {
      displayKey = 'Empty';
    }

    // Update main key display
    keyPressed.textContent = displayKey;

    // Update modifier keys
    updateModifierKeys(event);

    // Update other elements
    eventKey.textContent = displayKey;
    eventKeycode.textContent = event.keyCode;
    eventCode.textContent = event.code;
    eventWhich.textContent = event.which;

    // Handle base key for shift combinations
    handleBaseKey(event);
  };

  const resetApp = () => {
    initialText.style.display = 'block';
    keyInfo.style.display = 'none';

    shiftKey.classList.remove('active');
    ctrlKey.classList.remove('active');
    altKey.classList.remove('active');
    metaKey.classList.remove('active');

    keyPressed.textContent = '';
    eventKey.textContent = '';
    eventKeycode.textContent = '';
    eventCode.textContent = '';
    eventWhich.textContent = '';
    baseKey.textContent = '';
  };

  // EVENT LISTENERS
  document.addEventListener('keydown', (e) => {
    if (
      ['Space', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'].includes(
        e.code,
      )
    ) {
      e.preventDefault();
    }

    if (e.key === 'Escape') {
      resetApp();
      return;
    }

    // Hide the `initialText` and show `keyInfo`
    initialText.style.display = 'none';
    keyInfo.style.display = 'grid';

    // Update DOM Elements
    updateKeyInfo(e);
  });
});
