const previews = { 
    pricingCards: `
        <div class="grid md:grid-cols-3 gap-4 md:gap-8 lg:gap-20 bg-gray-100 pt-8 pb-8 pr-12 lg:pr-24 pl-12 lg:pl-24">
            <div class="bg-white text-center p-4 rounded-md">
                <h2 class="text-2xl font-semibold">Free</h2>
                <h4  class="text-4xl font-bold mt-3 mb-1">£0</h4>
                <p class="mb-3">/month</p>
                <p class="text-sm font-medium text-gray-500 my-2.5 trunctuate">✓ Feature</p>
                <p class="text-sm font-medium text-gray-500 my-2.5 trunctuate">✓ Feature</p>
                <p class="text-sm font-medium text-gray-500 my-2.5 trunctuate">✓ Feature</p>
                <p class="text-sm font-medium text-gray-500 my-2.5 trunctuate">✓ Feature</p>
                <p class="text-sm font-medium text-gray-500 my-2.5 trunctuate">✓ Feature</p>
            </div>
            <div class="bg-white text-center p-4 rounded-md">
                <h2 class="text-2xl font-semibold">Pro</h2>
                <h4  class="text-4xl font-bold mt-3 mb-1">£0</h4>
                <p class="mb-3">/month</p>
                <p class="text-sm font-medium text-gray-500 my-2.5 trunctuate">✓ Feature</p>
                <p class="text-sm font-medium text-gray-500 my-2.5 trunctuate">✓ Feature</p>
                <p class="text-sm font-medium text-gray-500 my-2.5 trunctuate">✓ Feature</p>
                <p class="text-sm font-medium text-gray-500 my-2.5 trunctuate">✓ Feature</p>
                <p class="text-sm font-medium text-gray-500 my-2.5 trunctuate">✓ Feature</p>
            </div>
            <div class="bg-white text-center p-4 rounded-md">
                <h2 class="text-2xl font-semibold">Enterprise</h2>
                <h4  class="text-4xl font-bold mt-3 mb-1">£0</h4>
                <p class="mb-3">/month</p>
                <p class="text-sm font-medium text-gray-500 my-2.5 trunctuate">✓ Feature</p>
                <p class="text-sm font-medium text-gray-500 my-2.5 trunctuate">✓ Feature</p>
                <p class="text-sm font-medium text-gray-500 my-2.5 trunctuate">✓ Feature</p>
                <p class="text-sm font-medium text-gray-500 my-2.5 trunctuate">✓ Feature</p>
                <p class="text-sm font-medium text-gray-500 my-2.5 trunctuate">✓ Feature</p>
            </div>
        </div>`,
    testimonialCards: `
        <div class="grid md:grid-cols-2 gap-4 md:gap-6 bg-gray-100 pt-6 pb-6 pr-8 pl-8">
            <div class="bg-white text-center p-4 rounded-md flex items-center">
                <div class="flex flex-col w-1/4 items-center">
                    <img class="rounded-full h-[64px] w-[64px]" src="https://ui-avatars.com/api/?name=Alice+Smith" alt="" />
                    <h4  class="text-xl font-medium text-gray-700 mt-2">Alice Smith</h4>
                </div>
                <div class="flex flex-col text-center w-full">
                    <p class="font-medium my-2.5 trunctuate p-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            <div class="bg-white text-center p-4 rounded-md flex items-center">
                <div class="flex flex-col w-1/4 items-center">
                    <img class="rounded-full h-[64px] w-[64px]" src="https://ui-avatars.com/api/?name=Bob+Doe" alt="" />
                    <h4  class="text-xl font-medium text-gray-700 mt-2">Bob Doe</h4>
                </div>
                <div class="flex flex-col text-center w-full">
                    <p class="font-medium my-2.5 trunctuate p-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            <div class="bg-white text-center p-4 rounded-md flex items-center">
                <div class="flex flex-col w-1/4 items-center">
                    <img class="rounded-full h-[64px] w-[64px]" src="https://ui-avatars.com/api/?name=Carl+Cook" alt="" />
                    <h4  class="text-xl font-medium text-gray-700 mt-2">Carl Cook</h4>
                </div>
                <div class="flex flex-col text-center w-full">
                    <p class="font-medium my-2.5 trunctuate p-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            <div class="bg-white text-center p-4 rounded-md flex items-center">
                <div class="flex flex-col w-1/4 items-center">
                    <img class="rounded-full h-[64px] w-[64px]" src="https://ui-avatars.com/api/?name=Dan+Man" alt="" />
                    <h4  class="text-xl font-medium text-gray-700 mt-2">Dan Man</h4>
                </div>
                <div class="flex flex-col text-center w-full">
                    <p class="font-medium my-2.5 trunctuate p-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>`,
    layout_2x1: `
        <div class="grid md:grid-cols-2 gap-4 pt-6 pb-6 pr-8 pl-8">
            <img src="/assets/zuck.webp" alt="" />
            <div class="bg-white text-center p-4 flex flex-col justify-center">
                <h3 class="font-semibold text-3xl p-2">Mark Zuckerberg</h3>
                <p class="font-medium my-2.5 trunctuate p-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p class="font-medium my-2.5 trunctuate p-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>`,
    layout_1x2: `
        <div>
            <img src="mountain-banner.jpg" alt="" />
            <div class="bg-white text-center p-4 flex flex-col justify-center">
                <h3 class="font-semibold text-3xl p-2">Title</h3>
                <p class="font-medium my-2.5 trunctuate p-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p class="font-medium my-2.5 trunctuate p-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>`,
    heroSection: `
        <div>
            <img src="/assets/mountain-banner.jpg" alt=""  class="relative h-[500px] w-full"/>
            <div class="absolute bg-gray-900 bg-opacity-50 top-0 h-[500px] w-full"></div>
            <div class="bg-white text-center p-4 flex flex-col justify-center absolute top-0 text-white bg-opacity-0">
                <h3 class="font-semibold text-3xl p-2">Title</h3>
                <p class="font-medium my-2.5 trunctuate p-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p class="font-medium my-2.5 trunctuate p-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>`,
    carousel: `
    <div class="relative h-[600px]">
        <img class="mySlides h-[600px] w-full" src="/assets/mountain-banner.jpg" alt="">
        <img class="mySlides h-[600px] w-full" src="/assets/sunset.jpg" alt="">
        <img class="mySlides h-[600px] w-full" src="/assets/theme-park.jpg" alt="">
        <button class="cursor-pointer absolute left-5 top-50" onclick="plusSlides(-1)">&#10094;</button>
        <button class="cursor-pointer absolute right-5" onclick="plusSlides(1)">&#10095;</button>
    </div>`,
    carouselScript: `/*  carousel */ let slideIndex = 1;showSlides(slideIndex);function plusSlides(n) {showSlides(slideIndex += n);}function currentSlide(n) {showSlides(slideIndex = n);}function showSlides(n) {let i;let slides = document.getElementsByClassName("mySlides");let dots = document.getElementsByClassName("dot");if (n > slides.length) {slideIndex = 1} if (n < 1) {slideIndex = slides.length}for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";  }for (i = 0; i < dots.length; i++) {dots[i].className = dots[i].className.replace(" active", "");}slides[slideIndex-1].style.display = "block";  dots[slideIndex-1].className += " active";} /*  carousel */`
}

export default previews