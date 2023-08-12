import {queryClient} from "@/api/queryClient";
import * as api from "@/api/queries/bookingQueries";

const prefetchBookings = async () => {
    await queryClient.prefetchQuery({
      queryKey: ['allBookingPrefetch'],
      queryFn: api.getAllBookings
    })
  }

export default prefetchBookings 