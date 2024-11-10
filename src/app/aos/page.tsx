'use client';

import AosProvider from '@/code/components/aos';

export default function Page() {
    return (
        <AosProvider>
            <div className="container mx-auto px-4 py-12">
                {/* کارت اول */}
                <div
                    data-aos="fade-up"
                    className="bg-white rounded-2xl shadow-lg p-8 mb-8 transform hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">عنوان بخش</h2>
                    <p className="text-gray-600 leading-relaxed">
                        محتوای متن شما در اینجا
                    </p>
                </div>

                {/* کارت دوم با تاخیر */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="bg-white rounded-2xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300"
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">عنوان دوم</h2>
                    <p className="text-gray-600 leading-relaxed">
                        محتوای متن دوم شما
                    </p>
                </div>

                {/* گرید سه ستونه */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {/* آیتم اول */}
                    <div
                        data-aos="zoom-in"
                        className="bg-white rounded-xl shadow-md p-6 hover:bg-blue-50 transition-colors duration-300"
                    >
                        <div className="text-blue-600 mb-4">
                            {/* آیکون یا تصویر */}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">ویژگی اول</h3>
                        <p className="text-gray-600">توضیحات ویژگی اول</p>
                    </div>

                    {/* آیتم دوم */}
                    <div
                        data-aos="zoom-in"
                        data-aos-delay="100"
                        className="bg-white rounded-xl shadow-md p-6 hover:bg-green-50 transition-colors duration-300"
                    >
                        <div className="text-green-600 mb-4">
                            {/* آیکون یا تصویر */}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">ویژگی دوم</h3>
                        <p className="text-gray-600">توضیحات ویژگی دوم</p>
                    </div>

                    {/* آیتم سوم */}
                    <div
                        data-aos="zoom-in"
                        data-aos-delay="200"
                        className="bg-white rounded-xl shadow-md p-6 hover:bg-purple-50 transition-colors duration-300"
                    >
                        <div className="text-purple-600 mb-4">
                            {/* آیکون یا تصویر */}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">ویژگی سوم</h3>
                        <p className="text-gray-600">توضیحات ویژگی سوم</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 py-12">
                {/* کارت اول */}
                <div
                    data-aos="fade-up"
                    className="bg-white rounded-2xl shadow-lg p-8 mb-8 transform hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">عنوان بخش</h2>
                    <p className="text-gray-600 leading-relaxed">
                        محتوای متن شما در اینجا
                    </p>
                </div>

                {/* کارت دوم با تاخیر */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="bg-white rounded-2xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300"
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">عنوان دوم</h2>
                    <p className="text-gray-600 leading-relaxed">
                        محتوای متن دوم شما
                    </p>
                </div>

                {/* گرید سه ستونه */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {/* آیتم اول */}
                    <div
                        data-aos="zoom-in"
                        className="bg-white rounded-xl shadow-md p-6 hover:bg-blue-50 transition-colors duration-300"
                    >
                        <div className="text-blue-600 mb-4">
                            {/* آیکون یا تصویر */}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">ویژگی اول</h3>
                        <p className="text-gray-600">توضیحات ویژگی اول</p>
                    </div>

                    {/* آیتم دوم */}
                    <div
                        data-aos="zoom-in"
                        data-aos-delay="100"
                        className="bg-white rounded-xl shadow-md p-6 hover:bg-green-50 transition-colors duration-300"
                    >
                        <div className="text-green-600 mb-4">
                            {/* آیکون یا تصویر */}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">ویژگی دوم</h3>
                        <p className="text-gray-600">توضیحات ویژگی دوم</p>
                    </div>

                    {/* آیتم سوم */}
                    <div
                        data-aos="zoom-in"
                        data-aos-delay="200"
                        className="bg-white rounded-xl shadow-md p-6 hover:bg-purple-50 transition-colors duration-300"
                    >
                        <div className="text-purple-600 mb-4">
                            {/* آیکون یا تصویر */}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">ویژگی سوم</h3>
                        <p className="text-gray-600">توضیحات ویژگی سوم</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 py-12">
                {/* کارت اول */}
                <div
                    data-aos="fade-up"
                    className="bg-white rounded-2xl shadow-lg p-8 mb-8 transform hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">عنوان بخش</h2>
                    <p className="text-gray-600 leading-relaxed">
                        محتوای متن شما در اینجا
                    </p>
                </div>

                {/* کارت دوم با تاخیر */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="bg-white rounded-2xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300"
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">عنوان دوم</h2>
                    <p className="text-gray-600 leading-relaxed">
                        محتوای متن دوم شما
                    </p>
                </div>

                {/* گرید سه ستونه */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {/* آیتم اول */}
                    <div
                        data-aos="zoom-in"
                        className="bg-white rounded-xl shadow-md p-6 hover:bg-blue-50 transition-colors duration-300"
                    >
                        <div className="text-blue-600 mb-4">
                            {/* آیکون یا تصویر */}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">ویژگی اول</h3>
                        <p className="text-gray-600">توضیحات ویژگی اول</p>
                    </div>

                    {/* آیتم دوم */}
                    <div
                        data-aos="zoom-in"
                        data-aos-delay="100"
                        className="bg-white rounded-xl shadow-md p-6 hover:bg-green-50 transition-colors duration-300"
                    >
                        <div className="text-green-600 mb-4">
                            {/* آیکون یا تصویر */}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">ویژگی دوم</h3>
                        <p className="text-gray-600">توضیحات ویژگی دوم</p>
                    </div>

                    {/* آیتم سوم */}
                    <div
                        data-aos="zoom-in"
                        data-aos-delay="200"
                        className="bg-white rounded-xl shadow-md p-6 hover:bg-purple-50 transition-colors duration-300"
                    >
                        <div className="text-purple-600 mb-4">
                            {/* آیکون یا تصویر */}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">ویژگی سوم</h3>
                        <p className="text-gray-600">توضیحات ویژگی سوم</p>
                    </div>
                </div>
            </div>
        </AosProvider>
    );
}