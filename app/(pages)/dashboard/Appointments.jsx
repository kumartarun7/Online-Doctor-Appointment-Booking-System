
import React from 'react'
import { formateDate } from '@/app/utils/formatDate'

const Appointments = (props) => {
  return (
   <table className='w-full text-left text-sm text-gray-500'>
    <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
        <th scope='col' className='px-6 py-3'>
            Name
        </th>
        <th scope='col' className='px-6 py-3'>
           Payment
        </th> 
        <th scope='col' className='px-6 py-3'>
            Price
        </th>
        <th scope='col' className='px-6 py-3'>
            Booked on
        </th>
    </thead>
   
   <tbody>
    {
        props.data.appointments?.map((item)=><tr>

       <th  scope='row' className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap'>
         <div className='pl-3'>
            <div className='text-base font-semibold'>{item.name}</div>
           
         </div>



       </th>
         
      
       <td className="px-6 py-4">

       {item.payment && (
         <div className="flex items-center">
         <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
      Paid
     </div>
        )}


        {!item.payment && (
      <div className="flex items-center">
       <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
      Unpaid
         </div>
       )}
        </td>


        <td className="px-6 py-4">{item.price}</td>
<td className="px-6 py-4">{formateDate(item.BookedOn)}</td>



        </tr>
   
     

        )
    }
   </tbody>


   </table>
  )
}

export default Appointments
