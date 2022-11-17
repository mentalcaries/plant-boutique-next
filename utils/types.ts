export type Product ={
  title: string,
  coverImage: string,
  description: string[],
  productImages: string[]

}

export interface ContactData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}