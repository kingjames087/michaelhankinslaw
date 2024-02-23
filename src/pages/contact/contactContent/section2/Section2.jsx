import mapImg from '../../../../assets/newmap.jpg'

const Section2 = () => {
  return (
    <div>
        <div className='w-11/12 mx-auto max-w-screen-2xl py-12'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-14'>
                <div className='shadow-2xl p-14'> 
                    <h1 className='text-2xl text-[#16163f] py-6'>Contact Our Law Firm And Speak With An Attorney In Jacksonville Illinois</h1>
                    <p className='text-xl text-[#211f40] pb-10'>Regardless if your legal problems seem minor or you anticipate a difficult legal battle, you will need the help of a lawyer to guide you through the process of the legal system. Call the office of Michael A. Hankins for all your legal advice</p>
                    <div className='flex flex-col  gap-7 justify-center items-center text-center'>
                        <div>
                        <hr className='border-t-2 border-yellow-300 pt-3 w-1/2 mx-auto' />
                            <h2 className='text-3xl'>Phone</h2>
                            <p className='text-[18px]'>(217) 243-3434</p>
                        </div>
                        <div className='flex flex-row gap-16'>
                            <div>
                                <hr className='border-t-2 border-yellow-300 pt-3 w-1/2 mx-auto' />
                                <h2 className='text-3xl '>Office Location</h2>
                                <p className='text-[18px] '>301 W. State Street</p>
                                <p className='text-[18px] '> Jacksonville, Illinois 62650</p>
                            </div>
                            <div>
                            <hr className='border-t-2 border-yellow-300 pt-3 w-1/2 mx-auto' />
                                <h2 className='text-3xl '>Office Hours</h2>
                                <p className='text-[18px] '>Monday - Friday</p>
                                <p className='text-[18px] '>Monday - Friday</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-[20px] border-white shadow-xl max-w-[474px]  '>
                    <img src={mapImg} alt="" />
                </div>
            </div>

        </div>
      <div className='py-8'>
      <hr className='border-b-8 border-yellow-300  w-full mx-auto' />
      </div>
    </div>
  )
}

export default Section2