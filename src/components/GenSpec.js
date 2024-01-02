import React, { useState } from 'react'
import kubo from "../assets/kubo.jpg"


// actuator : 
// breaker: 
// controller: 
// description : lorem100
// generatorCompany: 
// modelName: 
// price: 
// remark


const GenSpec = ({ generatorCompany , modelName , controller, description, price,remark }) => {


  return (
    <div>
        <h1 className="text-left italic text-2xl font-semibold underline px-1 py-3">
          {generatorCompany}
        </h1>
        <div className="border border-black p-4 max-w-5xl">
          <p className="text-left text-m italic">
          <strong>{modelName}</strong>{" "}
            {description}
          </p>

          <div className="flex justify-between mt-4 text-right">
            <div></div>
            <div>
              <p>
                <strong>Basic Price:</strong>{price}
              </p>
              <p>
                <strong>Add GST@18%:</strong> {0.18 * price}
              </p>
              <p>
                <strong>Total Value:</strong> {Number(price) + Number(0.18 * price)}
              </p>
            </div>
          </div>
        </div>

        <p className="text-left text-xl text-red-500 italic mt-4 lg:pb-6 ">
          <strong>{remark}</strong>
        </p>

        <div className='flex justify-center items-center max-sm:pb-10'>
          <img src={kubo} width={150} alt="" />
        </div>
      </div>
  )
}

export default GenSpec