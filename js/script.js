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

  // Hide key info initially
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

  function updateKeyInfo(event) {
    let displayKey = event.key;

    if (displayKey === ' ') {
      displayKey = 'Space';
    }

    if (displayKey === '') {
      displayKey = 'Empty';
    }

    keyPressed.textContent = displayKey;
  }

  document.addEventListener('keydown', (e) => {
    if (
      ['Space', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'].includes(
        e.code,
      )
    ) {
      e.preventDefault();
    }

    // Hide the `initialText` and show `keyInfo`
    initialText.style.display = 'none';
    keyInfo.style.display = 'grid';
  });
});
