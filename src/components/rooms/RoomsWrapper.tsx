import Link from "next/link";
import * as io from "socket.io-client";

const socket = io.connect("http://locahost:8111", {

}); 

console.log("Ping work", socket);

const RoomsWrapper: React.FC = () => {
  return (
    <>
      
    </>
  );
};

export default RoomsWrapper;
