import { create } from 'zustand';

export const useCanasta = create((set) => ({
  productos: [],

  agregar: (producto) => set(({ productos }) => {
    const existe = productos.some((item) => item.id === producto.id);

    return {
      productos: existe
        ? productos.map((item) =>
            item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
          )
        : [...productos, { ...producto, cantidad: 1 }],
    };
  }),

  quitar: (id) => set(({ productos }) => ({
    productos: productos
      .filter((item) => item.id !== id || item.cantidad > 1)
      .map((item) => item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item),
  })),
}));
