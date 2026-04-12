fetch("/desarrollo-app/mini-proyect/componentes/header/header.html")
.then(res => res.text())
.then(data => {
    document.getElementById("header").innerHTML = data;
});

fetch("/desarrollo-app/mini-proyect/componentes/footer/footer.html")
.then(res => res.text())
.then(data => {
    document.getElementById("footer").innerHTML = data;
});
class ProductCard extends HTMLElement {

    connectedCallback(){

        const nombre = this.getAttribute("nombre");
        const precio = this.getAttribute("precio");
        const descripcion = this.getAttribute("descripcion");

        this.innerHTML = `
        <div class="card">
            <h3>${nombre}</h3>
            <p>${descripcion}</p>
            <span>$${precio}</span>
        </div>
        `;
    }

}

customElements.define("product-card", ProductCard);