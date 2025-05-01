(function () {
  const run = () => {
    const { annotate } = window.RoughNotation;
    document.querySelectorAll('.markera').forEach(el => {
      const annotation = annotate(el, {
        type: 'underline',
        color: '#e63946', // justerbar färg
        padding: [2, 4, 2, 4], // top, right, bottom, left
        strokeWidth: 1
      });
      annotation.show();
    });
  };

  if (window.RoughNotation) {
    run();
  } else {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/rough-notation/lib/rough-notation.iife.js';
    script.onload = run;
    document.head.appendChild(script);
  }
})();
