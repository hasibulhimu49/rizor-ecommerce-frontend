import { StarIcon } from "@heroicons/react/20/solid";
import Rating from "@mui/material/Rating";
import ProductReviewCard from "./ProductReviewCard";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import ProductSimilerCard from "./ProductSimilerCard";
import { mens_kurta } from "../../../data/Men/men_kurta";
import HomeSectionCard from "../HomeCardCarousel/HomeSectionCard";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    {
      id: "white",
      name: "White",
      classes: "bg-white checked:outline-gray-400",
    },
    {
      id: "gray",
      name: "Gray",
      classes: "bg-gray-200 checked:outline-gray-400",
    },
    {
      id: "black",
      name: "Black",
      classes: "bg-gray-900 checked:outline-gray-900",
    },
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ratings = [
  { label: "Excellent", width: "70%", color: "bg-green-600" },
  { label: "Very Good", width: "60%", color: "bg-green-400" },
  { label: "Good", width: "50%", color: "bg-blue-600" },
  { label: "Average", width: "40%", color: "bg-red-400" },
  { label: "Poor", width: "30%", color: "bg-red-600" },
];

export default function ProductDetails() {
  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        <section className="grid grid-cols-1 lg:grid-cols-2 mx-4 mt-10 px-4 py-10 ">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            {/* Large Image */}
            <div className="max-w-[30rem] max-h-[35rem] overflow-hidden rounded-lg">
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-5 mt-5">
              {product.images.map((item, index) => (
                <div
                  key={index}
                  className="w-20 h-20 overflow-hidden rounded-md"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-1 mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-8">
            {/* Brand & Title */}
            <div className="border-b border-gray-200 pb-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                Rizor Brand
              </p>

              <h1 className="mt-2 text-3xl font-bold text-gray-900">
                Casual Puff Sleeve Women's Dress
              </h1>
            </div>

            {/* Price */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="text-3xl font-bold text-gray-900">৳900</span>

              <span className="text-lg text-gray-400 line-through">৳1260</span>

              <span className="rounded-md bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                50% OFF
              </span>
            </div>

            {/* Rating */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Rating name="read-only" value={4.5} precision={0.5} readOnly />

              <span className="text-sm text-gray-500">34,545 Ratings</span>

              <span className="text-sm text-gray-500">1,254 Reviews</span>
            </div>

            {/* Size */}
            <form className="mt-10">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-gray-900">
                    Select Size
                  </h3>
                </div>

                <fieldset className="mt-5">
                  <div className="grid grid-cols-4 gap-3">
                    {product.sizes.map((size) => (
                      <label
                        key={size.id}
                        className="cursor-pointer rounded-lg border border-gray-300 p-3 text-center transition-all hover:border-indigo-500 has-checked:border-indigo-600 has-checked:bg-indigo-600"
                      >
                        <input
                          type="radio"
                          name="size"
                          defaultValue={size.id}
                          defaultChecked={size === product.sizes[2]}
                          disabled={!size.inStock}
                          className="sr-only"
                        />

                        <span className="text-sm font-medium text-gray-800 group-has-checked:text-white">
                          {size.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>

              {/* Buttons */}
              <div className="mt-8 space-y-3">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-indigo-600 py-3 text-base font-semibold text-white transition hover:bg-indigo-700 active:scale-95"
                >
                  Add to Cart
                </button>

                <button
                  type="button"
                  className="w-full rounded-lg border border-indigo-600 py-3 text-base font-semibold text-indigo-600 transition hover:bg-indigo-50"
                >
                  Buy Now
                </button>
              </div>
            </form>

            {/* Description */}
            <div className="mt-12 border-t border-gray-200 pt-8">
              <h2 className="text-lg font-semibold text-gray-900">
                Description
              </h2>

              <p className="mt-4 text-gray-600 leading-7">
                {product.description}
              </p>

              {/* Highlights */}
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-gray-900">
                  Highlights
                </h2>

                <ul className="mt-4 space-y-3">
                  {product.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-gray-600"
                    >
                      <span className="text-green-600">-</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Details */}
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-gray-900">Details</h2>

                <p className="mt-4 text-gray-600 leading-7">
                  {product.details}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*Rating and reviews */}
        <section className="m-10">
          <h1 className="font-bold text-xl pb-2">Recent Review and Ratings</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 justify-between border border-indigo-100 w-full rounded-sm ">
            <div>
              {
                [1,1,,3,4].map(()=>(<ProductReviewCard />))
              }
 
            </div>

            <div className="pl-20 mt-2">
              <h1 className="font-bold text-xl">Product Ratings</h1>
              <div className=" flex flex-row gap-5">
                <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                <p className="opacity-50 text-sm">5400 Ratings</p>
              </div>

              <div className="space-y-4 mr-10 mt-5">
                {ratings.map((rating) => (
                  <div key={rating.label} className="flex items-center gap-4">
                    <h6 className="w-24">{rating.label}</h6>

                    <div className="w-full h-1.5 bg-gray-200 rounded-full">
                      <div
                        className={`h-1.5 rounded-full ${rating.color}`}
                        style={{ width: rating.width }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Similer Products */}
        <section  >
          <div className="ml-9 text-xl pb-2">
            <h1 className="font-bold">Similer Products</h1>
          </div>
          <div className="flex flex-row flex-wrap justify-center py-5 space-y-7">
          {
              // [1,1,1,1,1,1,1,1,1,1,1].map((item)=>(<ProductSimilerCard/>))
              mens_kurta.map((item)=>(<HomeSectionCard props={item} />))
            }
          </div>
  
        </section>


      </div>
    </div>
  );
}
