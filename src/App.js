import Header from "./Components/header";
import LeftSideBar from "./Components/LeftSideBar";
import SideBar from "./Components/sideBar";
import Questions from "./Components/Questions";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col lg:flex-row flex-grow">
        {/* Left Sidebar */}
        <aside className="p-2 w-full lg:w-1/4 bg-gray-50">
          <LeftSideBar />
        </aside>

        {/* Main Content */}
        <main className="p-2 w-full lg:w-1/2 bg-gray-100">
          <Questions />
        </main>

        {/* Right Sidebar */}
        <aside className="p-2 w-full lg:w-1/4 bg-gray-50">
          <SideBar />
        </aside>
      </div>
    </div>
  );
}

export default App;
