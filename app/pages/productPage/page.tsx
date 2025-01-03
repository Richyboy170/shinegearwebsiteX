import GWhite from "./GoldWhite/page";
import Navbar from "../navbar/navbar";

export default function ProductPage(){
    return(
        <div>
            <Navbar/>
            <GWhite/>
            <div className="h-20 bg-white border border-white"></div>
        </div>
    )
}