import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { fetchProductById } from "@/app/libs/productDetailsApi";
import { fetchProducts } from "@/app/libs/productsApi";
import AddToCartButton from "@/app/components/addToCartButton";
import { FaStar } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

type Props = {
  params: { id: string };
};

// 🔹 For SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await fetchProductById(params.id);

  return {
    title: product.title,
    description: product.description.slice(0, 120),
  };
}

// 🔹 For SSG paths
export async function generateStaticParams() {
  const products = await fetchProducts();

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

// 🔹 Main Page
export default async function ProductDetails({ params }: Props) {
  const product = await fetchProductById(params.id);
  console.log(product);

  if (!product) return notFound();

  return (
    <main className="p-6 mt-10 mb-10 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={400}
          className="object-contain mx-auto"
        />
        <div className="space-y-4">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p>{product.category}</p>

          <div className="flex gap-4 items-center">
            <div className="flex text-yellow-400 items-center gap-2">
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
            </div>
            <p>{product.rating.rate}</p>
            <p>( {product.rating.count} reviews )</p>
          </div>

          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-semibold text-green-600 mb-4">
            ${product.price}
          </p>
          <div className="flex">
            <AddToCartButton product={product} />
            <Link
              href={"/"}
              className="border cursor-pointer items-center flex gap-2 py-2 px-2 rounded ml-10 bg-green-600 text-white"
            >
              <FaBagShopping /> Back to shop
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
