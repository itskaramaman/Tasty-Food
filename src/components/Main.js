import { useSelector } from "react-redux";
import AddressSidebar from "./AddressSidebar";
import Body from "./Body";

const Main = () => {
  const isAddressSidebarOpen = useSelector(
    (store) => store.app.isAddressSidebarOpen
  );
  return (
    <div className="flex">
      {isAddressSidebarOpen && <AddressSidebar />}
      <Body />
    </div>
  );
};

export default Main;
