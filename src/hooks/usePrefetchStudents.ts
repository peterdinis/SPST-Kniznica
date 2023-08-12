import {queryClient} from "@/api/queryClient";
import * as api from "@/api/queries/studentQueries";

const prefetchStudents= async () => {
    await queryClient.prefetchQuery({
      queryKey: ['allPrefetchStudents'],
      queryFn: api.getAllStudents
    })
  }

export default prefetchStudents