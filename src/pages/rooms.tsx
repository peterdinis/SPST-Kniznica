import RoomsWrapper from "@/components/rooms/RoomsWrapper"
import Header from "@/components/shared/Header"
import { NextPage } from "next"

const RoomsPage: NextPage = () => {
    return (
        <>
          <Header name="Výber miestnosti" />
          <RoomsWrapper />
        </>
    )
}

export default RoomsPage