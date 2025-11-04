import avatar from '../../assets/avatar_img.svg'

export const ProfileInfo = () => {
  return (
      <div>
          <div className="container">
              {/*profile-up */}
              <div className="flex items-center gap-8 rounded-sm shadow-[0_4px_4px_0_rgba(0,0,0,0.06)] -ml-5 w-[1190px]">
                  <img src={avatar} alt="avatar" className="p-6" />
                  <div>
                      <h2 className="font-bold text-[30px]">Суғдиёна Икромова</h2>
                      <p className="text-[20px] mt-2.5">+998 90 253 77 53</p>
                      <p className="font-medium text-[20px] text-[#9A9A9A] mt-2.5">ID: 0001  Баланс: 45 000 сўм</p>
                  </div>
              </div>
          </div>
    </div>
  )
}
