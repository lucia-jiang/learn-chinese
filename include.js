document.addEventListener("DOMContentLoaded", () => {
    function insertPart(selector, file) {
        const target = document.querySelector(selector);
        if (!target) return;

        fetch(file)
            .then(response => {
                if (!response.ok) throw new Error(`Error al cargar ${file}`);
                return response.text();
            })
            .then(html => {
                target.innerHTML = html;
            })
            .catch(err => console.error(err));
    }

    insertPart("#header", "header.html");
    insertPart("#footer", "footer.html");
});
