import TrangChu from "@/pages/trang-chu";
import IHeader from "@/pages/trang-chu/components/1.Header/interfaces/IHeader";
import IFooter from "@/pages/trang-chu/components/3.Footer/interfaces/IFooter";
import { API_TRANG_CHU, BASE_API_URL } from "@/utils/Const";

// Định nghĩa kiểu dữ liệu cho props
interface IData {
  Header: IHeader, // Đảm bảo Header là IHeader
  noi_dung: [],
  Footer: IFooter
}

async function Home() {
  const res = await fetch(BASE_API_URL + API_TRANG_CHU);
  if (!res.ok) {
    throw new Error('Lấy trang chủ thất bại');
  }
  const data: IData = await res.json();
  return (
    <div>
      <TrangChu Header={data.Header} NoiDung={data.noi_dung} Footer={data.Footer}/>
    </div>
  );
};

// // Định nghĩa getServerSideProps để lấy dữ liệu từ API
// export const getServerSideProps: GetServerSideProps = async () => {
//   try {
//     const res = await fetch(BASE_URL + API_TRANG_CHU); // Gọi API trang chủ
//     if (!res.ok) {
//       throw new Error('Lấy trang chủ thất bại');
//     }

//     const data = await res.json();
//     console.log(data); // Kiểm tra dữ liệu trả về từ API

//     // Trả về prop Header từ dữ liệu API
//     return {
//       props: {
//         Header: data.Header || {}, // Đảm bảo trả về Header, mặc định là đối tượng rỗng nếu không có
//       },
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {
//         Header: {}, // Trả về Header rỗng nếu có lỗi
//       },
//     };
//   }
// };

export default Home;
