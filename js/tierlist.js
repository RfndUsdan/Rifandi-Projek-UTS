const tierlistContainer = document.getElementById("tierlist");

function renderTierList() {
    tierlistContainer.innerHTML = "";

    tierlistData.forEach(tier => {
        const row = document.createElement("div");
        row.className = `tier-row tier-${tier.tier.toLowerCase()}`;

        const label = document.createElement("div");
        label.className = "tier-label";
        label.textContent = tier.tier;

        const itemsContainer = document.createElement("div");
        itemsContainer.className = "tier-items";

        tier.items.forEach(item => {
            const card = document.createElement("div");
            card.className = "tier-card";

            const img = document.createElement("img");
            img.src = item.image;
            img.alt = item.name;

            card.appendChild(img);

            // === ARAHKAN KE DETAIL ===
            card.addEventListener("click", () => {
                window.location.href = `detail.html?id=${item.id}`;
            });

            itemsContainer.appendChild(card);
        });

        row.appendChild(label);
        row.appendChild(itemsContainer);
        tierlistContainer.appendChild(row);
    });
}

renderTierList();
