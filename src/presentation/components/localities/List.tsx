import React, {useState} from 'react'
import { twMerge } from 'tailwind-merge'
import { FiStar, FiX } from 'react-icons/fi'
import { InputSelect } from '../core/Inputs'
import Link from 'next/link'
import { LocalitiesRoutesEnum } from '@/lib/routes/localitiesRoutes'
import { LocationCard } from '../core/Cards/LocationCard'

interface Center{
    id: number | string
    name: string
    direction: string
    phone: string
    image: string | undefined
    status: number | string
    rating: string | undefined
}

interface FilterTagProp{
    key: number | string
    label: number | string
}

const List = () => {

    const [listOfCenters, setListOfCenters] = useState<Array<Center>>([
        {
            id: 0,
            name: "Categoria 1",
            direction: "F4VG+F49, Centro Comercial Galerias, El Recreo, Distrito Capital",
            phone: "0212-7636696",
            image: "https://valleywisehealth.org/wp-content/webpc-passthru.php?src=https://valleywisehealth.org/wp-content/uploads/2020/09/Valleywise-Health-Medical-Center.jpg&nocache=1",
            status: 0,
            rating: "4.5"
        },
        {
            id: 1,
            name: "Main Caracas Medical Center.",
            direction: "F4VCG+F49, Centro Comercial Galerias Minas, El Recreo, Distrito Capital",
            phone: "0212-7636696",
            image: "https://valleywisehealth.org/wp-content/webpc-passthru.php?src=https://valleywisehealth.org/wp-content/uploads/2020/09/Valleywise-Health-Medical-Center.jpg&nocache=1",
            status: 1,
            rating: "4.5"
        },
        {
            id: 2,
            name: "Categoria 1",
            direction: "F4VG+F49, Centro Comercial Galerias, El Recreo, Distrito Capital",
            phone: "0212-7636696",
            image: "https://valleywisehealth.org/wp-content/webpc-passthru.php?src=https://valleywisehealth.org/wp-content/uploads/2020/09/Valleywise-Health-Medical-Center.jpg&nocache=1",
            status: 0,
            rating: "4.5"
        },
        {
            id: 3,
            name: "Main Caracas Medical Center.",
            direction: "F4VCG+F49, Centro Comercial Galerias Minas, El Recreo, Distrito Capital",
            phone: "0212-7636696",
            image: "https://valleywisehealth.org/wp-content/webpc-passthru.php?src=https://valleywisehealth.org/wp-content/uploads/2020/09/Valleywise-Health-Medical-Center.jpg&nocache=1",
            status: 1,
            rating: "4.5"
        },
        {
            id: 4,
            name: "Categoria 1",
            direction: "F4VG+F49, Centro Comercial Galerias, El Recreo, Distrito Capital",
            phone: "0212-7636696",
            image: "https://valleywisehealth.org/wp-content/webpc-passthru.php?src=https://valleywisehealth.org/wp-content/uploads/2020/09/Valleywise-Health-Medical-Center.jpg&nocache=1",
            status: 0,
            rating: "4.5"
        },
        {
            id: 5,
            name: "Main Caracas Medical Center.",
            direction: "F4VCG+F49, Centro Comercial Galerias Minas, El Recreo, Distrito Capital",
            phone: "0212-7636696",
            image: "https://valleywisehealth.org/wp-content/webpc-passthru.php?src=https://valleywisehealth.org/wp-content/uploads/2020/09/Valleywise-Health-Medical-Center.jpg&nocache=1",
            status: 1,
            rating: "4.5"
        },
        {
            id: 6,
            name: "Categoria 1",
            direction: "F4VG+F49, Centro Comercial Galerias, El Recreo, Distrito Capital",
            phone: "0212-7636696",
            image: "https://valleywisehealth.org/wp-content/webpc-passthru.php?src=https://valleywisehealth.org/wp-content/uploads/2020/09/Valleywise-Health-Medical-Center.jpg&nocache=1",
            status: 0,
            rating: "4.5"
        },
        {
            id: 7,
            name: "Main Caracas Medical Center.",
            direction: "F4VCG+F49, Centro Comercial Galerias Minas, El Recreo, Distrito Capital",
            phone: "0212-7636696",
            image: "https://valleywisehealth.org/wp-content/webpc-passthru.php?src=https://valleywisehealth.org/wp-content/uploads/2020/09/Valleywise-Health-Medical-Center.jpg&nocache=1",
            status: 1,
            rating: "4.5"
        },
    ])

    const FilterTag = (prop:FilterTagProp) => {
        let {label, key} = prop
        return(
            <div key={key} className={twMerge([
                'w-fit h-fit p-[0.5rem_1rem] border border-slate-200 rounded-md font-medium text-sm text-slate-900 bg-white relative',
                "flex justify-between items-center"
            ])}>
                {label}
                <div className='w-[30px] font-sm flex flex-col justify-center items-center text-slate-900'>
                    <FiX/>
                </div>
            </div>
        )
    }

    let listOfSelect = [
        "Populares",
        "Nuevos",
        "Todos",
    ]

    let listOfFilterTags = [
        {label: "Populares", key: 1},
        {label: "Abiertos", key: 2},
        {label: "Odontología", key: 3},
    ]

    return (
        <div className="flex flex-wrap justify-start items-stretch gap-4 w-3/4 h-fit">
            <div className="w-full h-fit flex justify-between items-center pb-2">
                <p className='text-2xl font-semibold text-slate-900'>Centros disponibles en Medhaus</p>
                <div className="w-[20%]">
                    <InputSelect
                        list={listOfSelect}
                        onChangeCustom={()=>{}}
                        placeholder={listOfSelect[0]}
                        value={listOfSelect[0]}
                    />
                </div>
            </div>
            <div className="w-full h-fit flex flex-wrap justify-start gap-2 items-center pb-2">
                {listOfFilterTags.map((prop, i)=> <FilterTag {...prop}/> )}
                <p className="font-medium text-sm text-slate-900 underline ml-5">Limpiar</p>
            </div>
            <div className={twMerge([
                "grid gap-4 w-full relative",
                "lg:grid-cols-3",
                "md:grid-cols-3",
                "sm:grid-cols-2",
                "xs:grid-cols-1",
            ])}>
                {listOfCenters.map((prop, i)=> <LocationCard {...prop}/> )}
            </div>
        </div>
    )
}

export default List