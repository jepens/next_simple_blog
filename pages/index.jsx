import styles from "../styles/Home.module.css"
import Image from "next/image"
import { useRouter } from "next/router"
import Link  from "next/link"

export default function Home({data, page}) {


  const router = useRouter()

  // function untuk pagination

  const nextPage = ()=>{
    router.push(`/?page=${page + 1}` )
  }

  const prevPage = ()=>{
    
    router.push(`/?page=${page - 1}`)
  }


  return (
    <main className={styles.main}>
      <h1>My Blog Page {page} </h1>

      <div className={styles.cardWrapper}>
        {data.map((e)=>(
          <div key={e.id} className={styles.blogCard}>
            
            <Image 
            src={`https://picsum.photos/seed/${e.id}/200/200`} 
            width={200}
            height={200}     
            alt={e.title}
            />

            <div>
            <h3>{e.id} . {e.title}</h3>
            <p>{e.body}</p>

            <Link href={`/details/${e.id}`} > Details </Link>

            </div>

          </div>
        ))}
      </div>

      <div className={styles.btnPagination}>
        <button onClick={prevPage} >prev</button>
        <button onClick={nextPage}>next</button>

      </div>

    </main>
  )
}


export async function getServerSideProps(ctx){

  console.info(ctx.query)

  const result = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10&_page=" + ctx.query.page)
  const data = await result.json()

 


  return {
    props : {
      data : data,
      page : parseInt(ctx.query.page) || 1
    }
  }

}