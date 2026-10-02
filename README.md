# Erland SecureCode

E-commerce de recursos digitales orientados al desarrollo seguro y la ciberseguridad.

Proyecto final desarrollado para el curso de React JS de CoderHouse.

## Descripción

Erland SecureCode es una Single Page Application (SPA) desarrollada con React.

La aplicación permite:

- Visualizar un catálogo de productos.
- Navegar por categorías.
- Consultar el detalle de cada producto.
- Seleccionar cantidades según el stock disponible.
- Agregar productos al carrito.
- Modificar cantidades desde el carrito.
- Realizar una compra simulada.
- Generar una orden en Firebase Firestore.
- Mostrar el ID de la orden generada.
- Actualizar el stock después de confirmar una compra.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- React Router DOM
- React Context API
- React Hooks
- Tailwind CSS
- Firebase / Firestore
- Cloudinary
- LocalStorage
- Git
- GitHub
- Vercel

## Estructura principal de componentes
##
```text
App
├── Navbar
│   └── CartWidget
├── Hero
├── ItemListContainer
│   └── ItemList
│       └── ProductCard
├── Categories
├── ItemDetailContainer
│   └── ItemDetail
│       └── ItemCount
├── Cart
│   └── CartItem
└── Checkout
    └── CheckoutForm
```

## Funcionalidades principales

### Catálogo
Los productos se obtienen dinámicamente desde la colección products de Firebase Firestore.
### Detalle de producto
Cada producto posee una vista individual mediante una ruta dinámica:

```text
/producto/:id
```

El ID utilizado corresponde al ID generado automáticamente por Firestore.

### ItemCount
El componente ItemCount permite seleccionar la cantidad de unidades a agregar al carrito.
Incluye:
- Cantidad mínima de 1.
- Límite máximo según el stock.
- Bloqueo de valores inválidos.
- Ocultamiento después de agregar el producto al carrito.


### Carrito
El estado global del carrito se administra mediante React Context.
Permite:
- Agregar productos.
- Aumentar cantidades.
- Disminuir cantidades.
- Eliminar productos.
- Vaciar el carrito.
- Calcular subtotales.
- Calcular el total de la compra.
El carrito también se guarda temporalmente en localStorage.

### CartWidget
El componente CartWidget se encuentra integrado en el Navbar y muestra:
- Ícono del carrito.
- Cantidad total de unidades agregadas.
Firebase / Firestore
Se utilizan dos colecciones principales:

```text
products
orders
```

products
Contiene la información del catálogo:

```text
name
category
type
price
level
stock
technologies
description
featured
image
```


orders
Cada compra genera un nuevo documento con información como:
```text
ticketNumber
customer
items
total
createdAt
```

La compra utiliza una transacción de Firestore para verificar el stock disponible antes de confirmar la operación.
Si existe stock suficiente:
1. Se descuenta el stock.
2. Se crea la orden.
Si el stock no es suficiente, la operación se cancela.

### Navegación
La aplicación utiliza React Router DOM.
Rutas principales:

```text
/                     Inicio
/productos            Productos
/productos?category=  Productos por categoría
/producto/:id         Detalle del producto
/categorias           Categorías
/carrito              Carrito
/checkout             Checkout
```

Instalación
1. Clonar el repositorio
```text
git clone https://github.com/erlandruiz/erland-secure-code.git
```

2. Entrar al proyecto
```text
cd erland-secure-code
```

3. Instalar dependencias
```text
npm install
```

4. Configurar variables de entorno
Crear un archivo:
```text
.env.local
```

en la raíz del proyecto.
Agregar:
```text
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

Los valores correspondientes deben configurarse con las credenciales del proyecto Firebase.
5. Ejecutar el proyecto
```text
npm run dev
```

6. Compilar para producción
```text
npm run build
```

### Deploy
La aplicación se encuentra desplegada en Vercel:
https://erland-secure-code.vercel.app/
### Repositorio
GitHub:
https://github.com/erlandruiz/erland-secure-code
### Autor
Erland Ruiz Rivera
Proyecto desarrollado como entrega final del curso React JS - CoderHouse.