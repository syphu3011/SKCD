import IHeader from "./interfaces/IHeader";
import LogoProcess from "./components/Logo";
import Danh_sach_linkProcess from "./components/Danh_sach_link";
const Header: React.FC<IHeader> = ({ Logo, skcd_link_don_gians}) => {
  const ratio = 0.6
  const LogoProcessed = <LogoProcess url={Logo.url} alternativeText={Logo.alternativeText ?? ""} height={(Logo.height ?? 100) * ratio} width={(Logo.width ?? 100) * ratio} name={Logo.name} key={Logo.id} id={Logo.id}></LogoProcess>
  const Danh_sach_linkProcessed = <Danh_sach_linkProcess danh_sach_link={skcd_link_don_gians}></Danh_sach_linkProcess>
  return (
    <div>
      <div className="flex justify-center w-full lg:p-10 p-4">
        {LogoProcessed}
      </div>
      <div className="flex-column justify-center justify-items-center bg-indigo-900 p-4 relative">
        {Danh_sach_linkProcessed}
      </div>
    </div>
  )
}
export default Header
