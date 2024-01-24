import C1 from "./Column1";
import C2 from "./Column2";
import C3 from "./Column3";
export default function Page3() {
  return (
    <div className="w-full pl-12 pr-12">
      <h1 className="font-inter text-xl font-bold leading-8 tracking-tighter p-4">
        Discover the Heart of Our Functionality
      </h1>
      <div className="flex">
        {/* first column  */}
        <C1 />
        {/* second column  */}
        <C2 />
        {/* Third Column  */}
        <C3 />
      </div>
    </div>
  );
}
