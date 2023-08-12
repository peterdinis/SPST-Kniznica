import {queryClient} from "@/api/queryClient";
import * as api from "@/api/queries/bookQueries";

const prefetchBooks= async () => {
    await queryClient.prefetchQuery({
      queryKey: ['allBooksPrefetch'],
      queryFn: api.getBooks
    })
  }

export default prefetchBooks