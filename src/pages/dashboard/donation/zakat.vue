<template>
    <div class="container md:mx-auto max-h-[96vh] bg-white shadow-md rounded-xl">
        <div class="py-8 px-4 min-h-[72vh]">
            <div>
                <div class="py-2">
                    <h1 class="text-lg font-semibold leading-5">Kalkulator Zakat</h1>
                </div>
                <h1>Zakat penghasilan atau yang dike nal juga sebagai zakat profesi adalah bagian dari zakat maal yang wajib
                    dikeluarkan atas harta yang berasal dari pendapatan / penghasilan rutin dari pekerjaan yang tidak
                    melanggar syariah. Nishab zakat penghasilan sebesar 85 gram emas per tahun. Kadar zakat penghasilan
                    senilai 2,5%. Dalam praktiknya, zakat penghasilan dapat ditunaikan setiap bulan dengan nilai nishab per
                    bulannya adalah setara dengan nilai seperduabelas dari 85 gram emas, dengan kadar 2,5%. Jadi apabila
                    penghasilan setiap bulan telah melebihi nilai nishab bulanan, maka wajib dikeluarkan zakatnya sebesar
                    2,5% dari penghasilannya tersebut.
                    (Sumber: Al Qur'an Surah Al Baqarah ayat 267, Peraturan Menteri Agama Nomor 31 Tahun 2019, Fatwa MUI
                    Nomor 3 Tahun 2003, dan pendapat Shaikh Yusuf Qardawi).</h1>
            </div>
            <div class="py-4 mb-2">
                <form class="rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4 grid grid-cols-3 gap-3">
                        <div>
                            <label class="block text-gray-700 text-sm font-bold mb-2">
                                Gaji saya per bulan
                            </label>
                            <input
                                class="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text">
                        </div>
                        <div>
                            <label class="block text-gray-700 text-sm font-bold mb-2">
                                Penghasilan lain-lain per bulan
                            </label>
                            <input
                                class="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text">
                        </div>
                        <div>
                            <label class="block text-gray-700 text-sm font-bold mb-2">
                                Jumlah penghasilan per bulan
                            </label>
                            <input
                                class="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text">
                        </div>
                        <div>
                            <label class="block text-gray-700 text-sm font-bold mb-2">
                                Jumlah penghasilan per bulan
                            </label>
                            <input
                                class="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text">
                        </div>
                        <div>
                            <label class="block text-gray-700 text-sm font-bold mb-2">
                                Nisab per tahun
                            </label>
                            <input value="81.945.667" :disabled="true"
                                class="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text">
                        </div>
                        <div>
                            <label class="block text-gray-700 text-sm font-bold mb-2">
                                Nisab per bulan
                            </label>
                            <input value="81.945.667" :disabled="true"
                                class="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text">
                        </div>
                    </div>
                    <div class="w-full flex space-x-4">
                        <button class="flex items-end rounded-3xl justify-end px-6 py-1.5 gap-1 bg-base bg-[#FFC436]">
                            <span class="text-[#252525] text-sm font-bold">
                                Reset
                            </span>
                        </button>
                        <button class="flex items-end rounded-3xl justify-end  px-6 py-1.5 gap-1 bg-base bg-[#1A5D1A]">
                            <span class="text-white text-sm font-bold">
                               Hitung Zakat
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>