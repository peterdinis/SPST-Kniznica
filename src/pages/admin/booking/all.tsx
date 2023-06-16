import AdminBooking from "@/components/admin/booking/AdminBooking";
import PrivateRoute from "@/routes/PrivateRoute";
import { NextPage } from "next";

const AllBookings: NextPage = () =>{
    return (
        <AdminBooking />
    )
}

export default PrivateRoute(AllBookings);