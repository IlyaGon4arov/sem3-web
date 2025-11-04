const changeHtml = async function(htmlPath) {
    const response = await fetch(htmlPath);
    const html = await response.text();
    document.open();
    document.write(html);
    document.close();
}

const question = confirm("Would you like to see grid version of the site (OK) or flexbox (Cancel)?");
if (question) {
    await changeHtml("index-grid.html");
} else {
    await changeHtml("index-flex.html");
}