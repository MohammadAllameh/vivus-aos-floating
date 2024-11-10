'use client';

import AosProvider from '@/code/components/aos';
import Tooltip from '@/code/components/floating';

export default function Page() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <Tooltip
                content="این یک توضیح است که با هاور نمایش داده می‌شود"
                placement="top"
            >
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    روی من هاور کنید
                </button>
            </Tooltip>

            {/* مثال دیگر با placement متفاوت */}
            <div className="ml-4">
                <Tooltip
                    content={
                        <div>
                            <h3 className="font-bold">عنوان تولتیپ</h3>
                            <p>می‌توانید محتوای HTML هم داشته باشید</p>
                        </div>
                    }
                    placement="right"
                >
                    <span className="cursor-help underline">
                        اطلاعات بیشتر
                    </span>
                </Tooltip>
            </div>
        </div>
    );
}