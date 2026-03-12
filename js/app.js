/* ======================================================
   Bibliothèque – app.js
   Fonctions utilitaires pour les modals.
   Le traitement CRUD est à compléter.
   ====================================================== */

// ---------- Modal helpers ----------
function openModal(id) {
    document.getElementById(id).classList.add('active');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
}

// Fermer la modal en cliquant sur l'overlay
document.querySelectorAll('.modal-overlay').forEach(function (overlay) {
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
            overlay.classList.remove('active');
        }
    });
});

// Fermer avec Escape
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(function (m) {
            m.classList.remove('active');
        });
    }
});

// ---------- CRUD placeholders (à compléter) ----------

function openEditModal(btnElement) {
    // TODO : remplir le formulaire editForm avec les données de la ligne
    openModal('editModal');
}

function openDeleteModal(btnElement) {
    // TODO : afficher le nom du livre dans deleteBookName
    openModal('deleteModal');
}

function handleAdd(event) {
    event.preventDefault();
    // TODO : récupérer les données de addForm, insérer dans le tableau
    closeModal('addModal');
}

function handleEdit(event) {
    event.preventDefault();
    // TODO : récupérer les données de editForm, mettre à jour la ligne
    closeModal('editModal');
}

function handleDelete() {
    // TODO : supprimer la ligne du tableau
    closeModal('deleteModal');
}
