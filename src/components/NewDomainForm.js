export default function NewDomainForm() {
  return (
    <form action="" className="flex gap-2 my-8">
      <input
        className="px-4 py-2 text-xl bg-white border border-b-4 border-blue-200 rounded-lg grow"
        type="text"
      />
      <button className="px-8 text-white bg-indigo-500 border border-b-4 border-indigo-700 rounded-lg">
        Add
      </button>
    </form>
  );
}
