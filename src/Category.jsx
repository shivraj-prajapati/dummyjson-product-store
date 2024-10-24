import React from 'react'

export default function Category({finalCategory, setCatName}) {
  let cat = finalCategory.map((v,i) => {
    return <li key={i} onClick={()=> setCatName(v.name)} className='cursor-pointer p-[5px] bg-[#ccc] text-[18px] mb-2'>{v.name}</li>
  })

  return (
    <div>
        <h3 className='p-[10px] text-[25px]'>Category</h3>

        <ul>
           {cat}
        </ul>
    </div>
  )
}
