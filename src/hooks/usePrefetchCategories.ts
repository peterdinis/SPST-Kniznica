import {queryClient} from "@/api/queryClient";
import * as api from "@/api/queries/categoryQueries";

const prefetchCategories = async () => {
    await queryClient.prefetchQuery({
      queryKey: ['allCategoriesPrefetch'],
      queryFn: api.getCategories
    })
  }

export default prefetchCategories 