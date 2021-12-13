import Navbar from "./Navbar";

export default function Layout() {
  return (
    <>
        <div className="flex flex-col min-h-screen bg-gray-100">
          <Navbar />
            <div id="content" className="flex-grow mx-auto p-8 w-full shadow rounded bg-white">
            </div>
            <footer className="w-full text-center border-t bg-blue-700 text-white p-4 pin-b">
              <span className="lg:text-xl"> &copy; IMPWNG 2021 </span>
            </footer>
        </div>
    </>
  );
}

