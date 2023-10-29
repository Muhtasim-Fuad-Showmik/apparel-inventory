export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mt-2 mb-4">All Products</h1>

      <table className="flex flex-col w-[80%]">
        <thead className="w-100 border-b-2 border-black">
          <tr className="w-100 flex justify-start">
            <th className="w-[10%] px-2 py-1">Code</th>
            <th className="w-[70%] px-2 py-1">Name</th>
            <th className="w-[20%] px-2 py-1">Category</th>
          </tr>
        </thead>
        <tbody className="w-100">
          <tr className="w-100 flex justify-start">
            <td className="w-[10%] px-2 py-1 text-center">P101</td>
            <td className="w-[70%] px-2 py-1 text-center">Bridal Lehenga</td>
            <td className="w-[20%] px-2 py-1 text-center">Bridal</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
