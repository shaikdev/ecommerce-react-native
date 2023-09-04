export type IRegister = {
  email: string;
  name: string;
  password: string;
  confirmpassword?: string;
};

export type ILogin = {
  email: string;
  name: string;
  profile: string;
  password: string;
};

export type IProduct = {
  _id: string;
  name: string;
  product_image: Array<undefined>;
  cover_photo: string;
  price: number;
  offer_value: number;
  description: string;
  rating: string;
  shop_name: string;
  quantity: number;
  search_keys: Array<undefined>;
  product_kg: string;
};

export interface reducers {
  test: object;
  user: object;
}
export interface storeAction {
  type: string;
  payload: object;
}
