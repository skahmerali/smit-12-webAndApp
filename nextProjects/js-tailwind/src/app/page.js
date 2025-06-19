import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-between">
      <div className="w-1/2">
        <div className="">
          <h1>Class batch-12</h1>
        </div>
        <div>
          <h3>
            Saylani Mass IT Training
          </h3>
        </div>
        <div>
          <button>
            Click me
          </button>
        </div>
      </div>
      <div className="w-2/8">
          <Image src='/assets/hero.jfif' width={400} height={400} />
      </div>
    </div>
  );
}
