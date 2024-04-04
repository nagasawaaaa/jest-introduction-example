import Link from "next/link";

interface Props {
  message: string;
}

export function HomePresentation({ message }: Props) {
  return (
    <div className="space-y-4">
      <h1 className="font-bold text-2xl">{message}</h1>
      <div>
        <Link href="/todos" className="underline hover:no-underline">Go to Todo List</Link>
      </div>
    </div>
  )
}

export async function Home() {
  return <HomePresentation message="Hello Jest!!" />;
}

export default Home;
