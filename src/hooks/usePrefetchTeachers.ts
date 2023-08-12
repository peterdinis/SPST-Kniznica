import {queryClient} from "@/api/queryClient";
import * as api from "@/api/queries/teacherQueries";

const prefetchTeachers= async () => {
    await queryClient.prefetchQuery({
      queryKey: ['allPrefetchTeachers'],
      queryFn: api.getAllTeachers
    })
  }

export default prefetchTeachers