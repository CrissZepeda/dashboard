import { Fragment } from "react";
import { RiHome4Line, RiArrowRightSLine } from "react-icons/ri";

function Breadcumbs(rutaBreadcumbs) {
    const { dir } = rutaBreadcumbs;
    
    if(dir == ""){
        return (
            <div className="flex gap-2 lg:gap-5 items-center py-5 px-10 text-violet-400">
            </div>
        )
    }else{
        const breadCumbs = dir.map((element, index) => (
            <Fragment key={index}>
                <RiArrowRightSLine />
                {element}
            </Fragment>
        ));
    
        return (
            <div className="flex gap-2 lg:gap-5 items-center py-5 px-10 text-violet-400">
                <RiHome4Line />       
                {breadCumbs}
            </div>
        )
    }

}

export default Breadcumbs