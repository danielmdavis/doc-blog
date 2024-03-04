
interface PageProps {
    name: string
}

export default function PageBox(props: PageProps) {
    return (
      <main className="flex flex-row items-center justify-between m-4 p-10 border-solid border-2 border-sky-500 h-1">
  
        {props.name}

      </main>
    )
}