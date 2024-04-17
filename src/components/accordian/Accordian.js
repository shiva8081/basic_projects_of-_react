//single selection
//multi selection

import { useState } from "react"
import data from "./Data"

export const Accordian = () => {
    const [selected, setselected] = useState(null);
    const [multiselection, setmultiselection] = useState(false);
    const [multi, setmulti] = useState([]);

    const singleseclection = (id) => {
        setselected(selected === id ? null : id);
    }

    const multiSelection = (id) => {
        let cpy = [...multi];
        const findindexofcurrentid = cpy.indexOf(id)
        //    console.log(findindexofcurrentid)
        if (findindexofcurrentid === -1) cpy.push(id)
        else cpy.splice(findindexofcurrentid, 1)
        setmulti(cpy);

    }




    console.log(multi)



    console.log(selected, multiselection)





    return (
        <div className="">
            <button className="border-fuchsia-100 border-2 bg-slate-400 text-white" onClick={() => setmultiselection(!multiselection)}>enable multiselection</button>
            <div>
                {
                    data && data.length > 0 ?
                        <div>


                            {data.map((dataitem) =>
                                <div key={dataitem.id}> 
                                    <div onClick={multiselection ? () => multiSelection(dataitem.id) : () => singleseclection(dataitem.id)}>
                                        <h3>{dataitem.question}</h3>
                                        <span>+</span>

                                    </div>
                                    {
                                        multiselection?
                                        (multi.indexOf(dataitem.id)!==-1&&(dataitem.answer))
                                        :
                                        (selected === dataitem.id && (dataitem.answer))
                                       
                                    }

                                </div>
                            )}

                        </div>

                        : (<div>null</div>)
                }
            </div>

        </div>
    )
}
