import { useSelector } from "react-redux";

const Loader = () => {

    const isLoading = useSelector((state) => state.loading.isLoading);

    return (
        isLoading && <div className="no-scrollbar fixed top-0 left-0 right-0 bottom-0 z-50 flex h-screen items-center justify-center bg-white">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
      </div>
    );
  };
  
  export default Loader;
  