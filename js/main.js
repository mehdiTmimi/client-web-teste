const tableBody = document.getElementById("bookTableBody");
tableBody.innerHTML = ""; // Clear existing rows
const addBookToTable = (book) => {
    const row = `
                <tr>
                    <td data-label="Référence">${escapeHtml(book.ref)}</td>
                    <td data-label="Nom">${escapeHtml(book.name)}</td>
                    <td data-label="Date">${escapeHtml(book.date)}</td>
                    <td data-label="Auteur">${escapeHtml(book.author)}</td>
                    <td data-label="Actions" class="td-actions">
                        <button class="btn btn-edit" onclick="openEditModal(this)">✏️ Modifier</button>
                        <button class="btn btn-delete" onclick="openDeleteModal(this)">🗑️ Supprimer</button>
                    </td>
                </tr>
                `
    tableBody.innerHTML += row;
}
fetch("http://localhost:3003/api/books").then(response => response.json()).then(data => {
    data.forEach(book => addBookToTable(book));
}).catch(error => console.error("Erreur lors du chargement des livres :", error));
const escapeHtml = (text) => {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function (m) { return map[m]; });
}