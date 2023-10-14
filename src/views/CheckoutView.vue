<script setup>
</script>

<template>
    <section class=" bg-gray-100 pb-8 pt-4 sm:pb-8 lg:pb-8">
        <div class="mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col items-center justify-center">
                <h1 class="text-2xl font-semibold text-gray-900">Details</h1>
                <p class="text-gray-900">order: {{ $route.params.id }}</p>
            </div>
            <div class="mx-auto mt-4 max-w-md md:mt-12">
                <div class="rounded-3xl bg-white shadow-lg">
                    <div class="px-4 py-6 sm:px-8 sm:py-10">

                        <!-- Detail Pengiriman Obat -->
                        <div class="pb-6 border-b">
                            <h2 class="text-md my-3 font-semibold text-gray-400">Pengambilan</h2>
                            <div class="flex items-center pb-2">
                                <img src="../assets/img/hospital.png" alt="location" class="h-5" />
                                <p class="ml-2 text-md font-bold text-gray-600">faskesName</p>
                            </div>
                            <div class="flex">
                                <img src="../assets/img/pin.png" alt="location" class="h-5" />
                                <p class="ml-2 text-sm font-medium text-gray-600">faksesAddress</p>
                            </div>
                        </div>

                        <div class="pb-6 border-b">
                            <h2 class="text-md my-3 font-semibold text-gray-400">Tujuan</h2>
                            <div class="flex items-center pb-2">
                                <img src="../assets/img/hospital.png" alt="location" class="h-5" />
                                <p class="ml-2 text-md font-bold text-gray-600">patientName</p>
                            </div>
                            <div class="flex">
                                <img src="../assets/img/pin.png" alt="location" class="h-5" />
                                <p class="ml-2 text-sm font-medium text-gray-600">patientAddress (Lat,Lng)</p>
                            </div>
                        </div>

                        <h2 class="text-md my-3 font-semibold text-gray-400">Detail Obat</h2>
                        <div class="">
                            <ul class="">
                                <li class="flex justify-between pb-3">
                                    <div class="">
                                        <p class="text-gray-700 font-bold">medicineName</p>
                                        <p class="text-gray-400">medicineDesription</p>
                                    </div>

                                </li>
                            </ul>
                        </div>

                        <!-- Detail Klien/ User -->
                        <div class="mt-6 space-y-3 border-t py-4">
                            <p class="text-md my-3 font-semibold text-gray-400">Penerima</p>
                            <div class="flex justify-between items-center">
                                <div>
                                    <p class="text-gray-800">patientName</p>
                                    <p class="text-gray-800">phoneNumber</p>
                                </div>
                                <img src="@/assets/img/home.png" alt="location" class="h-8" />
                            </div>
                        </div>

                        <div class="mt-12 text-center">
                            <button @click="" type="button"
                                class="group inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                                Pilih Tujuan
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
