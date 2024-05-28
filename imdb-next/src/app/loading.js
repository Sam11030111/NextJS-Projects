import Image from "next/image";

export default function loading() {
  return (
    <div className="flex justify-center mt-16">
      <Image src="spinner.svg" alt="loading" width={100} height={100} />
    </div>
  );
}
