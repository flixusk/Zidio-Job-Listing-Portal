import React from 'react';

const CenterButtonsPage = () => {
    return (
        <div className="bg-stone-950 flex items-center justify-center min-h-screen">
            <div className="flex flex-col items-center space-y-4">
                <a href="/login">
                    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                        Hiring?
                    </button>
                </a>
                <div>
                    <h1 className='text-lg text-white'>Or</h1>
                </div>
                <a href="/login">
                    <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
                        Looking for a Job?
                    </button>
                </a>
            </div>
        </div>
    );
};

export default CenterButtonsPage;
