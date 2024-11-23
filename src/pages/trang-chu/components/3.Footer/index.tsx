import IFooter from "./interfaces/IFooter";

const Footer = (footer: IFooter) => {
  return (
    <div className="flex flex-col flex-start lg:pl-[96px] pl-[20px] py-[40px] bg-gray-300">
      <p className="text-gray-600 uppercase mb-[30px] font-semibold lg:text-xl text-base">{footer.ten_trang}</p>
      <p className="text-gray-600 mb-[20px] lg:text-base text-sm">{footer.dia_chi}</p>
      <p className="text-gray-600 lg:text-base text-sm">Số điện thoại: {footer.so_dien_thoai}</p>
    </div>
  )
}
export default Footer
