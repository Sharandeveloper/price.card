interface plancardprops {
    name: string;
    description: string;
    btntext?: string;
    price?: string;
}
export default function plancard({
    name,
    description,
    price,
    features,
    color,
    btntext= 'start trial',
}: plancardprops
) {


    return <div
     style={{ background-color: color}}
     classname= "flex min-h-[427px] w-[320px] flex-col rounded-3xl p-8">
        <h2 classname= "mb-5 text-xl font-medium">{name}</h2>
        <div classname= "mb-5 flexitems-end text-6xl font-black">
            {price ? (
                <>
                <div>${price}</div>
                </>
            ) : (
                'free'
            )
        }
        </div>
        <p classname= "mb-5">{descriprtion}
        </p>
        <ul classname= "mb-10 flex flex-col gap-y-2">
        {features.map ((features) => (
            <li classname="flex items-center">
                <svg
                xmlns="http:/ww.w3.org/2000/svg"
                classname="mr-3 h-7 w-7"
                viewbox="0 0 20 20"
                fill="currentcolor"
                >
         <Path
         fillrule="evenoda"
         d="w10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293al 1 0 00-1.414 1.41412 2al 1 "
         cliprules="evenodd"
         />
                </svg>
                {features}
            </li>
        )
        )}
        </ul>
        <button classname="mt-auto rounded-xl bg-black py-3 px-6 text-lg font-medium text-white">{btntext}</button>
     </div>
}