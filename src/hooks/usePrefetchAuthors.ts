import {queryClient} from "@/api/queryClient";
import * as api from "@/api/queries/authorQueries";

const prefetchAuthors = async () => {
    await queryClient.prefetchQuery({
      queryKey: ['allPrefetchAuthors'],
      queryFn: api.getAuthors
    })
  }

export default prefetchAuthors 