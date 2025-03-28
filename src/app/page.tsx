import './globals.css'

export default async function Home() {

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });

  const data = await res.json();

  //const regexToEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

  

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Hello World</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
