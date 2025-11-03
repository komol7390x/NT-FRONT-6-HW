import girl from '../../assets/girl_img.svg'

export const Follow = () => {
  return (
    <div className='grow'>

      {/* up girl */}
      <div className='bg-[#FF7F4D] h-[175px] rounded-xl relative w-[860px]'>
        <img src={girl} alt="girl" className='w-[186px] right-0 bottom-0 absolute scale-x-[-1]' />
        <h3 className='font-bold text-[24px] text-white w-[380px] p-8'>Узингиз севган булимга обуна бўлинг</h3>
      </div>

      {/* down */}
      <div className='flex pt-8 pl-8 mt-6 shadow-[0_4px_4px_0_rgba(0,0,0,0.06)] pb-30 gap-28'>

        {/* left */}
        <div>
          <h2 className='text-[30px] font-bold '>Обуна</h2>

          <div>
            <p className='mt-8 font-medium text-[14px]'>Обуна давом этиш вакти</p>
            <div className='flex w-[343px] grow items-center justify-between border border-[#EDEDED] p-3 rounded-2xl mt-1.5'>
              <p className='text-[#9A9A9A]'>30 кун</p>
              <span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.99992 12.0833L14.1666 7.91659L5.83325 7.91659L9.99992 12.0833Z" fill="#242424" />
                </svg>
              </span>
            </div>
          </div>

          <div className='mt-6'>
            <p className='mt-8 font-medium text-[14px]'>Булимни танланг</p>
            <div className='flex w-[343px] grow items-center justify-between border border-[#EDEDED] p-3 rounded-2xl mt-1.5'>
              <p className='text-[#9A9A9A]'>Фантастика</p>
              <span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.99992 12.0833L14.1666 7.91659L5.83325 7.91659L9.99992 12.0833Z" fill="#242424" />
                </svg>
              </span>
            </div>
          </div>

          <h3 className='font-bold text-[20px] mt mt-6'>Обуна 30 кун давом этади</h3>

        </div>

        {/* right */}
        <div className='mt-27'>
          <div className='w-[358px] bg-[#F5F5F5] flex flex-col justify-around h-[135px] rounded-[5px] '>
            <div className='flex items-center justify-between px-4'>
              <p className='font-medium'>Бошланиш вакти</p>
              <p className='font-bold'>12/09/2021</p>
            </div>

            <div className='flex items-center justify-between px-4'>
              <p className='font-medium' >Якунланиш вакти</p>
              <p className='font-bold'>12/10/2021</p>
            </div>

            <div className='flex items-center justify-between px-4'>
              <p className='font-medium'>Обуна нархи</p>
              <p className='text-[#3F51B5] font-bold'>12 000 сум</p>
            </div>

          </div>

          <div className='border mt-8 bg-[#3F51B5] rounded-2xl'>
            <p className='text-white text-center py-2 font-medium '>Обуна булиш</p>
          </div>
        </div>

      </div>
    </div>
  )
}
