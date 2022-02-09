<template>
    <section class="bg-white py-20 overflow-hidden relative">
        <div class="container mx-auto">
            <div class="flex flex-wrap lg:justify-between mx-auto">
                <div class="w-full lg:w-1/2 xl:w-6/12 mb-16 px-4 md:pl-8">
                    <div class="flex rounded-lg shadow-lg">
                        <div class="w-1/4 2xl:w-1/4">
                            <img
                                :src="
                                    APP_URL +
                                    '/images/books_images/' +
                                    book.book_image
                                "
                                alt="Black Leather Bag"
                                class="
                                    h-full
                                    object-center object-cover
                                    block
                                    rounded-lg
                                "
                            />
                        </div>
                        <div
                            class="
                                w-3/4
                                pr-3
                                md:pl-3 md:w-8/12
                                2xl:w-3/4
                                flex flex-col
                                justify-center
                                text-right
                            "
                        >
                            <div
                                class="
                                    flex
                                    items-center
                                    justify-between
                                    w-full
                                    pt-1
                                "
                            >
                                <p
                                    class="
                                        text-xl
                                        font-black
                                        leading-none
                                        text-gray-800
                                    "
                                >
                                    {{ book.title }}
                                </p>
                            </div>
                            <p class="text-base leading-3 text-gray-600 pt-2">
                                {{ book.author }}
                            </p>
                            <p class="text-base leading-3 text-gray-600 py-4">
                                <label class="font-bold ml-2">اللغة:</label>
                                {{
                                    book.language == 'arabic'
                                        ? 'العربية'
                                        : book.language == 'english'
                                        ? 'الأنكليزية'
                                        : 'الكوردية'
                                }}
                            </p>
                            <p class="w-96 text-base leading-3 text-gray-600">
                                <label class="font-bold ml-2">الفئة:</label>
                                {{ book.category }}
                            </p>
                            <div class="flex items-center justify-between py-4">
                                <p
                                    class="
                                        text-base
                                        font-black
                                        leading-none
                                        text-gray-800
                                    "
                                >
                                    {{ book.price + ' د.ع ' }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-1/2 xl:w-5/12 px-4">
                    <div
                        class="
                            bg-white
                            relative
                            rounded-lg
                            p-8
                            sm:p-12
                            shadow-lg
                        "
                    >
                        <form>
                            <div class="mb-6">
                                <input
                                    type="text"
                                    placeholder="ألاسم"
                                    class="
                                        w-full
                                        rounded
                                        py-3
                                        px-[14px]
                                        text-body-color text-base
                                        border border-[f0f0f0]
                                        outline-none
                                        focus-visible:shadow-none
                                        focus:border-primary
                                    "
                                />
                            </div>
                            <div class="mb-6">
                                <input
                                    type="email"
                                    placeholder="البريد الإلكتروني"
                                    class="
                                        w-full
                                        rounded
                                        py-3
                                        px-[14px]
                                        text-body-color text-base
                                        border border-[f0f0f0]
                                        outline-none
                                        focus-visible:shadow-none
                                        focus:border-primary
                                    "
                                />
                            </div>
                            <div class="mb-6">
                                <input
                                    type="text"
                                    placeholder="ألهاتف"
                                    class="
                                        w-full
                                        rounded
                                        py-3
                                        px-[14px]
                                        text-body-color text-base
                                        border border-[f0f0f0]
                                        outline-none
                                        focus-visible:shadow-none
                                        focus:border-primary
                                    "
                                />
                            </div>
                            <div class="mb-6">
                                <input
                                    type="text"
                                    placeholder="ألعنوان"
                                    class="
                                        w-full
                                        rounded
                                        py-3
                                        px-[14px]
                                        text-body-color text-base
                                        border border-[f0f0f0]
                                        outline-none
                                        focus-visible:shadow-none
                                        focus:border-primary
                                    "
                                />
                            </div>
                            <div class="mb-6">
                                <textarea
                                    rows="6"
                                    placeholder="ملاحظات أخرى"
                                    class="
                                        w-full
                                        rounded
                                        py-3
                                        px-[14px]
                                        text-body-color text-base
                                        border border-[f0f0f0]
                                        resize-none
                                        outline-none
                                        focus-visible:shadow-none
                                        focus:border-primary
                                    "
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    class="
                                        w-full
                                        text-white
                                        bg-primary
                                        rounded
                                        border border-primary
                                        p-3
                                        transition
                                        hover:bg-opacity-90
                                        bg-orange-500
                                    "
                                >
                                    إرسـال الطـلـب
                                </button>
                            </div>
                        </form>
                        <div>
                            <span class="absolute -top-10 -right-9 z-[-1]">
                                <svg
                                    width="100"
                                    height="100"
                                    viewBox="0 0 100 100"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                                        fill="#3056D3"
                                    />
                                </svg>
                            </span>
                            <span class="absolute -right-10 top-[90px] z-[-1]">
                                <svg
                                    width="34"
                                    height="134"
                                    viewBox="0 0 34 134"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="31.9993"
                                        cy="132"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 132)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="117.333"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 117.333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="102.667"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 102.667)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="88"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 88)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="73.3333"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 73.3333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="45"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 45)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="16"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 16)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="59"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 59)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="30.6666"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 30.6666)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="1.66665"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 1.66665)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="132"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 132)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="117.333"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 117.333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="102.667"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 102.667)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="88"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 88)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="73.3333"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 73.3333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="45"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 45)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="16"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 16)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="59"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 59)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="30.6666"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 30.6666)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="1.66665"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 1.66665)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="132"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 132)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="117.333"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 117.333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="102.667"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 102.667)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="88"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 88)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="73.3333"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 73.3333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="45"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 45)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="16"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 16)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="59"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 59)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="30.6666"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 30.6666)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="1.66665"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 1.66665)"
                                        fill="#13C296"
                                    />
                                </svg>
                            </span>
                            <span class="absolute -left-7 -bottom-7 z-[-1]">
                                <svg
                                    width="107"
                                    height="134"
                                    viewBox="0 0 107 134"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="104.999"
                                        cy="132"
                                        r="1.66667"
                                        transform="rotate(180 104.999 132)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="104.999"
                                        cy="117.333"
                                        r="1.66667"
                                        transform="rotate(180 104.999 117.333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="104.999"
                                        cy="102.667"
                                        r="1.66667"
                                        transform="rotate(180 104.999 102.667)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="104.999"
                                        cy="88"
                                        r="1.66667"
                                        transform="rotate(180 104.999 88)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="104.999"
                                        cy="73.3333"
                                        r="1.66667"
                                        transform="rotate(180 104.999 73.3333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="104.999"
                                        cy="45"
                                        r="1.66667"
                                        transform="rotate(180 104.999 45)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="104.999"
                                        cy="16"
                                        r="1.66667"
                                        transform="rotate(180 104.999 16)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="104.999"
                                        cy="59"
                                        r="1.66667"
                                        transform="rotate(180 104.999 59)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="104.999"
                                        cy="30.6666"
                                        r="1.66667"
                                        transform="rotate(180 104.999 30.6666)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="104.999"
                                        cy="1.66665"
                                        r="1.66667"
                                        transform="rotate(180 104.999 1.66665)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="90.3333"
                                        cy="132"
                                        r="1.66667"
                                        transform="rotate(180 90.3333 132)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="90.3333"
                                        cy="117.333"
                                        r="1.66667"
                                        transform="rotate(180 90.3333 117.333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="90.3333"
                                        cy="102.667"
                                        r="1.66667"
                                        transform="rotate(180 90.3333 102.667)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="90.3333"
                                        cy="88"
                                        r="1.66667"
                                        transform="rotate(180 90.3333 88)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="90.3333"
                                        cy="73.3333"
                                        r="1.66667"
                                        transform="rotate(180 90.3333 73.3333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="90.3333"
                                        cy="45"
                                        r="1.66667"
                                        transform="rotate(180 90.3333 45)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="90.3333"
                                        cy="16"
                                        r="1.66667"
                                        transform="rotate(180 90.3333 16)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="90.3333"
                                        cy="59"
                                        r="1.66667"
                                        transform="rotate(180 90.3333 59)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="90.3333"
                                        cy="30.6666"
                                        r="1.66667"
                                        transform="rotate(180 90.3333 30.6666)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="90.3333"
                                        cy="1.66665"
                                        r="1.66667"
                                        transform="rotate(180 90.3333 1.66665)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="75.6654"
                                        cy="132"
                                        r="1.66667"
                                        transform="rotate(180 75.6654 132)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="132"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 132)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="75.6654"
                                        cy="117.333"
                                        r="1.66667"
                                        transform="rotate(180 75.6654 117.333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="117.333"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 117.333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="75.6654"
                                        cy="102.667"
                                        r="1.66667"
                                        transform="rotate(180 75.6654 102.667)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="102.667"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 102.667)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="75.6654"
                                        cy="88"
                                        r="1.66667"
                                        transform="rotate(180 75.6654 88)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="88"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 88)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="75.6654"
                                        cy="73.3333"
                                        r="1.66667"
                                        transform="rotate(180 75.6654 73.3333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="73.3333"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 73.3333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="75.6654"
                                        cy="45"
                                        r="1.66667"
                                        transform="rotate(180 75.6654 45)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="45"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 45)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="75.6654"
                                        cy="16"
                                        r="1.66667"
                                        transform="rotate(180 75.6654 16)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="16"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 16)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="75.6654"
                                        cy="59"
                                        r="1.66667"
                                        transform="rotate(180 75.6654 59)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="59"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 59)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="75.6654"
                                        cy="30.6666"
                                        r="1.66667"
                                        transform="rotate(180 75.6654 30.6666)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="30.6666"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 30.6666)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="75.6654"
                                        cy="1.66665"
                                        r="1.66667"
                                        transform="rotate(180 75.6654 1.66665)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="31.9993"
                                        cy="1.66665"
                                        r="1.66667"
                                        transform="rotate(180 31.9993 1.66665)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="60.9993"
                                        cy="132"
                                        r="1.66667"
                                        transform="rotate(180 60.9993 132)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="132"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 132)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="60.9993"
                                        cy="117.333"
                                        r="1.66667"
                                        transform="rotate(180 60.9993 117.333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="117.333"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 117.333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="60.9993"
                                        cy="102.667"
                                        r="1.66667"
                                        transform="rotate(180 60.9993 102.667)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="102.667"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 102.667)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="60.9993"
                                        cy="88"
                                        r="1.66667"
                                        transform="rotate(180 60.9993 88)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="88"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 88)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="60.9993"
                                        cy="73.3333"
                                        r="1.66667"
                                        transform="rotate(180 60.9993 73.3333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="73.3333"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 73.3333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="60.9993"
                                        cy="45"
                                        r="1.66667"
                                        transform="rotate(180 60.9993 45)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="45"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 45)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="60.9993"
                                        cy="16"
                                        r="1.66667"
                                        transform="rotate(180 60.9993 16)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="16"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 16)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="60.9993"
                                        cy="59"
                                        r="1.66667"
                                        transform="rotate(180 60.9993 59)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="59"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 59)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="60.9993"
                                        cy="30.6666"
                                        r="1.66667"
                                        transform="rotate(180 60.9993 30.6666)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="30.6666"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 30.6666)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="60.9993"
                                        cy="1.66665"
                                        r="1.66667"
                                        transform="rotate(180 60.9993 1.66665)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="17.3333"
                                        cy="1.66665"
                                        r="1.66667"
                                        transform="rotate(180 17.3333 1.66665)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="46.3333"
                                        cy="132"
                                        r="1.66667"
                                        transform="rotate(180 46.3333 132)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="132"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 132)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="46.3333"
                                        cy="117.333"
                                        r="1.66667"
                                        transform="rotate(180 46.3333 117.333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="117.333"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 117.333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="46.3333"
                                        cy="102.667"
                                        r="1.66667"
                                        transform="rotate(180 46.3333 102.667)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="102.667"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 102.667)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="46.3333"
                                        cy="88"
                                        r="1.66667"
                                        transform="rotate(180 46.3333 88)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="88"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 88)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="46.3333"
                                        cy="73.3333"
                                        r="1.66667"
                                        transform="rotate(180 46.3333 73.3333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="73.3333"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 73.3333)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="46.3333"
                                        cy="45"
                                        r="1.66667"
                                        transform="rotate(180 46.3333 45)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="45"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 45)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="46.3333"
                                        cy="16"
                                        r="1.66667"
                                        transform="rotate(180 46.3333 16)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="16"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 16)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="46.3333"
                                        cy="59"
                                        r="1.66667"
                                        transform="rotate(180 46.3333 59)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="59"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 59)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="46.3333"
                                        cy="30.6666"
                                        r="1.66667"
                                        transform="rotate(180 46.3333 30.6666)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="30.6666"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 30.6666)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="46.3333"
                                        cy="1.66665"
                                        r="1.66667"
                                        transform="rotate(180 46.3333 1.66665)"
                                        fill="#13C296"
                                    />
                                    <circle
                                        cx="2.66536"
                                        cy="1.66665"
                                        r="1.66667"
                                        transform="rotate(180 2.66536 1.66665)"
                                        fill="#13C296"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { onMounted } from '@vue/runtime-core'
import useBooks from '../../composables/books'
import { config } from '../../config'
export default {
    props: {
        slug: {
            default: 'book',
            type: String,
        },
    },
    setup(props) {
        const { getBook, book } = useBooks()
        onMounted(async () => {
            await getBook(props.slug)
        })

        return { book, APP_URL: config.APP_URL }
    },
}
</script>