type Categories = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({
  categories,
  selected,
  onClick,
}: Categories) {
  return (
    <section className="px-4 pb-4 mr-10">
      <h2 className="text-4xl font-bold mb-8">Category</h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onClick(category)}
            className={`cursor-pointer my-1  ${
              category === selected && "text-sky-300 font-extrabold"
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
