import PageBox from './pageBox.tsx'

export default function Home() {

  let boxArray: any[] = []

  for (let i: any = 0; i < 5; i+=1) {
    boxArray.push(<PageBox name={i}/>)
  }

  return (
    <main className="flex min-h-screen flex-col items-center flex-start p-24">

      <div className="items-center justify-between m-4 border-solid border-2 border-pink-500 h-10 w-60">
        welcome to my homepage
      </div>

      <div className="flex flex-row">
        {boxArray}
      </div>

    </main>
  );
}
