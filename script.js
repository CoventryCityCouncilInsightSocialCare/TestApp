const filter = document.getElementById("teamFilter");

filter.addEventListener("change", () => {

    const selected = filter.value;

    document
        .querySelectorAll("#serviceTable tbody tr")
        .forEach(row => {

            if (
                selected === "all" ||
                row.dataset.team === selected
            ) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }

        });

});