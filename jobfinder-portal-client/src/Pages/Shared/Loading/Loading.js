import React from 'react';

const Loading = () => {
    const loads = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-10 w-4/5 my-10 mx-auto'>
            {
                loads.map((index) =>
                    <div key={index} className="shadow rounded-md p-10 max-w-md w-full mx-auto">
                        <div className="animate-pulse bg-slate-200 h-52"></div>
                        <div className="animate-pulse flex space-x-4">
                            <div className="flex-1 space-y-6 py-1">
                                <div className="h-2 bg-slate-200 rounded"></div>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                        <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                                    </div>
                                    <div className="h-2 bg-slate-200 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
        </section>
    );
};

export default Loading;