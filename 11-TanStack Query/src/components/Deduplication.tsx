import { useQuery } from "@tanstack/react-query"

const getRandomNumber = ()=>{
    return Promise.resolve(Math.random())
}

const Deduplication = () => {
    const {data} = useQuery({
        queryKey:["randomeNumber"],
        queryFn:getRandomNumber,
    })
  return (
    <div>
        Randome Number is: {data}
    </div>
  )
}

export default Deduplication