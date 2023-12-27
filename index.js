fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const summary_list = document.querySelector(".summary");

    const getCategoryStyles = (category) => {
      switch (category) {
        case "Reaction":
          return {
            backgroundColor: "hsla(0, 100%, 67%, 0.1)",
            textColor: "rgb(236 104 104)",
          };
        case "Memory":
          return {
            backgroundColor: "hsla(39, 100%, 56%, 0.1)",
            textColor: "hsl(39, 100%, 56%)",
          };
        case "Verbal":
          return {
            backgroundColor: "hsla(166, 100%, 37%, 0.1)",
            textColor: "hsl(166, 100%, 37%)",
          };
        case "Visual":
          return {
            backgroundColor: "hsla(234, 85%, 45%, 0.1)",
            textColor: "hsl(234, 85%, 45%)",
          };
        default:
          return {
            backgroundColor: "hsla(0, 0%, 100%, 0.2)",
            textColor: "black",
          };
      }
    };

    // Loop through the data and dynamically create elements
    data.forEach((item) => {
      // creating each row
      const summary_li = document.createElement("div");
      summary_li.className =
        "d-flex justify-content-between align-items-center px-2 py-3 mb-3 li_item";
      const { backgroundColor, textColor } = getCategoryStyles(item.category);
      summary_li.style.backgroundColor = backgroundColor;

      // creating category container
      const categoryIconContainer = document.createElement("div");
      categoryIconContainer.className = "d-flex align-items-center";

      const iconImg = document.createElement("img");
      iconImg.src = item.icon;
      iconImg.className = "me-3 ms-3";
      categoryIconContainer.appendChild(iconImg);

      const categoryName = document.createElement("span");
      categoryName.textContent = item.category;
      categoryName.style.color = textColor;
      categoryName.className = "category_name";
      categoryIconContainer.appendChild(categoryName);

      summary_li.appendChild(categoryIconContainer);

      // Create score container
      const scoreContainer = document.createElement("div");
      scoreContainer.className = "px-3 score_container";

      const scoreBeforeSlash = document.createElement("span");
      scoreBeforeSlash.textContent = `${item.score} `;
      scoreBeforeSlash.style.color = "hsl(224, 30%, 27%)";

      const scoreAfterSlash = document.createElement("span");
      scoreAfterSlash.textContent = `/ 100`;

      scoreContainer.appendChild(scoreBeforeSlash);
      scoreContainer.appendChild(scoreAfterSlash);

      summary_li.appendChild(scoreContainer);

      // Append to main container
      summary_list.appendChild(summary_li);
    });
  })
  .catch((error) => console.error("Error fetching:", error));
