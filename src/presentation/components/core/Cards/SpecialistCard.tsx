import { Specialist } from "@/lib/domain/core/entities/specialists/specialist"
import Link from "next/link"
import { FiBriefcase, FiMapPin, FiPhone, FiStar, FiUser } from "react-icons/fi"
import { twMerge } from "tailwind-merge"
import Specialists from "../../home/Specialists"
import { SpecialistsRoutesEnum } from "@/lib/routes/SpecialistsRoutes"

export const SpecialistCard = (prop:Specialist) => {
    
    let {
        id, 
        name,
        firstLastName,
        secondLastName,
        localities,
        specialties,
        phone,
        image, 
    } = prop

    return(
        <Link 
        href={`/discover/specialists/${id}`}
        className={twMerge('cursor-pointer overflow-hidden bg-white border border-slate-300 rounded-xl min-h-[35vh] h-fit flex flex-col justify-center items-center')} key={id}>
            <div className="h-full w-full px-5 py-4 flex flex-col justify-between items-center gap-2">
                <div className="w-full h-[15vh] flex justify-center items-center">
                    <span className="w-[100px] h-[100px] rounded-full overflow-hidden object-cover mx-auto relative flex flex-col justify-center items-center text-2xl bg-slate-200 text-slate-400 border">
                        {image ? <img src={image} className='' alt={name}/> : <FiUser/>}
                    </span>
                </div>
                <div className="w-full h-[29vh] border-t flex flex-col items-start justify-start gap-1 py-2">
                    <p className='font-medium text-base text-slate-900 w-full text-ellipsis overflow-hidden whitespace-nowrap text-left'>
                        {name} {firstLastName} {secondLastName}
                    </p>
                    <div className="w-full flex flex-col justify-start items-start gap-1">
                        <p className="w-fit flex justify-start items-center gap-1 font-light text-xs text-slate-500">
                            <FiBriefcase/>
                            Especialista en:
                        </p>
                        <p className='font-medium text-sm text-slate-900 overflow-hidden whitespace-nowrap text-ellipsis w-full'>{specialties.length > 0 ? specialties[0].name : "-"}</p>
                    </div>
                    <div className="w-full flex flex-col justify-start items-start gap-1">
                        <p className="w-fit flex justify-start items-center gap-1 font-light text-xs text-slate-500">
                            <FiMapPin/>
                            Consultorio:
                        </p>
                        <p className='font-medium text-sm text-slate-900 overflow-hidden whitespace-nowrap text-ellipsis w-full'>{localities.length > 0 ? localities[0].code : "-"}</p>
                    </div>
                    <div className="w-full flex flex-col justify-start items-start gap-1">
                        <p className="w-fit flex justify-start items-center gap-1 font-light text-xs text-slate-500">
                            <FiPhone/>
                            Teléfono:
                        </p>
                        <p className='font-medium text-sm text-slate-900 overflow-hidden whitespace-nowrap text-ellipsis w-full'>{phone}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}