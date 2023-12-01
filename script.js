const html_code = document.querySelector('.html-code textarea');
const result = document.querySelector('#result');

function run() {
    localStorage.setItem('html_code', html_code.value);
   result.contentDocument.body.innerHTML = `<style>${localStorage.css_code}</style>` + localStorage.html_code;
}
html_code.onkeyup = () => run();
html_code.value = localStorage.html_code;