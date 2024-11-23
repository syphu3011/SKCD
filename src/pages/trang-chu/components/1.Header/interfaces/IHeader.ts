import ILink from "../components/Danh_sach_link/interfaces/ILink";
import ILogo from "../components/Logo/interfaces/ILogo";

export default interface IHeader {
  Logo: ILogo;
  skcd_link_don_gians: [ILink];
}
