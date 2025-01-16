import Lottie from "lottie-react";
import loadingSiperner from "../../assets/loading.json";

const Loading = () => {
    return (
        <div className='flex items-center justify-center w-full min-h-[calc(100vh-305px)]'>
         <div className="max-w-sm"><Lottie animationData={loadingSiperner} loop={true} /></div>
      </div>
    );
};

export default Loading;