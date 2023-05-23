import React, { useEffect, useState } from "react"
import { useInfiniteQuery } from "@tanstack/react-query"
import { getUsers} from '../api/usersApi'
import User from "./User"




const Users = () => {
  const [ref, setRef] = useState('')

  const { data, isLoading, isError, error, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    getNextPageParam: (_, pages) => {
        if (pages.length < 6) {
            return pages.length + 1
        } else {
            return undefined
        }
    }
  })
  
  /*---------Delay---------*/
  const delay = async () => {
    return await new Promise(resolve => setTimeout(resolve, 700))
  }

  /*---------Intersection-Observer---------*/
  useEffect(() => {
    const observer = new IntersectionObserver(async ([entry]) => {
        if (entry.isIntersecting) {
            await delay()
            fetchNextPage()
        }
    } , {threshold: .5})
    
    if (ref) observer.observe(ref)

    return () => {
        if (ref) observer.unobserve(ref)
    }
  }, [ref])



  if (isLoading) return <h1 className="text-center text-white py-7">Loading...</h1>
  if (isError) return <h1 className="text-center text-white py-7">Error:{error.message}</h1>


  
  return (
    <div className="py-10">

        {/*---------Users-List---------*/}
        <div>
            {
                data?.pages.map((group, i) => {
                    return (
                        <React.Fragment key={i}>
                            {
                                group.map(user => <User key={user.id} user={user} />)
                            }
                        </React.Fragment>
                    )
                })
            }
        </div>

        {/*---------Observer-Div---------*/}
        {
            hasNextPage && <div ref={setRef} className="w-full h-[100px] text-center text-white">Loading More...</div>
        }

    </div>
  )
}

export default Users
