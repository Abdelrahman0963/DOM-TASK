const items = [
    { img: "https://st4.depositphotos.com/21486874/26758/i/450/depositphotos_267580846-stock-photo-blank-white-cosmetic-skincare-makeup.jpg", price: '40$', title: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { img: "https://images.pexels.com/photos/5218033/pexels-photo-5218033.jpeg?cs=srgb&dl=pexels-shvetsa-5218033.jpg&fm=jpg", price: '30$', title: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRV34rbB823GqbsT0ZVZCESf7EN3KVLZHo2RK3A8GBmMpWoynLuYw-x1Rp4wmPdCixwU8&usqp=CAU", price: '20$', title: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { img: "https://img.freepik.com/free-photo/top-view-party-whistles-arrangement_23-2148933547.jpg?semt=ais_hybrid&w=740", price: '10$', title: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK1yD7zr-LFme-kXZpYy58OqJtVAFsEcGGFw&s", price: '50$', title: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { img: "https://thumbs.dreamstime.com/b/woman-desk-plant-coffee-marsh-mallow-spring-desing-white-background-flat-lay-mock-up-breakfast-94701747.jpg", price: '60$', title: "Lorem ipsum dolor sit amet consectetur adipisicing elit." }
]

const productItems = document.querySelector(".product-items");
function itemsCard() {
    for (let index = 0; index < items.length; index++) {
        productItems.innerHTML += `<div class="product-item">
        <div class="item-image">
            <img src="${items[index].img}" alt="rolex-image" />
            <div class="image-icons">
                <nav id="icon">
                    <i class="fa fa-heart"></i>
                </nav>
                <nav id="icon">
                    <i class="fa-solid fa-eye"></i>
                </nav>
            </div>
        </div>
        <div class="item-info">
            <h2 class="item-price">${items[index].price}</h2>
            <p>${items[index].title}</p>
        </div>
        <div class="item-btn">
            <nav class="btn">Add to cart</nav>
        </div>
    </div>`
    }
}
itemsCard();
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.innerHTML = `<span class="minus">-</span> <span class="count">1</span> <span class="plus">+</span>`;
        btn.style.justifyContent = "space-between";
        btn.style.padding = "20px";

        const minus = btn.querySelector(".minus");
        const plus = btn.querySelector(".plus");
        const count = btn.querySelector(".count");

        minus.addEventListener("click", (min) => {
            min.stopPropagation();
            let currentValue = parseInt(count.textContent);
            if (currentValue > 1) {
                count.textContent = currentValue - 1;
            }
        });

        plus.addEventListener("click", (plu) => {
            plu.stopPropagation();
            let currentValue = parseInt(count.textContent);
            count.textContent = currentValue + 1;
        });
    });
});
