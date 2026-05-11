type ChaiCodeProp = {
  name: string;
  price: number;
  isSpecial?: boolean;
};

function ChaiCard({ name, price, isSpecial }: ChaiCodeProp) {
  return (
    <div>
      <h1>
        {name} {isSpecial ? "✨" : "❌"}
      </h1>
      <span>{price}</span>
    </div>
  );
}

export default ChaiCard;
