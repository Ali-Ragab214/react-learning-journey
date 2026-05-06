import {
  useParams,
  useSearchParams,
} from "react-router-dom";

export default function ProductDetails() {

  // useParams
  const { id } = useParams();

  // useSearchParams
  const [searchParams, setSearchParams] =
    useSearchParams();

  // get category from URL
  const category =
    searchParams.get("category");

  return (
    <div className="p-10 space-y-6">

      <h1 className="text-3xl font-bold">
        Product Details
      </h1>

      {/* useParams */}
      <div className="border p-4 rounded">
        <h2 className="font-bold text-xl">
          useParams
        </h2>

        <p className="mt-2">
          Product ID: {id}
        </p>
      </div>

      {/* useSearchParams */}
      <div className="border p-4 rounded">
        <h2 className="font-bold text-xl">
          useSearchParams
        </h2>

        <p className="mt-2">
          Current Category: {category}
        </p>

        <div className="flex gap-3 mt-4">

          <button
            onClick={() =>
              setSearchParams({
                category: "laptop",
              })
            }
            className="bg-black text-white px-4 py-2 rounded"
          >
            Laptop
          </button>

          <button
            onClick={() =>
              setSearchParams({
                category: "phone",
              })
            }
            className="bg-black text-white px-4 py-2 rounded"
          >
            Phone
          </button>

        </div>
      </div>

    </div>
  );
}