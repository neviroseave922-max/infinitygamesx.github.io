
const searchInput = document.getElementById("gameSearch");
const cards = document.querySelectorAll(".game-card");
const buttons = document.querySelectorAll(".category");
const noResults = document.getElementById("noResults");

let selectedCategory = "All";

function filterGames() {
    const search = searchInput.value.toLowerCase();
    let count = 0;

    cards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        const category = card.dataset.category;

        const matchesSearch = name.includes(search);
        const matchesCategory =
            selectedCategory === "All" ||
            selectedCategory === category;

        const show = matchesSearch && matchesCategory;

        card.style.display = show ? "block" : "none";

        if (show) count++;
    });

    noResults.hidden = count > 0;
}

searchInput.addEventListener("input", filterGames);

buttons.forEach(button => {
    button.addEventListener("click", () => {
        selectedCategory = button.dataset.category;

        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        filterGames();
    });
});

function showMessage(gameName) {
    alert(gameName + " is coming soon!");
}
