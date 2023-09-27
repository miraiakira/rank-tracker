export default function DoubleHeader({ preTitle, mainTitle }) {
  return (
    <div>
      <h3 className="text-lg text-gray-300 uppercase">{preTitle}</h3>
      <h2 className="mb-4 text-3xl font-bold leading-5">{mainTitle}</h2>
    </div>
  );
}
