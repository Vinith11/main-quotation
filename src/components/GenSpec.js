import React from 'react'
import kubo from "../assets/kubo.jpg"

const GenSpec = () => {
  return (
    <div>
        <h1 className="text-left italic text-2xl font-semibold underline px-1 py-3">
          ASHOK LEYLAND Make:
        </h1>
        <div className="border border-black p-4 max-w-5xl">
          <p className="text-left text-m italic">
            <strong>OL125D:</strong>{" "}
            <strong className="text-blue-500">125 KVA </strong> Diesel
            Generating Set comprising Liquid Cooled Engine Type{" "}
            <strong>AL6DTIDG2</strong> ELECTRIC START, 6 Cylinder, 155 BHP, 1500
            rpm Engine Coupled to{" "}
            <strong>LEYROY SOMER / CROMPTON GREAVES</strong> Make 125 kVA 100
            KW, 3 Phase, 50Hz, 4 Wire, 4 Pole - Brushless Alternator supplied
            along with <strong>SEDEMAC Digital Controller,</strong> Acoustic
            enclosure, Standard control panel, diesel tank, inbuilt AVM Pads &
            Battery with leads.
            <p>
              <strong>Dimensions (LXWXH):</strong> 3300 X 1250 X 1565 in mm
              (Silencer Outside)
            </p>
            <p>
              <strong>Weight:</strong> 1874 KG
            </p>
          </p>

          <div className="flex justify-between mt-4 text-right">
            <div></div>
            <div>
              <p>
                <strong>Basic Price:</strong> Rs. 6,80,000=00
              </p>
              <p>
                <strong>Add GST@18%:</strong> Rs. 1,22,400=00
              </p>
              <p>
                <strong>Total Value:</strong> Rs. 8,02,400=00
              </p>
            </div>
          </div>
        </div>

        <p className="text-left text-xl text-red-500 italic mt-4 lg:pb-6 ">
          <strong>Transportation from factory, Extra at Actuals:</strong>{" "}
          Approx. Rs. 5,000 - 7,000
        </p>

        <div className='flex justify-center items-center max-sm:pb-10'>
          <img src={kubo} width={150} alt="" />
        </div>
      </div>
  )
}

export default GenSpec