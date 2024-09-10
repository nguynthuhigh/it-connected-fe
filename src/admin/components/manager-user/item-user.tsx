import React from "react";

function ItemUser({...props}) 
 {
    const person = props.person
    return(
          <tr key={props.key} className='w-full text-sm border-t'>
            <td className='px-4 py-3 flex gap-4 items-center'>
                <div className=''><img src={person.image} alt="" className='border rounded-full w-[50px] h-[50px]'/></div>
                <div className='flex flex-col'>
                    <span>{person.name}</span>
                    <span>{person.email}</span>
                </div>
            </td>   
            <td className='p-2'>{person.ordinal}</td>
            <td className='p-2'>{person.joinday}</td>
            <td className='p-2 text-[#25FF3B]'>
                <span className={`px-2 py-1 border rounded-full font-semibold ${person.status ? 'border-[#25FF3B]' : 'text-[#FF2525] border-[#FF2525]'}`}>
                    • {person.status ? 'Active' : 'Inactive'}
                </span>
            </td>
            <td className='p-2'><span className='px-2.5 py-1 border text-[#123288] border-[#123288] rounded-full'>View more</span></td>
          </tr>
    )

}
export default ItemUser