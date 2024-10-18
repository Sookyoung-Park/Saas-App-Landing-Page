import clsx from 'clsx'
import React, {useState} from 'react'
import {Element} from 'react-scroll'
import { plans } from '../constants'

const Pricing = () => {
  const [monthly, setMonthly]= useState(false)
  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className='max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28'>
            <h3 className='h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center max-md:mb-11 max-sm:max-w-sm'>
              Flexible pricing for teams of all sizes
            </h3>

            <div className='relative z-4 mx-auto flex w-[375px] border-[3px] rounded-3xl border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]'>

              <button
              onClick={()=>setMonthly(true)}
              className={clsx("pricing-head_btn", monthly && "text-p4")}
              >
                Monthly
              </button>
              <button
              onClick={()=>setMonthly(false)}
              className={clsx("pricing-head_btn", !monthly && "text-p4")}
              >
                Annually
              </button>

              {/* animation for sliding button */}
              <div className={clsx('g4 rounded-14 before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500',!monthly && 'translate-x-full')}/>
            </div>

            
          </div>
          {/* pricing section */}
          <div className='scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6'>
            {plans.map((plan, index)=>(
              <div 
              key={plan.id}
              className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[clac(33.33%+2px)]"
              >
                {plan.title}
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  )
}

export default Pricing