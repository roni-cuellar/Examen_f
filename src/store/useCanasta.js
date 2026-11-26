import { create } from 'zustand';

// Zustand comparte la canasta entre Vitrina y Mi canasta
export const useCanasta = create((set) => ({
  productos: [],

  // Si el producto ya está, suma una unidad. Si es nuevo, empieza con una
      agregar: (producto) => set(({ productos }) => {
        const existe = productos.some((item) => item.id === producto.id);

        return {
          productos: existe ? productos.map((item) =>
                item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
              ): [...productos, { ...producto, cantidad: 1 }],
        };
      }),

      // Quita el producto si queda una unidad. En los demás casos, resta una.
      quitar: (id) => set(({ productos }) => ({
        productos: productos
          .filter((item) => item.id !== id || item.cantidad > 1)
          .map((item) => item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item),
      })),
      // Elimina todas las unidades del producto elegido.
      eliminar: (id) => set(({ productos }) => ({
        productos: productos.filter((producto) => producto.id !== id),
      })),
}));
