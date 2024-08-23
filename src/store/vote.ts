import { create } from 'zustand';

type Product = {
  productName: string;
  hour: Date;
  voteQtd: number;
  price: number;
};

type State = {
  product: Product[];
  handleVoteProduct: () => void;
};

const product = create<State>((set, get) => ({
  product: [],

  handleVoteProduct() {
    const { product } = get();
    const index = product.findIndex(item => item.hour === new Date());
    if (index > -1) {
      product[index].voteQtd++;
      set({ product });
    } else {
      set({
        product: [
          ...product,
          { productName: 'New Product', hour: new Date(), voteQtd: 1, price: 10 },
        ],
      });
    }
  },
}));
