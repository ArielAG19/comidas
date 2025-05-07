const comidas = [
    {
      nombre: "Empanadas",
      precio: 1500,
      descripcion: "Empanadas de carne, pollo y jamón y queso.",
      imagen: "imagenes/empanadas.webp"
    },
    {
      nombre: "Milanesas con papas",
      precio: 2500,
      descripcion: "Milanesas caseras acompañadas de papas fritas.",
      imagen: "imagenes/milanesa.webp"
    },
    {
        nombre: "torta",
        precio: 5000,
        descripcion: "torta de chocolate rellena con dulce de leche.",
        imagen: "imagenes/torta.avif"
    }
    // aca se agregan las comidas
  ];
  
  const carrito = [];
  
  function mostrarMenu() {
    const menu = document.getElementById("menu-comidas");
    menu.classList.remove("oculto");
  
    menu.innerHTML = comidas.map((comida, index) => `
      <div class="comida">
        <img src="${comida.imagen}" alt="${comida.nombre}" />
        <h3>${comida.nombre}</h3>
        <p>${comida.descripcion}</p>
        <p><strong>$${comida.precio}</strong></p>
        <button onclick="agregarAlCarrito(${index})">Añadir al carrito</button>
      </div>
    `).join('');
  }
  
  function agregarAlCarrito(index) {
    carrito.push(comidas[index]);
    actualizarCarrito();
  }
  
  function actualizarCarrito() {
    const carritoList = document.getElementById("carrito");
    carritoList.innerHTML = carrito.map(c => `<li>${c.nombre} - $${c.precio}</li>`).join('');
  }
  
  document.getElementById("btn-whatsapp").addEventListener("click", () => {
    if (carrito.length === 0) {
      alert("El carrito está vacío.");
      return;
    }
  
    const texto = carrito.map(c => `${c.nombre} - $${c.precio}`).join('\n');
    const url = `https://wa.me/542974?text=${encodeURIComponent("Hola! Quiero hacer este pedido:\n" + texto)}`;
    window.open(url, '_blank');
  });
  // en consturl donde dice 542974 va el num de celu de whatsapp al que queres enviar el pedido