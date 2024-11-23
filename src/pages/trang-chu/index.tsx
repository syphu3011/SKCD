import HeaderProcess from "./components/1.Header";
import IHeader from "./components/1.Header/interfaces/IHeader";
import NoiDungProcess from "./components/2.NoiDung";
import { Roboto } from '@next/font/google';
import IFooter from "./components/3.Footer/interfaces/IFooter";
import FooterProcess from "./components/3.Footer";

const roboto = Roboto({
  subsets: ['latin', 'vietnamese'], // Hỗ trợ tiếng Việt
  weight: ['400', '700'], // Trọng lượng thông dụng
  variable: '--font-roboto', // Biến CSS
});
// Định nghĩa kiểu dữ liệu cho props
interface IData {
  Header: IHeader; // Đảm bảo Header có kiểu IHeader
  NoiDung: [],
  Footer: IFooter
}

const TrangChu: React.FC<IData> = ({ Header, NoiDung, Footer }) => {
  const HeaderProcessed = HeaderProcess(Header); // Xử lý Header
  const NoiDungProcessed = NoiDungProcess(NoiDung)
  const FooterProcessed = FooterProcess(Footer)
  return (
    <div className={roboto.variable}>
      {HeaderProcessed} {/* Render nội dung của Header đã qua xử lý */}
      {NoiDungProcessed}
      {FooterProcessed}
    </div>
  );
};

export default TrangChu;
