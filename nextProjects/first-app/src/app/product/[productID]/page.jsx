import { Geist } from 'next/font/google';
import { Roboto } from 'next/font/google';
 
const geist = Geist({
  subsets: ['latin'],
})
const roboto = Roboto({
  weight: '900',
  subsets: ['latin'],
})
export default async function page({ params }) {
  console.log(params, 3);
  const { productID } = await params;
  console.log(productID);
  return (
    <div className={roboto.className}>
      Hello world this is a product individual page of product Number : {productID}
    </div>
  )
}
