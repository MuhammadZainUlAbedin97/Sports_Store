import { GridTileImage } from '@/components/grid/tile';
import { getProducts } from "@/helper/getProducts";

import Link from 'next/link';

interface Product {
  id: string,
	country: string;
	name: string;
	description: string;
	price: number;
	image: string[];
	color?: string[];
	currency: string;
	category: string[];
	size?: string[];
}

function ThreeItemGridItem({
  item,
  size,
  priority
}: {
  item: Product;
  size: 'full' | 'half';
  priority?: boolean;
}) {
  return (
    <div
      className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'}
    >
      <Link className="relative block aspect-square h-full w-full" href={`/product/${item.id}`}>
        <GridTileImage
          src={item.image[0]}
          fill
          sizes={
            size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
          }
          priority={priority}
          alt={item.name}
          label={{
            position: size === 'full' ? 'center' : 'bottom',
            title: item.name as string,
            amount: `${item.price}`,
            currencyCode: item.currency
          }}
        />
      </Link>
    </div>
  );
}

export async function ThreeItemGrid() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getProducts()

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct, ...rest] = homepageItems;

  return (
    <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2">
      <ThreeItemGridItem size="full" item={firstProduct} priority={true} />
      <ThreeItemGridItem size="half" item={secondProduct} priority={true} />
      <ThreeItemGridItem size="half" item={thirdProduct} />
    </section>
  );
}
